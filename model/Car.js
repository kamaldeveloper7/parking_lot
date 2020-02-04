const Vehicle = require('./Vehicle');

/**
 * Extended class car
 */
class Car extends  Vehicle {

    /**
     *
     * @param registrationNo
     * @param color
     */
    constructor(registrationNo, color) {
        super(registrationNo, color);
    }
}

module.exports = Car;
