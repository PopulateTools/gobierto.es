class Particle {
  constructor () {
    this.x = random(width);
    this.y = random(height);
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
    this.targetX = this.x + (random(2) < 1 ? -1 : 1) * noise(this.z, this.q) * random(200);
    this.targetY = this.y + (random(2) < 1 ? -1 : 1) * noise(this.q, this.r) * random(200);
  }
  update () {
    this.x = lerp(this.x, this.targetX, this.p);
    this.y = lerp(this.y, this.targetY, this.q);
    this.p+=0.0001;
    this.q+=0.0001;
    this.r+=0.001;
    this.z+=0.001;
    this.preX = this.x;
    this.preY = this.y;

    if (this.p > this.change) {
      this.newTarget();
      this.p = 0;
      this.q = 0;
    }
  }

  connect(p) {
    if (this.width > 20 && p.width > 20) {
      stroke(255, this.opacity);
      line(this.x, this.y, p.x, p.y);
    }
  }

  draw () {
    noStroke();
    fill(255, 255, 255, this.opacity);
    ellipse(this.x, this.y, this.width);
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
    var particle = particles[i];

    particle.update();

    for (var j = 0; j < particles.length; j++) {
      var p = particles[j];
      var d = dist(p.x, p.y, particle.x, particle.y);
      if (d > particle.width + p.width && d < 100) {
        particle.connect(p);
      }
    }
    particle.draw();
  }
}
