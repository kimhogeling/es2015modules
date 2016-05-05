# about the src folder

## js
The js source files lie in `./js` and after running gulp the transpiled cross-browser files are saved into `../public/js`.

The files directly in `./js` have only `import`s to load modules, no `export`s. The modules in `./js/modules` do have `export`s and they also have `import`s of the methods of other modules that they have as dependencies.

## css
The css does not lie here. instead it is in `../public/css`.
That is because this experiment is not relevant for css and I didn't want to pollute the gulpfile.
