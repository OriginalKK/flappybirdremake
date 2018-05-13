var rangeS = [350, 300, 250, 200];
var rangeE = [300, 250, 200, 150];

function Pipe(mode) {
	this.mode = mode;
	this.range = rangeS[this.mode-1] - rangeE[this.mode-1] + 1;
	this.gap = floor(random() * this.range) + rangeE[this.mode-1];
	this.range2 = height-this.gap + 1;
	this.bottomMiddle = floor(random() * this.range2) + this.gap;
	this.topMiddle = this.bottomMiddle - this.gap;
	this.x = width;
	this.w = 20;
	this.speed = 5 + (1*this.mode);
	this.highlight = false;
	this.pipeColors = ["white", "green", "blue", "yellow"];


	this.hits = function(bird) {
		if ((bird.y < this.topMiddle || bird.y > this.bottomMiddle) && (bird.x > this.x && this.x + this.w)){
			this.highlight = true;
			return true;
		}
		return false;
	}

	this.show = function() {
		fill(this.pipeColors[this.mode-1]);
		if (this.highlight) {
			fill(255, 0, 0);
		}
		rect(this.x, 0, this.w, this.topMiddle);
		rect(this.x, this.bottomMiddle, this.w, height);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.offScreen = function() {
		return this.x < -this.w;
	}
}