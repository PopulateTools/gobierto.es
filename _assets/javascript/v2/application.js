class Particle {
  constructor () {
    this.posX = random(width);
    this.posY = random(height);
    this.width = random(50);
    this.p = 0;
    this.r = 0;
    this.z = 0;
    this.q = 0;
    this.newTarget();
    this.opacity = random(35);
    this.change = random(40, 50)/1000;
  }

  newTarget () {
    this.targetX = this.posX + (random(2) < 1 ? -1 : 1) * noise(this.z, this.q) * random(200);
    this.targetY = this.posY + (random(2) < 1 ? -1 : 1) * noise(this.q, this.r) * random(200);
  }
  update () {
    this.posX = lerp(this.posX, this.targetX, this.p);
    this.posY = lerp(this.posY, this.targetY, this.q);
    this.p+=0.0001;
    this.q+=0.0001;
    this.r+=0.001;
    this.z+=0.001;
    this.preX = this.posX;
    this.preY = this.posY;

    if (this.p > this.change) {
      this.newTarget();
      this.p = 0;
      this.q = 0;
    }
  }

  draw () {
    fill(255, 255, 255, this.opacity);
    ellipse(this.posX, this.posY, this.width);
  }
}

var particles = [];

function setup () {
  createCanvas(displayWidth, 600).parent('banner');
  background(0, 0);
  noStroke();

  for (var i = 0; i < 70; i++) {
    particles.push(new Particle());
  }
}

function draw () {
  clear()
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
}

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
  setupHamburger();
  setupIntroCover();
};
