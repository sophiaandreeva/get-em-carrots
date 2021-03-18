// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person(img) {
  this.pos = createVector(10, height - 50);
  this.vel = createVector(1.5, 0);
  this.acc = createVector(0, 0);
  this.pic = img;
  this.score= 0
  
  // this.mass = m;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(400, 400, 400);
    stroke(255);
    rect(this.pos.x, this.pos.y, 50, 40);
    image(this.pic, this.pos.x, this.pos.y, 50, 40)
    textSize (20)
    text("score: "+ this.score,this.pos.x,100)
  }

  this.edges = function() {
    if (this.pos.y > height - 50) {
      this.vel.y *= -1;
      this.pos.y = height - 50;
    }

//     if (this.pos.x > width) {
//       this.vel.x *= -1;
//       this.pos.x = width;

//     }
  }
  this.hits = function(stick) {
    if ((stick.pos.x >= this.pos.x && stick.pos.x <= (this.pos.x + 40)) &&
      (stick.pos.y >= this.pos.y && stick.pos.y <= (this.pos.y + 40))) {
      stick.pos.y = -400;
      this.score++;
    }
  }

}
