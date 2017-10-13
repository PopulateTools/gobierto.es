window.onload = function () {
  var tooltips = document.querySelectorAll('.js-tooltip');
  for (var i = 0; i < tooltips.length; i++) {
    var tooltip = tooltips[i];
var p = tooltip.parentElement;
    var parent = tooltip.parentElement.querySelector('a');

    p.onmouseleave = function () {
      tooltip.classList.add('Tooltip--hidden');
    }

    parent.onmouseover = function () {
      tooltip.classList.remove('Tooltip--hidden');
    }
  };
};
