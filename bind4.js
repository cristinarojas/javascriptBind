var x = 10; // Global context 

var firstContext = {
	x: 15, // First context
	getX: function() {
		return this.x;
	}
};

var secondContext = {
	x: 25 // Second context
}

// FIRST CONTEXT 15
firstContext.getX(); 

// GLOBAL CONTEXT 10
var retrieveX = firstContext.getX; 
retrieveX();

// SPECIFIC CONTEXT 25
var bindGetX = retrieveX.bind(secondContext); // We are asking to specific context with bind.
bindGetX(); 