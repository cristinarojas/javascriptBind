// Bind creates a new function that will have this set to the first parameter passed to bind().

var x = 10;

var module = {
	x: 15,
	getX: function() {
		return this.x;
	}
};

module.getX(); // The context of this function is all the context inside the object.
			   // 15