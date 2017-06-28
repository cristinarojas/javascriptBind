var x = 10; // Global context 

var secondContext = {
	x: 25 // Second context
}


// We are passing the first parameter like the context 
console.log(retrieveX.call(secondContext));
