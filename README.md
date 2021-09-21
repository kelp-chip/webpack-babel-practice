## File structure details:

- Here is the basic file structure this guide will be using.
- Feel free to change this up however you'd like but keep in mind that you will need to change a number of paths during set up.

<pre>
.
├── client
│   ├──public
│   │   └── index.html
│   └── src
│       └── index.js
├── server
│   └── index.js
├──.gitignore
└── webpack.config.js


These additional files will be added automatically after running scripts in our terminal:
.
├── <b>package.json</b>
└── client
    └── public
        └── <b>bundle.js</b>
</pre>

---------------------------------------------------------------------------------------------------------------------


# Guide to recreate this environment:

1) run ```npm init``` to create package.json


2) Run the following scripts in your terminal to install our necessary packages:

(shortcut to open terminal in VS Code on a mac: Ctrl + `/~ key)
```
npm i express react react-dom
```

```
npm i @babel/core @babel/preset-env @babel/preset-react babel-loader nodemon webpack webpack-cli html-loader style-loader css-loader -D
```


4) create the file **./webpack.config.js** and copy/paste the following code:

```
const path = require('path');
    
/* The first module will designate the entry point of the files you want to compile 
and the file name for where you want your bundled file to be created. */

module.exports = {
  entry: "./client/src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./client/public"), //this is the folder you want your bundled code to go
  },


  module: {
    rules: [
      /* This section is for your babel loader config. */
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      /* This section is optional and will give you the ability to import css files in react */
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

```


5) Create the following folders and files:

#### ./client/src/index.js
- this will be the index for your react files (the entry point mentioned in step 4)

#### ./client/public/index.html
- make sure to link to your bundle here
```
<script src="./bundle.js"></script>
```
- Remember your bundle file will be created automatically by webpack once you've run "npm run build" (This is a script we will write ourselves in the following step).

#### ./server/index.js
- this is where you will set up express and write your routes
- make sure to link your html file: 
```
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "client", "public")));
```


6) Create these scripts in package.json:

     - "build": "npx webpack -w"
     - "start": "nodemon server"


7) If you plan to push to github make sure to create a **.gitignore** file in your root folder and copy/paste the following:

```
node_modules
dist
```

### And that's it! 

- Once you set up express and your client index.js file, run ```npm run build``` in one terminal and ```npm start``` in another. 
- Visit localhost:[your port number here] to view your page.
- Happy coding! :)

-----------------------------------------------------------------------------------------------------------------------------------------------

References I used to write this guide:

https://webpack.js.org/guides/getting-started/

https://webpack.js.org/loaders/babel-loader/

https://reactjs.org/docs/getting-started.html
