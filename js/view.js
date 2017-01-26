
var drawBall = function(color){
	ctx.fillStyle = color;
	ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
};

var drawLeftBlack = function(color){
	ctx.fillStyle = color;
	ctx.fillRect(leftBlock.x, leftBlock.y, leftBlock.width, leftBlock.height);
};

var drawRightBlock = function(color){
	ctx.fillStyle = color;
	ctx.fillRect(rightBlock.x, rightBlock.y, rightBlock.width, rightBlock.height);
};

var drawScore = function(font, fontSize, color){
	var scoreFont = fontSize + "px " + font;
	ctx.fillStyle = color;	
	ctx.fillText("Player 1: " + leftBlock.score, 50, 20);
	ctx.fillText("Player 2: " + rightBlock.score, canvas.width - 160, 20);
};