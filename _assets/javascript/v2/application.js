function isScrolledIntoView(elem) {
  var scrollPosition = window.scrollY;
  var docViewBottom = scrollPosition + window.outerHeight;
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.y + window.scrollY - 100;
  var elemBottom = elemTop + rect.height - 300;
  return !(scrollPosition < elemTop || scrollPosition > elemBottom )

}

var setupIntroCover = function () {
  var cover = document.querySelectorAll('.js-cover')[0];

  if (cover) {
    cover.classList.add('Cover--intro');
  }
};

var setupTooltips = function () {
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

window.onscroll = function () {
  var elements = document.querySelectorAll('.js-module-cover');

  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];

    if (isScrolledIntoView(el)) {
      el.classList.add('animate');
    } else {
      el.classList.remove('animate');
    }
  }
}

window.onload = function () {
  setupTooltips();
  setupIntroCover();
};
