/**
 * NearestParking UseCase class to have parking slots strategy which can be different for different classes
 */
class NearestParkingUseCase {

    /**
     *
     */
    constructor() {
        this.freeSlots = [];
        this.removeSlots = [];
    }

    /**
     * function to add slots
     * @param slot
     */
    addSlot(slot) {
        this.freeSlots.push(slot);
    }

    /**
     * function to add removed Slots
     * @param slot
     */
    addRemoveSlot(slot) {
        this.removeSlots.push(slot);
    }

    /**
     * function to get free slots
     * @returns {*}
     */
    getFreeSlot() {
        if(this.removeSlots.length)
            return this.removeSlots[0];
        return this.freeSlots[0];
    }

    /**
     * function to remove slot
     * @param slot
     */
    removeSlot(slot) {
        this.removeSlots.splice(slot,1);
        this.freeSlots.splice(slot,1);
    }
}

module.exports = NearestParkingUseCase;
