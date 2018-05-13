var bird;
var pipes = [];
var mode = 1;
var score = 0;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe(this.mode));
}

function draw() {
  background(0);

  bird.show();
  bird.update();

  for (var i = pipes.length-1; i >= 0; i--){
    if (this.score < 5) {
      this.mode = 1;
    }
    else if (this.score < 15) {
      this.mode = 2;
    }
    else if (this.score < 20) {
      this.mode = 3;
    }
    else {
      this.mode = 4;
    }

    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      bird.gameOver();
      alert ("Game Over, you got " + this.score + " points.");
      exit();
    }
    if (pipes[i].offScreen()) {
      pipes.splice(i, 1);
      this.score++;
    }
  }

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe(this.mode));
  }    
}

function keyPressed() {
	if (key == ' ') {
		if (bird.up());
	}
}