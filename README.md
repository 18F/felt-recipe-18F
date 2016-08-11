# The 18F Felt recipe
This is a [Felt] recipe with the following features:

1. Processes `.js` files as ES6 with [rollup] and [Babel], producing sourcemaps
   for each file.
1. Processes `.css` files with [postcss] and [cssnext].
1. Processes `.sass` and `.scss` files as [Sass], then applies all `.css`
   processing above.

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
|   |
    +-- main.js.map
```

Next, you'll want to turn this command into a reusable "script" in
your `package.json` by adding:

```
"scripts": {
  "build": "felt --recipe 18F --src src --export dist"
}
```

Now, you should be able to build your assets with:

```
npm run build
```

:rocket:
