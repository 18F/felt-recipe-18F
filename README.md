# The 18F Felt recipe
This is a [Felt] recipe with the following features:

## CSS
We process `.css` files with [PostCSS] and [CSSnext].

### Why PostCSS?
Because remembering all of the browser-specific
prefixes for CSS selectors and properties is hard, and PostCSS's
[plugin ecosystem][postcss plugins] is chock full of awesome tools.

### Why CSSnext?
Because writing future-friendly code is always
good, and many [future CSS features](http://cssnext.io/features/)
make CSS easier to read and write.

## Sass
We process `.sass` and `.scss` files as [Sass], then apply all of the
[CSS](#css) transforms listed above.

### Why Sass?
Because it's is a feature-rich and battle-hardened
language with a healthy [ecosystem][sass tools] including
tools like [Bourbon] and [Neat].

## JavaScript
We process `.js` files as [ES2015] with [Babel] and [Rollup], producing
sourcemaps (which make debugging in browsers easier) for each file.

### Why Babel?
Because many of the new [ES2015] language features make
JavaScript easier (and more fun) to read _and_ write.

### Why Rollup?
It uses a "tree-shaking" algorithm to include only the
specific parts of modules that you need when you use import 
[ES6 modules](https://github.com/rollup/rollup/wiki/ES6-modules),
which can make your browser builds dramatically smaller.

## Usage
First, install [Felt] and the recipe as [npm] modules. If you don't
have a [package.json] already, you can run `npm init` (or `npm init
-y`) to create one. Then, run:

```
npm i --save felt felt-recipe-18F
```

Next, set up your "source" directory, where Felt will search for
your `.js`, `.css`, and/or `.scss` files. We suggest `src` as the
name for this directory, in which your file structure may look like:

```
src/
|
+-- css/
|   |
|   +-- main.scss
|
+-- js/
    |
    +-- main.js
```

Try adding one or more of these files, then run:

```
./node_modules/.bin/felt --recipe 18F --src src --export dist
```

Assuming that you have the above file structure, you should also now
have:

```
dist/
|
+-- css/
|   |
|   +-- main.css
|   |
|   +-- main.css.map
|
+-- js/
    |
    +-- main.js
    |
    +-- main.js.map
```

Next, you'll want to turn this command into a reusable "script" in
your `package.json` by [adding](https://docs.npmjs.com/files/package.json#scripts):

```json
"scripts": {
  "build": "felt --recipe 18F --src src --export dist"
}
```

Now, you should be able to build your assets with:

```
npm run build
```

:rocket:

[Babel]: http://babeljs.io/
[Bourbon]: http://bourbon.io/
[ES2015]: https://babeljs.io/docs/learn-es2015/
[ES6 modules]: https://github.com/rollup/rollup/wiki/ES6-modules
[Felt]: https://cognitom.github.io/felt/
[cssnext]: http://cssnext.io/
[Neat]: http://neat.bourbon.io/
[npm]: https://npmjs.com
[package.json]: https://docs.npmjs.com/files/package.json
[postcss]: http://postcss.org/
[postcss plugins]: https://github.com/postcss/postcss/blob/master/docs/plugins.md
[Rollup]: https://github.com/rollup/rollup
[Sass]: http://sass-lang.com/
[sass tools]: http://www.cssauthor.com/sass-mixins-library/
