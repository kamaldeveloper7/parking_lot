const Vehicle = require('./Vehicle');

/**
 *
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
