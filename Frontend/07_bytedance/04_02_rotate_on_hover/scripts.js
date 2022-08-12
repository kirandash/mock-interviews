const rotate = document.getElementById("rotate-me");
rotate.addEventListener("mouseover", function () {
  this.classList.remove("out");
  this.classList.add("over")
});

rotate.addEventListener("mouseout", function () {
  this.classList.remove("over");
  this.classList.add("out")
});
