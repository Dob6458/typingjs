window.onload = function() {
  var typing = new Typing("#typing", {
    color: "green",
    speed: 60,
    transition: 150
  });

  typing.on("click", function() {
    alert("Hello world");
  });
}