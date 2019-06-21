import isString from '../utils/is-string.js';

export default class Car {
	constructor(make, model) {
		if (!isString(make)) {
			throw new Error('need valid make');
		}
		if (!isString(model)) {
			throw new Error('need valid make');
		}
		this.make = make;
		this.model = model;
	}
	details() {
    console.log(`${this.make} ${this.model}`);
	}
}

