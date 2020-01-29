//= require ./analytics
//= require ./vendor/enter-view.min
// require v1/charts
//= require ./vendor/jquery-3.0.0.min
//= require ./vendor/flight.min
//= require ./vendor/jquery.magnific-popup.min
//= require ./components/shareContent

function isScrolledIntoView(elem) {
  var scrollPosition = window.scrollY;
  var docViewBottom = scrollPosition + window.outerHeight;
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.y + window.scrollY - 100;
  var elemBottom = elemTop + rect.height - 300;
  return !(scrollPosition < elemTop || scrollPosition > elemBottom)

}

var setupHamburgerDesktop = function() {
  var hamburgerDesktop = document.querySelector('.js-hamburger-desktop');
  var closeDesktop = document.querySelector('.js-hamburger-desktop-close');
  var menuHover = document.querySelector('.Menu__slide');

  hamburgerDesktop.addEventListener('click', function(e) {
    e.preventDefault();
  });
  closeDesktop.addEventListener('click', function(e) {
    e.preventDefault();
  });

  if (hamburgerDesktop && closeDesktop) {
    hamburgerDesktop.onmouseover = function() {
      menuHover.classList.add('is-open');

      setTimeout(function() {
        // Set class once Menu is shown, in order to avoid the background elements misalignment
        document.body.classList.add('is-fixed');
      }, 250);

      bindEscKey(function() {
        hamburgerDesktop.parentElement.classList.remove('is-open');
        document.body.classList.remove('is-fixed');
        document.onkeyup = null;
      });
    }

    closeDesktop.onclick = function() {
      menuHover.classList.remove('is-open');
      document.body.classList.remove('is-fixed');
    }
  }

};

var setupHamburger = function() {
  var hamburger = document.querySelector('.js-hamburger');
  var close = document.querySelector('.js-hamburger-close');

  if (hamburger && close) {
    hamburger.onclick = function() {
      hamburger.parentElement.classList.add('is-open');
      console.log('menu lateral');

      setTimeout(function() {
        // Set class once Menu is shown, in order to avoid the background elements misalignment
        document.body.classList.add('is-fixed');
      }, 250);

      bindEscKey(function() {
        hamburger.parentElement.classList.remove('is-open');
        document.body.classList.remove('is-fixed');
        document.onkeyup = null;
      });
    }

    close.onclick = function() {
      hamburger.parentElement.classList.remove('is-open');
      document.body.classList.remove('is-fixed');
    }
  }
};

var bindEscKey = function(callback) {
  document.onkeyup = function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
      callback && callback();
    }
  };
};

var setupIntroCover = function() {
  var cover = document.querySelector('.js-cover');

  if (cover) {
    cover.classList.add('Cover--intro');

    var browser = document.querySelector('.Browser--large');

    if (browser) {
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var bpLarge = 1280;
      var bpMedium = 1024;

      // Lower resolutions first
      if (Number(w) < bpMedium) {
        browser.classList.remove('Browser--large');
        browser.classList.add('Browser--small');
      } else if (Number(w) < bpLarge) {
        browser.classList.remove('Browser--large');
        browser.classList.add('Browser--medium');
      }
    }
  }
};

var setupTooltips = function() {
  var tooltips = document.querySelectorAll('.js-tooltip');
  var timeoutIDs = new Array(tooltips.length);

  for (var i = 0; i < tooltips.length; i++) {
    var tooltip = tooltips[i];

    var target = tooltip.parentElement.querySelector('.js-tooltip-target');
    var parent = tooltip.parentElement.querySelector('button');

    tooltip.parentElement.onmouseleave = function() {
      timeoutIDs[i] = setTimeout(function() {
        tooltip.classList.add('Tooltip--hidden');
      }, 300);
    }

    tooltip.onmouseover = function() {
      if (timeoutIDs[i]) {
        clearTimeout(timeoutIDs[i]);
      }
    }

    parent.onmouseover = function() {
      tooltip.classList.remove('Tooltip--hidden');
      tooltip.style.left = -tooltip.getBoundingClientRect().width / 2 + parent.getBoundingClientRect().width + 'px';
    }
  };

};

