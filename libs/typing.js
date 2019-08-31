function Typing(id, options={}) {
  this.element = document.querySelector(id);
  
  // Make the options by default
  options_default = {
    color: "black",
    speed: 60,
    transition: 150, 
    width: 1.5,
  };

  console.log(options_default)

  // Assign it to make options
  var actual = Object.assign({}, options_default, options);
  
  /**
   * This function allows to add event when typing
   * @public This function is now public
   * @param {string} event
   * @param {function} callback
   */
  this.on = function(event, callback) {
    // If "event" variable is not a string
    if (typeof event !== "string") {
      return console.log("The event must be in string");
    }

    // If "callback" variable is not a function
    if (typeof callback !== "function") {
      return console.log("The callback must be a function");
    }

    // Add event if it's work
    return this.element.addEventListener(event, callback);
  };

  /**
   * Create a function is used to start typing automatically
   * @private This function is private
   * @param {object} element 
   */
  let init = function(element) {
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
  };
  
  /**
   * @private This function is now private
   * @param {object} element 
   */
  let typing = function(element) {
    var style = getComputedStyle(element);
    element.style.transition = actual.transition;
    element.style.borderRight = "1.5px solid " + actual.color;
    element.style.paddingRight = "1px";
    element.style.display = "inline";
  };
  
  /**
   * Create a function that allows to animate the cursor during typing
   * 
   * @private This function is now private
   * @param {object} element
   */
  let bool = function(element) {
    var bool = false;
          
    setInterval(function() {
      if (bool) {
        bool = false;
        element.style.borderRight = "0px solid transparent";
      } else {
        bool = true;
        element.style.borderRight = actual.width + "px solid " + actual.color;
      }
    }, actual.transition * 3);
  };

  /**
  * Starts the typing effect
  * @private This function is private
  */
  this.start = function() {
    init(this.element);
    typing(this.element);
    bool(this.element);
  }
}
