# cannot-use-babel-cli-to-build-if-file-outside-pj

importing files outside of the project folder doesn't work when building for deployment.

That is because when building, all typescript files will be transpiled with an exact files trees structure being duplicated  `src/**/*.ts --> dist/**/*.js`. If we import file from outside `src/` it does not make logical sense to duplicate folder structure that is outside `src/`

Babel is a language transpiler, it is not a bundler.  Webpack is a bundler, babel is not.

`babel-node` is not effect when files are imported from outside `src/` b/c it is transpile in the memory without the need to duplicate a file structure. 

