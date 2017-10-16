
function isScrolledIntoView(elem) {
  var scrollPosition = window.scrollY;
  var docViewBottom = scrollPosition + window.outerHeight;
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.y + window.scrollY - 100;
  var elemBottom = elemTop + rect.height - 300;
  return !(scrollPosition < elemTop || scrollPosition > elemBottom )

}

var setupHamburger = function () {
  var hamburger = document.querySelectorAll('.js-hamburger')[0];
  var close = document.querySelectorAll('.js-hamburger-close')[0];

  if (hamburger && close) {
    hamburger.onclick = function () {
      hamburger.parentElement.classList.add('is-open');

      bindEscKey(function () {
        hamburger.parentElement.classList.remove('is-open');
        document.onkeyup = null;
      });
    }

    close.onclick = function () {
      hamburger.parentElement.classList.remove('is-open');
    }
  }
};

var bindEscKey = function (callback) {
  document.onkeyup = function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
      console.log('fin')
      callback && callback();
    }
  };
};

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

    var target = tooltip.parentElement.querySelectorAll('.js-tooltip-target')[0];
    var parent = tooltip.parentElement.querySelector('button');

    tooltip.parentElement.onmouseleave = function () {
      tooltip.classList.add('Tooltip--hidden');
    }

    parent.onmouseover = function () {
      tooltip.classList.remove('Tooltip--hidden');
      tooltip.style.right = '-' + (target.offsetLeft + target.offsetWidth + 1)+ 'px';
    }
  };

};

var setupSmoothScroll = function () {
  var elements = document.querySelectorAll('.js-smooth-scroll');

  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];

    e.onclick = function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var hash = this.href.toString().split('#')[1];
      var target = document.getElementById(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}

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
  setupHamburger();
  setupIntroCover();
  setupSmoothScroll();
};
