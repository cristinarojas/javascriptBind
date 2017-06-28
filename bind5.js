var fullName = "Cristina Rojas";

var person = {
	other: {
		fullName: "Nayeli Rojas"
	},
	fullName: "Efrain Rojas",
	getFullName: function() {
		return this.fullName;
	}
};

var getFullName = person.getFullName.bind(person.other);

console.log(getFullName());