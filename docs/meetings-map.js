(function () {
  const DATA_URL = "data/meetings-we-follow.json";
  const MIN_SEP = 20;

  const CATEGORIES = {
    "standards-terminology": { label: "Standards and terminology", swatch: "swatch-standards" },
    "testing-connectathon": { label: "Testing and connectathons", swatch: "swatch-testing" },
    "implementation-registry": { label: "Registry and implementation", swatch: "swatch-registry" },
    "developer-technical": { label: "Developer and technical", swatch: "swatch-developer" },
    "policy-ecosystem": { label: "Policy and ecosystem", swatch: "swatch-policy" }
  };

  const stage = document.querySelector(".map-stage");
  const pinsEl = document.getElementById("map-pins");
  const tooltip = document.getElementById("map-tooltip");
  const startInput = document.getElementById("date-start");
  const endInput = document.getElementById("date-end");
  const fillEl = document.getElementById("range-fill");
  const scaleEl = document.getElementById("range-scale");
  const windowLabel = document.getElementById("window-label");
  const listEl = document.getElementById("meeting-list");
  const emptyEl = document.getElementById("meeting-empty");
  const countEl = document.getElementById("meeting-count");
  const MAP_SOUTH = 150;

  if (!stage || !pinsEl || !startInput || !endInput || !listEl) return;

  let meetings = [];
  let minDay = 0;
  let maxDay = 0;
  let hoverId = null;
  let lockedId = null;

  function todayISO() {
    const now = new Date();
    const z = (n) => String(n).padStart(2, "0");
    return `${now.getFullYear()}-${z(now.getMonth() + 1)}-${z(now.getDate())}`;
  }

  function dayNumber(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return Math.round(Date.UTC(y, m - 1, d) / 86400000);
  }

  function formatDay(day) {
    return new Date(day * 86400000).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC"
    });
  }

  function categoryOf(meeting) {
    return CATEGORIES[meeting.category] || {
      label: String(meeting.category || "Meeting").replace(/-/g, " "),
      swatch: "swatch-standards"
    };
  }

  function placeLine(meeting) {
    const city = meeting.location && meeting.location.city;
    const country = meeting.location && meeting.location.country;
    return [city, country].filter(Boolean).join(", ");
  }

  function deadlineBadges(meeting, today) {
    const deadlines = meeting.deadlines || {};
    const soon = (iso) => iso && iso >= today && dayNumber(iso) - dayNumber(today) <= 30;
    const badges = [];
    if (soon(deadlines.abstracts_due)) badges.push("Abstracts close soon");
    if (soon(deadlines.early_bird)) badges.push("Early bird ending");
    return badges;
  }

  function inWindow(meeting, today, fromDay, throughDay) {
    if (!meeting.dates || meeting.dates.end < today) return false;
    const start = dayNumber(meeting.dates.start);
    const end = dayNumber(meeting.dates.end);
    return end >= fromDay && start <= throughDay;
  }

  function fromDay() {
    return minDay + Number(startInput.value);
  }

  function throughDay() {
    return minDay + Number(endInput.value);
  }

  function shownMeetings() {
    const today = todayISO();
    return meetings.filter((meeting) => inWindow(meeting, today, fromDay(), throughDay()));
  }

  function project(meeting) {
    const coords = meeting.location && meeting.location.coordinates;
    if (!coords || coords.length < 2) return null;
    const lat = Number(coords[0]);
    const lon = Number(coords[1]);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
    return { x: (lon + 180) / 360, y: (90 - lat) / MAP_SOUTH };
  }

  function clampHandles(changed) {
    const start = Number(startInput.value);
    const end = Number(endInput.value);
    if (start <= end) return;
    if (changed === "start") startInput.value = String(end);
    else endInput.value = String(start);
  }

  function raiseHandle(input) {
    startInput.style.zIndex = input === startInput ? "3" : "2";
    endInput.style.zIndex = input === endInput ? "3" : "2";
  }

  function updateFill() {
    if (!fillEl) return;
    const span = Number(endInput.max) || 1;
    const startPct = (Number(startInput.value) / span) * 100;
    const endPct = (Number(endInput.value) / span) * 100;
    fillEl.style.left = startPct + "%";
    fillEl.style.width = Math.max(0, endPct - startPct) + "%";
  }

  function shortMonth(day, withYear) {
    const date = new Date(day * 86400000);
    const month = date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" });
    if (!withYear) return month;
    return `${month} '${String(date.getUTCFullYear()).slice(2)}`;
  }

  function renderScale() {
    if (!scaleEl) return;
    scaleEl.replaceChildren();
    const span = maxDay - minDay;
    if (span <= 0) return;
    const ticks = [{ day: minDay, edge: "first" }];
    const startDate = new Date(minDay * 86400000);
    let year = startDate.getUTCFullYear();
    let month = startDate.getUTCMonth();
    const endDate = new Date(maxDay * 86400000);
    const endKey = endDate.getUTCFullYear() * 12 + endDate.getUTCMonth();
    while (year * 12 + month <= endKey) {
      const day = Math.round(Date.UTC(year, month, 1) / 86400000);
      if (day > minDay + 18 && day < maxDay - 18) ticks.push({ day: day, edge: "mid" });
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
    }
    ticks.push({ day: maxDay, edge: "last" });

    let midIndex = 0;
    ticks.forEach((tick) => {
      const el = document.createElement("div");
      el.className = "range-tick is-" + tick.edge;
      if (tick.edge === "mid") {
        const nearEdge = tick.day - minDay < 50 || maxDay - tick.day < 50;
        if (nearEdge || midIndex % 2 === 1) el.classList.add("is-minor");
        midIndex += 1;
      }
      el.style.left = ((tick.day - minDay) / span * 100) + "%";
      const mark = document.createElement("span");
      mark.className = "range-tick-mark";
      const label = document.createElement("span");
      label.className = "range-tick-label";
      const date = new Date(tick.day * 86400000);
      const withYear = tick.edge !== "mid" || date.getUTCMonth() === 0;
      label.textContent = shortMonth(tick.day, withYear);
      el.append(mark, label);
      scaleEl.appendChild(el);
    });
  }

  function separate(points, width, height) {
    const placed = points.map((point) => ({ ...point, ox: 0, oy: 0 }));
    for (let iter = 0; iter < 24; iter++) {
      for (let i = 0; i < placed.length; i++) {
        for (let j = i + 1; j < placed.length; j++) {
          const a = placed[i];
          const b = placed[j];
          let dx = (b.px + b.ox) - (a.px + a.ox);
          let dy = (b.py + b.oy) - (a.py + a.oy);
          let dist = Math.hypot(dx, dy);
          if (dist >= MIN_SEP) continue;
          if (dist < 0.01) {
            const angle = ((i + 1) * 2.4) + ((j + 1) * 0.9);
            dx = Math.cos(angle);
            dy = Math.sin(angle);
            dist = 1;
          }
          const push = (MIN_SEP - dist) / 2;
          const ux = dx / dist;
          const uy = dy / dist;
          a.ox -= ux * push;
          a.oy -= uy * push;
          b.ox += ux * push;
          b.oy += uy * push;
        }
      }
    }
    const margin = 12;
    placed.forEach((point) => {
      const cx = Math.min(width - margin, Math.max(margin, point.px + point.ox));
      const cy = Math.min(height - margin, Math.max(margin, point.py + point.oy));
      point.left = (cx / width) * 100;
      point.top = (cy / height) * 100;
    });
    return placed;
  }

  function layoutPins(shown) {
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    pinsEl.replaceChildren();
    if (!width || !height) return;
    const projected = [];
    shown.forEach((meeting) => {
      const pos = project(meeting);
      if (!pos) return;
      projected.push({
        id: meeting.id,
        meeting,
        px: pos.x * width,
        py: pos.y * height
      });
    });
    separate(projected, width, height).forEach((point) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "map-pin";
      button.dataset.id = point.id;
      button.dataset.category = point.meeting.category || "";
      button.style.left = `${point.left}%`;
      button.style.top = `${point.top}%`;
      const where = placeLine(point.meeting);
      button.setAttribute(
        "aria-label",
        [point.meeting.name, point.meeting.dates.display, where].filter(Boolean).join(", ")
      );
      button.setAttribute("aria-pressed", "false");
      pinsEl.appendChild(button);
    });
  }

  function fillTooltip(meeting) {
    tooltip.replaceChildren();
    const name = document.createElement("p");
    name.className = "tip-name";
    name.textContent = meeting.name;
    const meta = document.createElement("p");
    meta.className = "tip-meta";
    meta.textContent = [meeting.dates.display, meeting.location && meeting.location.city].filter(Boolean).join(" · ");
    tooltip.append(name, meta);
  }

  function placeTooltip(pin) {
    const block = stage.parentElement;
    const blockRect = block.getBoundingClientRect();
    const pinRect = pin.getBoundingClientRect();
    tooltip.hidden = false;
    const tipRect = tooltip.getBoundingClientRect();
    const half = tipRect.width / 2;
    let center = pinRect.left + pinRect.width / 2 - blockRect.left;
    center = Math.min(blockRect.width - 8 - half, Math.max(8 + half, center));
    let top = pinRect.top - blockRect.top - 8;
    const below = top - tipRect.height < 4;
    if (below) top = pinRect.bottom - blockRect.top + 8;
    tooltip.style.left = `${center}px`;
    tooltip.style.top = `${top}px`;
    tooltip.classList.toggle("is-below", below);
  }

  function syncHighlight() {
    const activeId = hoverId || lockedId;
    document.querySelectorAll(".map-pin, .meeting-card").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.id === activeId);
    });
    pinsEl.querySelectorAll(".map-pin").forEach((pin) => {
      pin.setAttribute("aria-pressed", String(pin.dataset.id === lockedId));
    });
    if (!activeId) {
      tooltip.hidden = true;
      return;
    }
    const meeting = meetings.find((item) => item.id === activeId);
    const pin = pinsEl.querySelector(`[data-id="${CSS.escape(activeId)}"]`);
    if (!meeting || !pin) {
      tooltip.hidden = true;
      return;
    }
    fillTooltip(meeting);
    placeTooltip(pin);
  }

  function renderCards(upcoming, today) {
    listEl.replaceChildren();
    upcoming.forEach((meeting) => {
      const card = document.createElement("article");
      card.className = "card meeting-card";
      card.id = `meeting-${meeting.id}`;
      card.dataset.id = meeting.id;

      const meta = document.createElement("p");
      meta.className = "meta";
      meta.textContent = [meeting.dates.display, placeLine(meeting)].filter(Boolean).join(" · ");

      const title = document.createElement("h3");
      title.textContent = meeting.name;

      const category = categoryOf(meeting);
      const kicker = document.createElement("p");
      kicker.className = "meeting-kicker";
      const swatch = document.createElement("span");
      swatch.className = `swatch ${category.swatch}`;
      swatch.setAttribute("aria-hidden", "true");
      kicker.append(swatch, document.createTextNode(category.label));

      card.append(meta, title, kicker);

      const badges = deadlineBadges(meeting, today);
      if (meeting.status === "save_the_date") badges.unshift("Save the date");
      if (badges.length) {
        const row = document.createElement("p");
        row.className = "meeting-badges";
        badges.forEach((text) => {
          const badge = document.createElement("span");
          badge.className = text === "Save the date" ? "save-badge" : "deadline-badge";
          badge.textContent = text;
          row.appendChild(badge);
        });
        card.appendChild(row);
      }

      if (meeting.ivc_relevance) {
        const relevance = document.createElement("p");
        relevance.textContent = meeting.ivc_relevance;
        card.appendChild(relevance);
      }

      const eventUrl = meeting.urls && meeting.urls.event;
      if (eventUrl) {
        const linkWrap = document.createElement("p");
        const link = document.createElement("a");
        link.className = "text-link";
        link.href = eventUrl;
        link.textContent = "Event website";
        linkWrap.appendChild(link);
        card.appendChild(linkWrap);
      }

      listEl.appendChild(card);
    });
  }

  function apply() {
    const today = todayISO();
    const from = fromDay();
    const through = throughDay();
    const shown = meetings.filter((meeting) => inWindow(meeting, today, from, through));
    const shownIds = new Set(shown.map((meeting) => meeting.id));
    if (lockedId && !shownIds.has(lockedId)) lockedId = null;
    if (hoverId && !shownIds.has(hoverId)) hoverId = null;

    layoutPins(shown);
    listEl.querySelectorAll(".meeting-card").forEach((card) => {
      card.hidden = !shownIds.has(card.dataset.id);
    });

    if (emptyEl) emptyEl.hidden = shown.length !== 0;
    if (countEl) {
      countEl.textContent = shown.length === 1 ? "1 meeting" : `${shown.length} meetings`;
    }
    const startLabel = formatDay(from);
    const endLabel = formatDay(through);
    if (windowLabel) windowLabel.textContent = `Showing meetings from ${startLabel} to ${endLabel}.`;
    startInput.setAttribute("aria-valuetext", startLabel);
    endInput.setAttribute("aria-valuetext", endLabel);
    updateFill();
    syncHighlight();
  }

  function pinFromEvent(event) {
    return event.target.closest(".map-pin");
  }

  pinsEl.addEventListener("pointerover", (event) => {
    const pin = pinFromEvent(event);
    if (!pin) return;
    hoverId = pin.dataset.id;
    syncHighlight();
  });

  pinsEl.addEventListener("pointerout", (event) => {
    const pin = pinFromEvent(event);
    if (!pin || pin.contains(event.relatedTarget)) return;
    if (hoverId === pin.dataset.id) hoverId = null;
    syncHighlight();
  });

  pinsEl.addEventListener("focusin", (event) => {
    const pin = pinFromEvent(event);
    if (!pin) return;
    hoverId = pin.dataset.id;
    syncHighlight();
  });

  pinsEl.addEventListener("focusout", (event) => {
    const pin = pinFromEvent(event);
    if (!pin) return;
    if (hoverId === pin.dataset.id) hoverId = null;
    syncHighlight();
  });

  pinsEl.addEventListener("click", (event) => {
    const pin = pinFromEvent(event);
    if (!pin) return;
    lockedId = pin.dataset.id;
    hoverId = pin.dataset.id;
    syncHighlight();
    const card = document.getElementById(`meeting-${pin.dataset.id}`);
    if (!card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
  });

  listEl.addEventListener("pointerover", (event) => {
    const card = event.target.closest(".meeting-card");
    if (!card) return;
    hoverId = card.dataset.id;
    syncHighlight();
  });

  listEl.addEventListener("pointerout", (event) => {
    const card = event.target.closest(".meeting-card");
    if (!card || card.contains(event.relatedTarget)) return;
    if (hoverId === card.dataset.id) hoverId = null;
    syncHighlight();
  });

  listEl.addEventListener("focusin", (event) => {
    const card = event.target.closest(".meeting-card");
    if (!card) return;
    hoverId = card.dataset.id;
    syncHighlight();
  });

  listEl.addEventListener("focusout", (event) => {
    const card = event.target.closest(".meeting-card");
    if (!card || card.contains(event.relatedTarget)) return;
    if (hoverId === card.dataset.id) hoverId = null;
    syncHighlight();
  });

  listEl.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    const card = event.target.closest(".meeting-card");
    if (!card) return;
    lockedId = card.dataset.id;
    syncHighlight();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !lockedId) return;
    lockedId = null;
    syncHighlight();
  });

  function onRange(event) {
    clampHandles(event.target === startInput ? "start" : "end");
    raiseHandle(event.target);
    apply();
  }

  startInput.addEventListener("input", onRange);
  endInput.addEventListener("input", onRange);
  startInput.addEventListener("pointerdown", () => raiseHandle(startInput));
  endInput.addEventListener("pointerdown", () => raiseHandle(endInput));

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      if (!meetings.length || startInput.disabled) return;
      layoutPins(shownMeetings());
      syncHighlight();
    });
    observer.observe(stage);
  }

  fetch(DATA_URL)
    .then((response) => {
      if (!response.ok) throw new Error(String(response.status));
      return response.json();
    })
    .then((data) => {
      const today = todayISO();
      meetings = (Array.isArray(data) ? data : [])
        .filter((meeting) => meeting && meeting.dates && meeting.dates.start && meeting.dates.end)
        .sort((a, b) => a.dates.start.localeCompare(b.dates.start) || a.name.localeCompare(b.name));
      const upcoming = meetings.filter((meeting) => meeting.dates.end >= today);
      renderCards(upcoming, today);
      if (!upcoming.length) {
        if (windowLabel) windowLabel.textContent = "No upcoming meetings.";
        if (emptyEl) emptyEl.hidden = false;
        if (countEl) countEl.textContent = "0 meetings";
        return;
      }
      const starts = upcoming.map((meeting) => dayNumber(meeting.dates.start));
      const ends = upcoming.map((meeting) => dayNumber(meeting.dates.end));
      minDay = Math.min(...starts);
      maxDay = Math.max(...ends);
      const span = String(maxDay - minDay);
      [startInput, endInput].forEach((input) => {
        input.min = "0";
        input.max = span;
        input.disabled = false;
      });
      startInput.value = "0";
      endInput.value = span;
      raiseHandle(endInput);
      renderScale();
      apply();
    })
    .catch(() => {
      if (windowLabel) windowLabel.textContent = "The meeting list could not be loaded.";
      const note = document.createElement("p");
      note.textContent = "The meeting list could not be loaded.";
      listEl.replaceChildren(note);
    });
})();
