const {commands: commandConstants} = require('../constants/constants');

/**
 * InputCommandMapper class to map input to command
 */
class InputCommandMapper  {

    /**
     *
     */
    constructor() {
        this.commandMap = this._commandMapper()
    }

    /**
     * function to get input from map
     * @returns {{[p: string]: number}}
     */
    getInputCommandFromMap(command) {
        return this.commandMap[command];
    }

    /**
     * function to return mapped command
     * @returns {{[p: string]: number}}
     * @private
     */
    _commandMapper() {
        return {
            [commandConstants.CREATE_PARKING_LOT]: 1,
            [commandConstants.PARK]: 2,
            [commandConstants.LEAVE]: 3,
            [commandConstants.STATUS]: 4,
            [commandConstants.REG_NUMBER_FOR_CARS_WITH_COLOR]: 5,
            [commandConstants.SLOTS_NUMBER_FOR_CARS_WITH_COLOR]: 6,
            [commandConstants.SLOTS_NUMBER_FOR_REG_NUMBER]:1
        }
    }
}

module.exports = new InputCommandMapper();
