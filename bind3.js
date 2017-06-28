// If I don't declare the global x. 

var module = {
	x: 15,
	getX: function() {
		return this.x;
	}
};

var retrieveX = module.getX; // In this way the context of the function is the global context.

retrieveX(); // This will be Undefined.