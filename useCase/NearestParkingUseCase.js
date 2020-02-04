class NearestParkingUseCase {

    constructor() {
        this.freeSlots = [];
    }

    addSlot(slot) {
        this.freeSlots.push(slot);
    }

    getSlot() {
        return this.freeSlots[0];
    }

    removeSlot(slot) {
        this.freeSlots.remove(slot);
    }
}
