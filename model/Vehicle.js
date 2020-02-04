/**
 * Base Class Vehicle
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
     * function to get registration no
     * @returns {*}
     */
    getRegistrationNo() {
        return this.registrationNo;
    }

    /**
     * function to set registration no
     * @param registrationNo
     */
    setRegistrationNo(registrationNo) {
        this.registrationNo = registrationNo;
    }

    /**
     * function to get color
     * @returns {*}
     */
    getColor() {
        return this.color;
    }

    /**
     * function to set color
     * @param color
     */
    setColor(color) {
        this.color = color;
    }
}

module.exports = Vehicle;
