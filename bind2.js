var x = 10;

var module = {
	x: 15,
	getX: function() {
		return this.x;
	}
};

var retrieveX = module.getX; // In this way the context of the function is the global context.

retrieveX(); // 10