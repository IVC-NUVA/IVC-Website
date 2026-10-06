# IVC-Website

The static HTML/CSS foundation for the IVC website. No framework, dependency
installation, or build step is required.

## Local preview

With Python 3 installed, run from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Alternatively, if Node.js/npm is also installed, run `npm start`.

Open <http://127.0.0.1:8000> in your browser. Stop the server with `Ctrl+C`.
The preview server is for local development only, not production hosting.

## Adding pages

- The homepage is `public/index.html`.
- Shared styling is in `public/styles.css`.
- Add HTML pages and assets under `public/` and link to them using relative paths
  (for example, `href="about.html"`). Relative paths also work when the website
  is hosted under a subdirectory.
- Include the shared stylesheet and a unique title in each new page.

## Hosting

Publish the contents of `public/` to any static web host. Use `public` as the
publish directory and leave the build command empty. `index.html` is the entry
page; no server-side application is needed.
