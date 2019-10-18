# Javascript ES6

- node
- yarn

```
yarn init
(Press Enter to all options)
```

Add dependencies:
```
yarn add @babel/cli
yarn add @babel/core
yarn add @babel/preset-env 
```

Create .babelrc (Configuration file)

Package.json - include:
```
,
"scripts": {
    "dev": "babel ./main.js -o ./budle.js -w"
  }
```

Terminal:
```
yarn dev
```



