const BaseParkingService = require('./BaseParkingService');
const ParkingManager = require('../gateways/ParkingManager');
const Exception = require('../exceptions/Exception');
const { status: parkingStatus, errorCode: errorMessage } = require('../constants/constants');

class ParkingService extends BaseParkingService {
    constructor() {
        super();
        this.parkingSlots = [];
        this.parkingManager = new ParkingManager()
    }

    /**
     *
     */
    getStatus() {
        try {
            const values = this.parkingManager.getStatus();
            if(values.length === 0) {
                console.log("Sorry, parking lot is empty.");
            } else {
                console.log(values.join("\n"));
            }
        } catch(e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    /**
     *
     * @param vehicle
     */
    parkVehicle(vehicle) {
        try {
            const value = this.parkingManager.parkVehicle(vehicle);
            if(value === parkingStatus.VEHICLE_ALREADY_EXIST)
                console.log('Sorry, vehicle is already parked.');
            else if (value === parkingStatus.NOT_AVAILABLE)
                console.log('Sorry, parking lot is full');
            else
                console.log(`Allocated slot number: ${value}`);
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    /**
     *
     * @param capacity
     */
    createParkingLot(capacity) {
        try {
            const result = this.parkingManager.createParkingLot(capacity);
            console.log(`Created parking lot with ${capacity} slots`);
            return result;
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
        // for(let i=0; i < capacity; i++) {
        //     let obj = {};
        //     obj[parseInt(i)] = null;
        //     this.parkingSlots.push(obj);
        // }
        // console.log(this)
    }

    /**
     *
     */
    getFreeSlotCount() {
        try {
            const result = this.parkingManager.getFreeSlotCount();
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    leave(slot) {
        try {
            const result = this.parkingManager.leaveVehicle(slot);
            if(result) {
                console.log(`Slot number  ${slot}  is free`);
            } else {
                console.log('Slot number is Empty Already.');
            }
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    /**
     *
     * @param color
     */
    getSlotNoFromColor(color) {
        try {
            const slots = this.parkingManager.getSlotNoFromColor(color);
            if(slots.length === 0)
                console.log('Not Found');
            else {
                console.log(slots.join("\n"));
            }
        } catch(e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    /**
     *
     * @param registrationNo
     */
    getSlotNoFromRegistration(registrationNo) {
        try {
            return this.parkingManager.getSlotNoFromRegistration(registrationNo);
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }
}

module.exports = ParkingService;
