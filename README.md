# begin-simple
Build simple websites right, faster.

## What begin-simple does
* Runs a simple server with live changes as you code
* On-the-fly, live prepping of files for production:
  * [Pug](https://pugjs.org/) support (.pug -> .html)
  * [Sass](http://sass-lang.com/) support (.sass & .scss -> .css)
  * Minifies .js and .html files
* Bundles in [Frow CSS](http://frowcss.com) framework
* Bundles in [letsGo JS](http://letsgojs.com) framework
* Builds everything into /docs for even easier deployment via GitHub Pages
* Works on Mac, Linux, and Cloud9

### Features to add
* Automatically compress the JPGs & PNGs
* Automatically minify SVGs
* Move away from Gulp dependency

## Set up for Mac/Linux
* Fork this repo and clone it to computer
* Navigate to this repo's folder on computer
* Ensure you have a recent version of [Node.js](https://nodejs.org/)
* Run `npm install`
* Remove 'docs' from the .gitignore if you wish to use GitHub Pages for hosting
* Customize package.json and LICENSE

## Set up for Cloud9
* Fork and then clone this repo into Cloud9 (as Blank Template).
* Run `nvm install stable`
* Run `nvm alias default stable`
* Run `npm install`
* Remove 'docs' from the .gitignore if you wish to use GitHub Pages for hosting
* Customize package.json and LICENSE

## Using begin-simple
* Navigate to folder in Terminal (if on Mac/Linux)
* Run `gulp` (or `gulp c9` if using Cloud9)
* Open `/docs/index.html` in your browser
  * Mac/Linux: [http://localhost:8080/docs/index.html](http://localhost:8080/docs/index.html)
  * Cloud9 Option 1: Click Preview and select `Preview Running Application` and then click the 'Pop out into New Window' button. Navigate to /docs/index.html.
  * Cloud9 Option 2: http://[your-cloud9-container]-[your-username].c9users.io/docs/index.html
