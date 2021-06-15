# typer.js
## What is typer.js
**typer.js** is a framework that allows to type automatically if you have put a value in the tag.

## Installation
You can use typer.js via CDN
- CDN:
  - Normal: https://jsdelivr.net/gh/Dob6458/typerjs/libs/typer.js
  - Minified: https://jsdelivr.net/gh/Dob6458/typerjs/libs/typer.min.js

## Changelogs
You can check it in [CHANGELOG.md](CHANGELOG.md) file in this repository

## Code
Once **typer.js** installed, import it using `<script>` tag on HTML file:
### Importation
```html
<!--
  Use this code in <head> or <body> tag
-->
<script src="typer.js"></script>
<script src="index.js"></script>

<!--
  Use <span> or <div> tags
-->
<span id="typer"></span>
```

Then, create a file called `index.js` file and copy this code.
### Simple code
```js
window.onload = function() {
  /**
    You can use the id, class or tags through "document.querySelector()"
  */
  var typer = new typer("#typer", {
    string: "typer.js is working successfuly"
  });
}
```
Automatically, this selected element is gonna type!

#### Result:

![result_one](images/image_one.gif)

### typer with options
Of course, you can use options to edit something:
```js
window.onload = function() {
  // There's options in this code
  var typer = new typer("#typer", {
    color: "orange",
    speed: 40,
    transition: 150,
    string: "typer.js is working successfuly"
  });
}
```
#### Result:

![result_two](images/image_two.gif)

We have created this options through `Object.assign({}, options_default, options)`
### Events
```js
window.onload = function() {
  var typer = new typer("#typer");

  typer.on("click", function() {
    // Code here
  });
}
```
We use `document.addEventListener(event, callback)` for the events if `typer()` class is declared.

For more information, you can go to the [documentation](https://dob6458.github.io/libraries/typerjs/docs) (Website not published yet)

## Contributors
Thanks to:

![Seniru](https://avatars0.githubusercontent.com/u/34127015?s=50&v=4)

## Issues or Feedback
If you have a problem, please, create an [issue](https://github.com/Dob6458/typerjs/issues) on Github or contact me on:
- Discord: // ζohιπ#5914
- Sololearn Profile ID: 6015460
- Email: dob6458@outlook.com