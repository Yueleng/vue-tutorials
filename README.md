# VUE-Tutorial

VUE Tutorials

## vscode plugins for vue dev

- `Volar`
- `ESLint`
- `Prettier - Code formmater`
- `Live Server`

## Scaffolding

- `npm install -g yarn`
- `yarn create vite`
- `yarn install`
- `vite run dev` or `vite dev`
- `yarn build`
- `yarn serve`

## Difference between `computed`, `methods`, `watch`

- `computed` will cache the result, while `methods` won't cache the result.
- `computed` will recalculate whenever the dependency `data` changed.
- `methods` support `parameter` passed into it. More like a javascript function.
- `computed` can be used in HTML, like `data`
- `method` can be used for more complex operations or for event handlers or for extract common logics.
- `computed` usually won't change the value of data, it is usually considered as a combination/calculation of `data`. While `watch` usually change the data and won't have any return.
- for arrays in `watch`, use object instead of function.
- in `watch`, we usually do some time comsuming or async logic.
- in `computed`, you can also change the value of `data`. But it really is not recommended. we usually don't recommend side effect introduced into the `computed`.
- in `watch`, you can use the `method` in order to reduce code.

## Components

- Why `component` design pattern:
  - Reduce each file's complexity and size,
  - Keep each file's independence,
  - Reusability.
  - Team Collaboration

## Typescript

- tsconfig.json folder is considered as root folder.
