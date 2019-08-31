window.onload = function() {
  var typing = new Typing("#typing", {
    color: "green",
    speed: 1000,
    transition: 150
  });
  typing.start();

  typing.on("click", function() {
    alert("Hello world");
  });
}
