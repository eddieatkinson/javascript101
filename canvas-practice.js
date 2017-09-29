// console.log("I'm loaded!");
// Go an get the tag from the DOM (document object) with an ID of canvas (canvas tag)
var canvas = document.getElementById('canvas');
// Make sure the canvas is what we think it is.
// console.dir(canvas);
// canvas by itself is just a "something" to draw on. In JS, we need a "context" 
var context = canvas.getContext('2d');
// rect takes 4 arguments:
// 1. upper x
// 2. upper y
// 3. lower x
// 4. lower y

// context.rect(100, 100, 300, 300);
// context.stroke();

// context.moveTo(100, 100);
// context.lineTo(400, 400);
// context.lineTo(100, 400);
// context.lineTo(400, 100);
// context.lineTo(100, 100);
// context.stroke();

// A constructor function to make a new ball.
function Ball(x, y){
	this.x = x;
	this.y = y;
	this.sr = 0;
	this.xDirection = 1;
	this.yDirection = 1;
	// ending radians
	this.er = Math.PI * 2;
	this.randX = Math.ceil(Math.random() * 15);
	this.randY = Math.ceil(Math.random() * 15);
	this.drawBall = this.drawBall.bind(this);
	this.updateBallPosition = this.updateBallPosition.bind(this);
}

Ball.prototype.radius = 50;
Ball.prototype.drawBall = function(){
	context.beginPath();
	context.arc(this.x, this.y, this.radius, this.sr, this.er);
	context.fill();
}
Ball.prototype.updateBallPosition = function(){
	context.clearRect(0, 0, 500, 500);
	this.drawBall();
	if(this.x >= 500 - this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y >= 500 - this.radius){
		this.yDirection = -this.yDirection
	}
	if(this.x <= this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y <= this.radius){
		this.yDirection = -this.yDirection
	}
	// var randX = Math.ceil(Math.random() * 15)
	// var randY = Math.ceil(Math.random() * 15)
	this.x += this.randX * this.xDirection;
	this.y += this.randY * this.yDirection;
}


theBall = new Ball(100, 100);
console.log(theBall);

var ball_interval = setInterval(theBall.updateBallPosition, 50);

canvas.addEventListener("click", function(event){
	console.log(event);
	randR = Math.ceil(Math.random() * 255);
	randG = Math.ceil(Math.random() * 255);
	randB = Math.ceil(Math.random() * 255);
	context.fillStyle = `rgb(${randR}, ${randG}, ${randB})`;
	theBall.radius = Math.ceil(Math.random() * 100);
	// theBall = new Ball(100, 100);
	// setInterval(theBall.updateBallPosition, 50);

})

// var centerX = 200;
// var centerY = 200;

// function drawBall(){
// 	centerX++;
// 	centerY++;
// 	context.arc(centerX, centerY, 50, 0*Math.PI, 2*Math.PI);
// 	// context.stroke();
// 	// just like pygame.scree.flip(), we have clearRect()
// 	context.clearRect(0, 0, 500, 500);
// 	context.fill();
// }

// var ballInterval = setInterval(drawBall, 50);