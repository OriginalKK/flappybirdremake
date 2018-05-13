function Bird() {
	this.y = height/2;
	this.x = 70;

	this.gravity = 0.6;
	this.lift = -13;
	this.velocity = 0;
	this.done = 0;

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, 32, 32);
	}

	this.up = function() {
		if (!this.done) {
			this.velocity += this.lift;
			return true;
		} else {
			return false;
		}
	}

	this.update = function() { 
		this.velocity += this.gravity;
		this.velocity *= 0.95;
		this.y += this.velocity;

		if (this.y > height) {
			this.gameOver();
		}

		if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}
	}

	this.gameOver = function() {
		this.y = height;
		this.velocity = 0;
		this.done = 1;
	}
}