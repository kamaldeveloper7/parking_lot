const BaseExecutor = require('./BaseExecutor');
const { commands: commandConstants } = require('../constants/constants');
const ParkingService = require('../service/ParkingService');
const Car = require('../model/Car');

class RequestExecutor extends BaseExecutor {

    constructor() {
        super();
        this.parkingService = new ParkingService();
    }

    /**
     *
     * @param command
     * @returns {Promise<void>}
     */
     execute(command) {
        const commandInput = command.split(" ");
        switch(commandInput[0]) {
            case commandConstants.STATUS :
                this.parkingService.getStatus();
                break;
            case commandConstants.REG_NUMBER_FOR_CARS_WITH_COLOR:
                this.parkingService.getSlotNoFromRegistration(commandInput[1]);
                break;
            case commandConstants.SLOTS_NUMBER_FOR_CARS_WITH_COLOR:
                this.parkingService.getSlotNoFromColor(commandInput[1]);
                break;
            case commandConstants.CREATE_PARKING_LOT:
                this.parkingService.createParkingLot(commandInput[1]);
                break;
            case commandConstants.LEAVE:
                this.parkingService.leave(commandInput[1]);
                break;
            case commandConstants.PARK:
                this.parkingService.parkVehicle(new Car(commandInput[1], commandInput[2]));
                break;
            default:
                console.log("wrong input operation");
                break;
        }
    }
}

module.exports = new RequestExecutor();
