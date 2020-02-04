const vehicle = require('../model/Vehicle');
const NearestParkingUseCase = require('../useCase/NearestParkingUseCase');
const { status } = require('../constants/constants');

/**
 * Parking Manager Class to manage parking facilities
 */
class ParkingManager {

    /**
     *
     * @param capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicleSlots = {};
        this.slotsAvailability = 0;
        this.nearestParkingUseCase = new NearestParkingUseCase();
    }

    /**
     * function to get parking lot status
     * @returns {Array}
     */
    getStatus() {
        const statusList = [];
        for(let i=0; i < this.capacity; i++) {
            if(Object.entries(this.vehicleSlots[i]).length > 0) {
                statusList.push(`i  "\t\t"  ${this.vehicleSlots[i].getRegistrationNo()}  "\t\t"  ${this.vehicleSlots[i].getColor()}`);
            }
        }
        return statusList;
    }

    /**
     * function to create parking lot
     * @param capacity
     * @returns {ParkingManager}
     */
    createParkingLot(capacity) {
        this.slotsAvailability = capacity;
        for(let i=0; i < capacity; i++) {
            this.vehicleSlots[i]= {};
            this.nearestParkingUseCase.addSlot(i);
        }
        this.capacity = capacity;
        return this;
    }

    /**
     * function to execute car leaving functionality
     * @param slotNumber
     * @returns {boolean}
     */
    leaveCar(slotNumber) {
        if(!this.vehicleSlots.slotNumber) {
            return false;
        }
        this.incrementSlotAvailability();
        this.vehicleSlots.slotNumber = {};
        return true;
    }

    /**
     * function to increment slot availability count
     */
    incrementSlotAvailability() {
        this.slotsAvailability++;
    }

    /**
     * function to decrement slot availability count
     */
    decrementAvailability() {
        this.slotsAvailability--;
    }

    /**
     * function to get slot availability count
     * @returns {number}
     */
    getAvailabilityCount() {
        return this.slotsAvailability;
    }

    /**
     * function to park vehicle in slot
     * @param vehicle
     * @returns {*}
     */
    parkVehicle(vehicle) {
        if(this.slotsAvailability === 0) {
            return status.NOT_AVAILABLE;
        }
        const availableSlot = this.nearestParkingUseCase.getFreeSlot();
        if(Object.values(this.vehicleSlots).indexOf(vehicle) > -1) {
            return status.PARKING_ALREADY_EXIST;
        }

        this.vehicleSlots[availableSlot] = vehicle;
        this.nearestParkingUseCase.removeSlot();
        this.decrementAvailability();
        return availableSlot;
    }

    /**
     * function to get registrationNo from color
     * @param color
     * @returns {Array}
     */
    getRegNumberForColor(color) {
        const vehicleList = [];
        for(let i in this.capacity) {
            let parkedVehicle = this.vehicleSlots[i];
            if(parkedVehicle && color === parkedVehicle.getColor()) {
                vehicleList.push(parkedVehicle.get().getRegistrationNo());
            }
        }
        return vehicleList;
    }

    /**
     * function to get slotList from color
     * @param color
     * @returns {Array}
     */
    getSlotNoFromColor(color) {
        const slotList = [];
        for(let i=0; i < this.capacity; i++) {
            if(Object.entries(this.vehicleSlots[i]).length && this.vehicleSlots[i].getColor() === color) {
                slotList.push(this.vehicleSlots[i].getRegistrationNo());
            }
        }
        return slotList;
    }

    /**
     * function to get slot no from registration no
     * @param registrationNo
     * @returns {string}
     */
    getSlotNoFromRegistration(registrationNo) {
        let result = undefined;
        for(let i=0; i < this.capacity; i++) {
            if(Object.entries(this.vehicleSlots[i]).length && registrationNo === this.vehicleSlots[i].getRegistrationNo()) {
                result = i;
            }
        }
        return result;
    }

    /**
     * function to execute leaving functionality
     * @param slot
     * @returns {boolean}
     */
    leaveVehicle(slot) {
        if(Object.keys(this.vehicleSlots[slot]).length===0)
            return false;
        this.incrementSlotAvailability();
        this.nearestParkingUseCase.addSlot(slot);
        this.vehicleSlots[slot] = {};
        return true;
    }
}

module.exports = ParkingManager;
