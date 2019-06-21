// Convert the following to use Classes instead of functions:

const Corvette = new Car('Chevrolet', 'Corvette');
console.log(Corvette);
const RaceVette = new RaceCar('Corvette', 'C7.R', 'GTE-PRO');
console.log(RaceVette);

function Car(make, model) {
	this.make = make;
	this.model = model;
}

// Adding a method to the constructor
Car.prototype.details = function() {
	console.log(`${this.make} ${this.model}`);
};
Corvette.details();
// Creating a new constructor from the parent
function RaceCar(make, model, classification) {
	// Chain constructor with call
	Car.call(this, make, model);
	this.classification = classification;
}

// RaceCar.prototype = Object.create(RaceCar.prototype);

RaceCar.prototype.details = function() {
	console.log(`${this.make} ${this.model} ${this.classification}`);
};
RaceVette.details();
