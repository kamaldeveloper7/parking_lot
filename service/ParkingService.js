const BaseParkingService = require('BaseParkingService');
const { status: parkingStatus, errorCode: errorMessage } = require('../constants');

class ParkingService extends BaseParkingService {
    constructor() {
        super();
        this.parkingSlots = [];
    }

    /**
     *
     */
    getStatus() {
        try {
            const status = ParkingManager.getStatus();
            if(status.length === 0) {
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
            const value = ParkingManager.park(vehicle);
            if(value === parkingStatus.VEHICLE_ALREADY_EXIST)
                console.log('Sorry, vehicle is already parked.');
            else if (value === parkingStatus.NOT_AVAILABLE)
                console.log('Sorry, parking lot is full')
            else
                console.log(`Allocated slot number: ${value}`)
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    /**
     *
     * @param capacity
     */
    createParkingLot(capacity) {
        for(let i=0; i< capacity; i++) {
            let obj = {};
            obj[parseInt(i)] = null;
            this.parkingSlots.push(obj);
        }
    }

    /**
     *
     */
    getFreeSlotCount() {
        try {
            const result = ParkingManager.getFreeSlotCount();
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    leave(slot) {
        try {
            const result = ParkingManager.leave(slot);
            if(result) {
                console.log(`Slot number  ${slot}  is free`)
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
            const slots = ParkingManager.getSlotNoFromColor(color);
            if(slots.length === 0)
                console.log('Not Found');
            else {
                console.log(slots.join("\n"))
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
            const result = ParkingManager.getRegistrationNoFromColor(registrationNo);
            return result;
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }
}

module.exports = new ParkingService();