var setupSmoothScroll = function() {
  var elements = document.querySelectorAll('.js-smooth-scroll');

  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];

    e.onclick = function(evt) {
      var hash = this.href.toString().split('#')[1];
      var el = document.getElementById(hash);

      if (el) {
        evt.preventDefault();
        evt.stopPropagation();

        var target = el.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
}

var setupFunctionalities = function() {
  var explanation = document.querySelector('.js-explanation');
  var functionalities = document.querySelectorAll('.js-functionality');

  if (!explanation) {
    return;
  }

  window.currentExplanation = explanation.querySelector('div').innerHTML;

  for (var i = 0; i < functionalities.length; i++) {
    var functionality = functionalities[i];
    functionality.onmouseenter = function() {
      var explanationText = this.querySelector('p').innerHTML;

      if (window.currentExplanation == explanationText) {
        return;
      }

      window.currentExplanation = explanationText;

      if (window.explanationTimeout) {
        clearTimeout(window.explanationTimeout);
      }

      explanation.classList.add('is-hidden');

      window.explanationTimeout = setTimeout(function() {
        explanation.querySelector('div').innerHTML = explanationText;
        explanation.classList.remove('is-hidden');
      }.bind(this), 200);
    };
  };
}

var setupSubscription = function() {
  var form = document.querySelector('.js-subscribe');

  if (!form) {
    return;
  }

  form.onsubmit = function(e) {
    e.preventDefault();
    e.stopPropagation();

    var email = form.querySelector('input[type="email"]').value;
    var user_type = 'Blog Subscribe';

    if (email) {
      mixpanel.identify(email);

      var date = new Date().toISOString();

      mixpanel.people.set_once({
        "$created": date
      });

      mixpanel.people.set({
        "Web Corp Subscribed": true,
        "Web Corp Subscribed Date": date,
        "$email": email
      });

      mixpanel.people.union({
        "User Type": [user_type]
      });

      var input = form.querySelector('.js-input');
      var success = form.querySelector('.js-success');

      input.classList.add('is-hidden');
      success.classList.remove('is-hidden');
    }
  }
}

window.onscroll = function() {
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

$(function() {

  // autocaptions for article images
  $('article img.caption').after(function() {
    if ($(this).attr('title') !== undefined && $(this).attr('title').length > 0) {

      var classesToAdd = '';
      if ($(this).hasClass('inline')) {
        classesToAdd += ' inline ';
      }
      if ($(this).hasClass('f_right')) {
        classesToAdd += ' f_right ';
      }
      if ($(this).hasClass('f_left')) {
        classesToAdd += ' f_left ';
      }

      $(this).wrap('<div class="image ' + classesToAdd + ' "></div>');
      $(this).after('<caption>' + $(this).attr('title') + '</caption></div>');
    }
  });

  // Modals
  $('.open_modal').magnificPopup({
    type: 'inline',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.close_modal').click(function(e) {
    $.magnificPopup.close();
  });

  $('.bar-share-subscribe').hide();

});

// Scroll to top button appear
$(document).scroll(function() {

  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 400) {
    $('.scroll-to-top').fadeIn();
    $('.bar-share-subscribe').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
    $('.bar-share-subscribe').fadeOut();
  }
});

window.onload = function() {
  setupTooltips();
  setupHamburger();
  setupIntroCover();
  setupSmoothScroll();
  setupSubscription();
  setupFunctionalities();
  // setupHamburgerDesktop();

  // tocbot.init({
  //   // Where to render the table of contents.
  //   tocSelector: '.js-toc',
  //   // Where to grab the headings to build the table of contents.
  //   contentSelector: '.js-toc-content',
  //   // Which headings to grab inside of the contentSelector element.
  //   headingSelector: 'h1, h2, h3, h4',
  // });
};