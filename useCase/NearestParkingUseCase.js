/**
 * NearestParking UseCase class to have parking slots strategy which can be different for different classes
 */
class NearestParkingUseCase {

    /**
     *
     */
    constructor() {
        this.freeSlots = [];
    }

    /**
     * function to add slots
     * @param slot
     */
    addSlot(slot) {
        this.freeSlots.push(slot);
    }

    /**
     * function to get free slots
     * @returns {*}
     */
    getFreeSlot() {
        return this.freeSlots[0];
    }

    /**
     * function to remove slot
     * @param slot
     */
    removeSlot(slot) {
        this.freeSlots.splice(slot,1);
    }
}

module.exports = NearestParkingUseCase;
