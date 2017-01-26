
var ball = function (x, y, height, width, dirx, diry, mod, speed) {
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.dirx = dirx;
	this.diry = diry;
	this.mod = mod;
	this.speed = speed;
};

var leftBlock = function(x, y, height, width, score, speed){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.score = score;
	this.speed;
};

var rightBlock= function(x, y, height, width, score, speed){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.score = score;
	this.speed;
};