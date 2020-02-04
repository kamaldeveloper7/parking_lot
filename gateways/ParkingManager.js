const vehicle = require('../model/Vehicle');
const NearestParkingUseCase = require('../useCase/NearestParkingUseCase');
const { errorCode, status } = require('../constants/constants');

class ParkingManager {

    constructor(capacity) {
        this.capacity = capacity;
        this.vehicleSlots = {};
        this.slotsAvailability = 0;
        this.nearestParkingUseCase = new NearestParkingUseCase();
    }

    /**
     *
     * @returns {Array}
     */
    getStatus() {
        const statusList = [];
        for(let i in this.capacity) {
            let parkedVehicle = this.vehicleSlots[i];
            if(parkedVehicle.prototype.isPresent()) {
                statusList.push(`i  "\t\t"  ${parkedVehicle.get().getRegistrationNo()}  "\t\t"  ${parkedVehicle.get().getColor()}`);
            }
        }
        return statusList;
    }

    createParkingLot(capacity) {
        this.slotsAvailability = capacity;
        for(let i=0; i < capacity; i++) {
            this.vehicleSlots[i]= {};
            this.nearestParkingUseCase.addSlot(i);
        }
        return this;
    }

    /**
     *
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
     *
     */
    incrementSlotAvailability() {
        this.slotsAvailability++;
    }

    /**
     *
     */
    decrementAvailability() {
        this.slotsAvailability--;
    }

    /**
     *
     * @returns {number}
     */
    getAvailabilityCount() {
        return this.slotsAvailability;
    }

    /**
     *
     * @param vehicle
     * @returns {*}
     */
    parkVehicle(vehicle) {
        if(this.slotsAvailability === 0) {
            return status.NOT_AVAILABLE;
        }
        const availableSlot = this.nearestParkingUseCase.getFreeSlot();
//        console.log(this.vehicleSlots);
  //      console.log(vehicle);
console.log(Object.values(this.vehicleSlots).indexOf(vehicle));
        if(Object.values(this.vehicleSlots).indexOf(vehicle) > -1) {
            return status.PARKING_ALREADY_EXIST;
        }

        this.vehicleSlots[availableSlot] = vehicle;
    //    console.log(this.vehicleSlots);
        this.nearestParkingUseCase.removeSlot();
        this.decrementAvailability();
        return availableSlot;
    }

    /**
     *
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
     *
     * @param color
     * @returns {Array}
     */
    getSlotNumbersFromColor(color) {
        const slotList = [];
        for(let i in this.capacity) {
            let parkedVehicle = this.vehicleSlots[i];
            if(parkedVehicle && parkedVehicle.getColor() === color) {
                slotList.push(parkedVehicle);
            }
        }
        return slotList;
    }

    /**
     *
     * @param registrationNo
     * @returns {string}
     */
    getSlotNoFromRegistrationNo(registrationNo) {
        let result = '';
        for(let i in this.capacity) {
            let parkedVehicle = this.vehicleSlots[i];
            if(parkedVehicle && registrationNo === parkedVehicle.getRegistrationNo()) {
                result = i;
            }
        }
        return result;
    }

    /**
     *
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
