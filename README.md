# node-exercises

### Initialize project

Create project to directory in terminal:

```
npm init
```

Define npm script to **package.json** for running the application:

```diff
"scripts": {
+    "start": "node index.js",
  },
```

Run application with node in terminal:

```
node index.js
```

or with defined npm script:

```
npm start
```

***

### Express

Define express dependency in terminal:

```
npm install express --save
```

***

### Nodemon

Define nodemon development dependency in terminal:

```
npm install --save-dev nodemon
```

Define npm script to **package.json**:

```diff
"scripts": {
+    "watch": "nodemon index.js",
  },
```

Start server in development mode in terminal:

```
npm run watch
```

***

### Commands for dependencies

Update dependencies defined in **package.json**:

```
npm update
```

Get dependencies defined in **package.json**:

```
npm install
```
