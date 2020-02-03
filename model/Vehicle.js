class Vehicle {
    constructor(registrationNo, color) {
        this.registrationNo = registrationNo;
        this.color = color;
    }

    getRegistrationNo() {
        return this.registrationNo;
    }

    setRegistrationNo(registrationNo) {
        this.registrationNo = registrationNo;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
}

module.exports = Vehicle;
