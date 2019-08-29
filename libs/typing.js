function Typing(id, options={}) {
  this.id = id;
  this.element = document.querySelector(this.id);
      
  // Options by default
  options_default = {
    color: "black",
    speed: 40,
    transition: 150
  }
      
  var actual = Object.assign({}, options_default, options);
      
  this.init = function(element) {
    var val = element.innerText;
    var value = "";
          
    var pos = 0;
          
    var x = setInterval(function() {
      value += val[pos];
      element.innerText = value;
        
      pos++;
              
      if (pos > val.length - 1) {
        clearInterval(x);
      }
    }, actual.speed);
  }
      
    this.typing = function(element) {
    var style = getComputedStyle(element);
    element.style.transition = actual.transition;
    element.style.borderRight = "1.5px solid " + actual.color;
    element.style.paddingRight = "1px";
    element.style.display = "inline";
  }
      
  this.bool = function(element) {
    var bool = false;
          
    setInterval(function() {
      if (bool == true) {
        bool = false;
        element.style.borderRight = "1.5px solid transparent"
      } else {
        bool = true;
        element.style.borderRight = "1.5px solid " + actual.color;
      }
    }, actual.transition * 3);
  }
      
  // Initialization of functions
  this.init(this.element);
  this.typing(this.element);
  this.bool(this.element);
}
