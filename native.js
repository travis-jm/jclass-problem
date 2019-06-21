import Car from './models/car.js';
import RaceCar from './models/race-car.js';
const Corvette = new Car('Chevrolet', 'Corvette');
console.log(Corvette);
Corvette.details();
const RaceVette = new RaceCar('Corvette', 'C7.R', 'GTE-PRO');
console.log(RaceVette);
RaceVette.details();
