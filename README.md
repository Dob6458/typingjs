# typing.js
Need a typing for your history, for roman, for others in your code? Now **typing.js** is here.

## Installation
To use **typing.js**, You must go to the [releases](https://github.com/Dob6458/typingjs/releases) in `v1.0`

## Code
Once **typing.js** installed, import it using `<script>` tag on HTML file:
### Importation
```html
<!--
  Use this code in <head> or <body> tag
-->
<script src="typing.js"></script>
<script src="index.js"></script>
```

Then, create a file called `index.js` file and copy this code.
### Simple code
```js
window.onload = function() {
  /**
    You can use the id, class or tags through "document.querySelector()"
  */
  var typing = new Typing("#typing");
}
```
Automatically, this element that you have selected is gonna typing.
### Typing with options
Of course, you can use options to edit something:
```js
window.onload = function() {
  // There's options in this code
  var typing = new Typing("#typing", {
    color: "orange",
    speed: 40,
    transition: 500
  });
}
```
We have created this options through `Object.assign({}, options_default, options)`
### Speed cursor in random
You can also use the speed cursor in random, for example:
```js
window.onload = function() {
  var typing = new Typing("#typing", {
    speed: random(40, 80)
  });

  // Create a function called random() with 2 function parameters ("a" and "b")
  function random(a, b) {
    return Math.floor(Math.random() * (a + b) + a);
  }
}
```

## Issues or Feedback
If you have a problem, please, create an [issue](https://github.com/Dob6458/typingjs/issues) on Github or contact me on:
- Discord: // ζohιπ#5914
- Sololearn Profile ID: 6015460