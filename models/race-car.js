import Car from './car.js';
import isString from '../utils/is-string.js';

export default class RaceCar extends Car {
	constructor(make, model, classification) {
		super(...arguments);
		if (!isString(classification)) {
			throw new Error('need classification for RaceCar');
		}
		this.classification = classification;
	}
	details() {
    console.log(`${this.make} ${this.model} ${this.classification}`);
	}
}
