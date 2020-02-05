const BaseParkingService = require('./BaseParkingService');
const ParkingManager = require('../gateways/ParkingManager');
const Exception = require('../exceptions/Exception');
const { status: parkingStatus, errorCode: errorMessage } = require('../constants/constants');

/**
 * Parking service class inherits from base class
 */
class ParkingService extends BaseParkingService {

    /**
     *
     */
    constructor() {
        super();
        this.parkingManager = new ParkingManager()
    }

    /**
     * function to get current status
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
     * function to park vehicle in the slots
     * @param vehicle
     */
    parkVehicle(vehicle) {
        try {
            if(this.parkingManager.capacity === undefined) {
                console.log(errorMessage.PARKING_NOT_EXIST_ERROR);
            } else {
                const value = this.parkingManager.parkVehicle(vehicle);
                if(value === parkingStatus.VEHICLE_ALREADY_EXIST)
                    console.log('Sorry, vehicle is already parked.');
                else if (value === parkingStatus.NOT_AVAILABLE)
                    console.log('Sorry, parking lot is full');
                else
                    console.log(`Allocated slot number: ${value+1}`);
            }
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    /**
     * function to create parking lot with defined slot
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
    }

    /**
     * function to get free slot count
     */
    getFreeSlotCount() {
        try {
            const result = this.parkingManager.getFreeSlotCount();
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    /**
     * function to leave vehicle from slot
     * @param slot
     */
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
     * function to get parked slots from color
     * @param color
     */
    getSlotNoFromColor(color) {
        try {
            const slots = this.parkingManager.getSlotNoFromColor(color);
            if(slots.length === 0)
                console.log('Not Found');
            else {
                console.log(slots.join(","));
            }
        } catch(e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    /**
     * function to get slots from registrationNo
     * @param registrationNo
     */
    getSlotNoFromRegistration(registrationNo) {
        try {
            const slot =  this.parkingManager.getSlotNoFromRegistration(registrationNo);
            if(!slot) {
                console.log('Not Found');
            } else {
                console.log(slot);
            }
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }

    /**
     * function to get registration no from color
     * @param color
     */
    getRegNoFromColor(color) {
        try {
            const registrationNo = this.parkingManager.getRegNumberForColor(color);
            if(registrationNo.length === 0)
                console.log('Not Found');
            else {
                console.log(registrationNo.join(","));
            }
        } catch (e) {
            throw new Exception(errorMessage.PROCESSING_ERROR, e);
        }
    }
}

module.exports = ParkingService;
