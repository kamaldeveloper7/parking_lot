/**
 *
 */
class Vehicle {

    /**
     *
     * @param registrationNo
     * @param color
     */
    constructor(registrationNo, color) {
        this.registrationNo = registrationNo;
        this.color = color;
    }

    /**
     *
     * @returns {*}
     */
    getRegistrationNo() {
        return this.registrationNo;
    }

    /**
     *
     * @param registrationNo
     */
    setRegistrationNo(registrationNo) {
        this.registrationNo = registrationNo;
    }

    /**
     *
     * @returns {*}
     */
    getColor() {
        return this.color;
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        this.color = color;
    }
}

module.exports = Vehicle;
