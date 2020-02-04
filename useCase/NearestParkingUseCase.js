module.exports = class NearestParkingUseCase {

    constructor() {
        this.freeSlots = [];
    }

    addSlot(slot) {
        this.freeSlots.push(slot);
    }

    getFreeSlot() {
        return this.freeSlots[0];
    }

    removeSlot(slot) {
        this.freeSlots.splice(slot,1);
    }
};
