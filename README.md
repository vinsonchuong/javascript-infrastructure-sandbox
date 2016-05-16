# JavaScript Infrastructure Sandbox
A sandbox to explore and gather data on modern JavaScript web application
tooling.

## Serving a Small React Application
First, I'll be taking a look at the various options for compiling and serving
a new React application for development.

### Using JSPM
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

External dependencies are installed in the `node_modules` and `jspm_packages`.
These directories are usually excluded from version control.

The boilerplate files `jspm.browser.js` and `jspm.config.js` can be hidden
inside of the `jspm_packages` directory and automatically re-generated after
every run of `jspm install`. The
[jspm-node](https://github.com/vinsonchuong/jspm-node) package demonstrates
this hiding of boilerplate files.

After serving the `project` directory with `python -m http.server`, it takes
2-4 seconds to load and render the application.

With hot reloading, changed files are pushed to the browser and recompiled
instantaneously.

### Using Webpack
Following the `babel-loader` [README](https://github.com/babel/babel-loader),
Webpack [Usage](http://webpack.github.io/docs/usage.html) documentation results
in the following project structure:

```text
project
  index.html
  package.json
  src
    component.js
    index.js
  webpack.config.js
```

External dependencies are installed in the `node_modules`. This directory is
usually excluded from version control. The contents of the `src` directory are
compiled into a `dist.js` file, which should be excluded from version control.

Because the application is pre-compiled into `dist.js`, load time consists only
of execution time, which is very small. `webpack` watches the file system for
changes and recompiles only the necessary files--incremental rebuilding, which
is very fast.

### Using Broccoli
[jayphelps/broccoli-babel-boilerplate](https://github.com/jayphelps/broccoli-babel-boilerplate)
shows an example of using Broccoli with ES2015 modules. Broccoli requires the
use of external plugins both for ES2015 support and for the importing of
modules. A fully configured Broccoli project is similar in structure to a fully
configured Webpack project.

### Using Browserify
A Browserify project has the same structure as a Webpack project as well. See
[babel/babelify](https://github.com/babel/babelify) for examples. However,
Browserify does not provide a means for recompiling on file change. So,
additional configuration is required.

### Using Brunch
Following [The Brunch.io Guide](https://github.com/brunch/brunch-guide) and the
[babel-brunch README](https://github.com/babel/babel-brunch) yields the
following project structure:

```text
project
  app
    assets
      index.html
    component.js
    index.js
  brunch-config.js
  package.json
```

The contents of the `app` directory are compiled and copied into the `public`
directory, which should be excluded from version control.

The application is served via `brunch watch --server`, which performs
incremental rebuilding and provides a static file server.

### Using Duo
Duo provides a zero-configuration CLI for compiling JS and CSS. It also
automatically installs external dependencies. Unfortunately, it currently
does not support ES2015 via Babel 6.

### Findings
Most build tools concatenate the compiled ES2015 modules into a single file for
easy consumption by the browser. Each module is wrapped and only evaluated when
imported as a dependency. Some build tools have the concept of an entry point,
a module that is evaluated immediately when the build artifact is evaluated.
In contrast, Brunch, requires explicitly evaluating a module by name.

On the other hand, JSPM handles compilation in the browser and does not
concatenate modules into a single file.

Both approaches have different performance characteristics that can be
optimized with caching.

### Ideal Infrastructure
The WHATWG is developing the
[JavaScript Loader Standard](https://github.com/whatwg/loader), which defines
how browsers should handle the `import` and `export` keywords. The
[ES6 Module Loader Polyfill](https://github.com/ModuleLoader/es6-module-loader)
allows that behavior to be used today.
