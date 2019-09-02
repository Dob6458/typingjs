//
// Library created by // Zohir on 02/09/2019
// Typing.js (Dob6458/typingjs)
//

function Typing(id, options={}) {
  ///////////////////// CONSTRUCTOR ZONE /////////////////////
  var element = document.querySelector(id);
  
  // Make the options by default
  options_default = {
    color: "black",
    speed: 60,
    transition: 150, 
    width: 1.5
  };

  // Assign it to make options
  let actual = Object.assign({}, options_default, options);
  ///////////////////// CONSTRUCTOR ZONE /////////////////////
  
  /**
   * This function allows to add event when typing
   * @public This function is public
   * @param {string} event "event" must be a string
   * @param {function} callback "callback" must be a function
   */
  this.on = function(event, callback) {
    // If "event" variable is not a string
    if (typeof event !== "string") {
      return console.error("The event must be in string");
    }

    // If "callback" variable is not a function
    if (typeof callback !== "function") {
      return console.error("The callback must be a function");
    }

    // Add event if it's work
    return element.addEventListener(event, callback);
  };

  /**
   * This allows to remove event when typing
   * @public This function is public
   * @param {string} event "event" must be a string
   * @param {function} callback "callback" must be a function
   * @param {boolean} bool "bool" is null (by default)
   */
  this.off = function(event, callback, bool=null) {
    // If "event" variable is not a string
    if (typeof event !== "string") {
      return console.error("The event must be a string");
    };

    // If "callback" variable is not a function
    if (typeof callback !== "function") {
      return console.error("The callback must be a function");
    };

    // Remove event if it's work
    return element.removeEventListener(event, callback, bool);
  };

  /**
   * Create a function that allows to start type automatically
   * @private This function is private
   * @param {object} element 
   */
  let init = function(element) {
    let val = element.innerText;
    let value = "";
          
    let pos = 0;

    let x = setInterval(function() {
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
    element.style.transition = actual.transition;
    element.style.borderRight = actual.width + "solid " + actual.color;
    element.style.paddingRight = "1px";
    element.style.display = "inline";
  };
  
  /**
   * Create a function that allows to animate the cursor during typing
   * 
   * @private This function is private
   * @param {object} element
   */
  let booleans = function(element) {
    let bools = false;
          
    setInterval(function() {
      if (bools) {
        bools = false;
        element.style.borderRight = actual.width + "px solid transparent";
      } else {
        bools = true;
        element.style.borderRight = actual.width + "px solid " + actual.color;
      }
    }, actual.transition * 3);
  };

  // This function start automatically if it's work
  (function() {
    init(element);
    typing(element);
    booleans(element);
  })();
}
