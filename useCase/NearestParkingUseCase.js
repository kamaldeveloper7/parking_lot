/**
 *
 */
class NearestParkingUseCase {

    /**
     *
     */
    constructor() {
        this.freeSlots = [];
    }

    /**
     *
     * @param slot
     */
    addSlot(slot) {
        this.freeSlots.push(slot);
    }

    /**
     *
     * @returns {*}
     */
    getFreeSlot() {
        return this.freeSlots[0];
    }

    /**
     *
     * @param slot
     */
    removeSlot(slot) {
        this.freeSlots.splice(slot,1);
    }
}

module.exports = NearestParkingUseCase;
