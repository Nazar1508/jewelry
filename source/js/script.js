"use strict";
(function () {
  var blogButtons = document.querySelector(".blog__buttons");
  var image = document.querySelector(".blog__item img");
  var START_TOP_COORDINATE = 265;
  var START_HEIGHT = 396;
  var endHeigth = image.offsetHeight;
  var heightDifference = START_HEIGHT - endHeigth;
  blogButtons.style.top = START_TOP_COORDINATE - heightDifference / 2 + "px";

  window.addEventListener("resize", function () {
    endHeigth = image.offsetHeight;
    heightDifference = START_HEIGHT - endHeigth;
    blogButtons.style.top = START_TOP_COORDINATE - heightDifference / 2 + "px";
  });
})();
