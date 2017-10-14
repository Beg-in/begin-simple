# begin-simple
A starting point for a simple static website but with some niceties.

## What begin-simple does
* Runs a simple server to preview your website
* Bundles in [Frow CSS](http://frowcss.com) and [letsGo JS](http://letsgojs.com)
* Minifies .js files
* Converts .sass and .scss files to minified, autoprefixed CSS
* Minifies .html files
* Reloads your website with the minified code each time you save
* Works on Mac, Linux, and Cloud9

### Features to add
* Automatically compress the JPGs & PNGs
* Automatically minify SVGs
* Move to NPM Scripts from Gulp

## Set up for Mac/Linux
* Fork this repo and clone it to computer
* Navigate to this repo's folder on computer
* Ensure you have recent node.js/npm
* Run `npm install`
* Remove 'docs' from the .gitignore if you wish to use GitHub Pages for hosting
* Customize the package.json file
* Alter the LICENSE to your preference

## Set up for Cloud9
* Fork and then clone this repo into Cloud9 (as Blank Template).
* Run `sudo apt-get update`
* Run `nvm install stable`
* Run `nvm alias default stable`
* Run `npm install`
* Remove 'docs' from the .gitignore if you wish to use GitHub Pages for hosting
* Customize the package.json file
* Alter the LICENSE to your preference

## Using begin-simple
* Navigate to folder in Terminal
* Run `gulp` or `gulp c9` if using Cloud9
* Open `/docs/index.html` in your browser
  * Mac/Linux: [http://localhost:8080/docs/index.html](http://localhost:8080/docs/index.html)
  * Cloud9 Option 1: Click Preview and select `Preview Running Application` and then click the 'Pop out into New Window' button. Navigate to /docs/index.html.
  * Cloud9 Option 2: http://[your-cloud9-container]-[your-username].c9users.io/docs/index.html