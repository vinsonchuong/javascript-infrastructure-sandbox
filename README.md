# JavaScript Infrastructure Sandbox
A sandbox to explore and gather data on modern JavaScript web application
tooling.

## Serving a Small React Application
First, I'll be taking a look at the various options for compiling and serving
a new React application.

### JSPM
Following the
[getting started guide](http://jspm.io/0.17-beta-guide/creating-a-project.html)
results in the following project structure:
```text
project
  index.html
  jspm.browser.js
  jspm.config.js
  package.json
  src
    component.js
    index.js

```

The boilerplate files `jspm.browser.js` and `jspm.config.js` can be hidden
inside of the `jspm_packages` directory and automatically re-generated after
every run of `jspm install`. The
[jspm-node](https://github.com/vinsonchuong/jspm-node) package demonstrates
this hiding of boilerplate files.

After serving the `project` directory with `python -m http.server`, it takes
2-4 seconds to load and render the application.

With hot reloading, changed files are pushed to the browser and recompiled
instantaneously.
