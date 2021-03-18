var man;

let badGuy;
let badGuys = []
let sceneM = 0

function setup() {
  let img = loadImage("karen.png")
  let img2 = loadImage("1701.png")
  createCanvas(400, 400);

  for (let i = 0; i < 50; i++) {
    badGuys.push(new baddie(random(300, 500), random(400), img2))
  }
  man = new Person(img);
  //badGuy = new baddie(random(300, 500), random(400));

}




var x;
x = -(110);

function keyPressed() {
  if (key == " ") {
    let force = createVector(0, -3);
    man.applyForce(force);
  } else if (key == "a") {
    sceneM++
  }


}

function draw() {
  if (sceneM == 0) {
    start()
  } else if (sceneM == 1) {
    game()
  }


}

function start() {
  background("purple")
  textSize(40)
  text("get em carrots!!", 30, 100)
}



function stop() {
  background("black")
  textSize(60)
  text("okay game done whatever bye", 200, 100)

}

function game() {
  background(80, 200, 404);

  translate(-man.pos.x + 100, 0);

  let gravity = createVector(0, 0.1);
  man.applyForce(gravity)

  //makes karen apear
  man.update();
  man.display();
  man.edges();

  //makes baddie apear
  // badGuy.update();
  // badGuy.display();
  // badGuy.edges();

  for (let i = 0; i < 50; i++) {
    badGuys[i].update()
    badGuys[i].display()
    badGuys[i].edges()
    man.hits(badGuys[i])
  }

  fill(100, 45, 105);
  rect(250, 350, 100, 100);

}
