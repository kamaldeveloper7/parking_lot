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
                statusList.push(`${i+1}  \t\t ${this.vehicleSlots[i].getRegistrationNo()}  \t\t  ${this.vehicleSlots[i].getColor()}`);
            }
        }
        if(statusList.length)
            statusList.unshift(`Slot No.\t Registration No  \t\t  Color`)
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
        for(let i=0; i < this.capacity; i++) {
            if(Object.entries(this.vehicleSlots[i]).length && this.vehicleSlots[i].getColor() === vehicle.getColor() && this.vehicleSlots[i].getRegistrationNo() === vehicle.getRegistrationNo()) {
                return status.VEHICLE_ALREADY_EXIST;
            }
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
        for(let i=0; i < this.capacity; i++) {
            if(Object.entries(this.vehicleSlots[i]).length && this.vehicleSlots[i].getColor() === color) {
                vehicleList.push(this.vehicleSlots[i].getRegistrationNo());
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
                slotList.push(i+1);
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
                result = i+1;
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
        slot = slot-1;
        if(Object.keys(this.vehicleSlots[slot]).length===0)
            return false;
        this.incrementSlotAvailability();
        this.nearestParkingUseCase.addRemoveSlot(slot);
        this.vehicleSlots[slot] = {};
        return true;
    }
}

module.exports = ParkingManager;
