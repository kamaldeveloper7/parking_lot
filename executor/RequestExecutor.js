const BaseExecutor = require('./BaseExecutor');
const { commands: commandConstants } = require('../constants/constants');
const ParkingService = require('../service/ParkingService');
const Car = require('../model/Car');

class RequestExecutor extends BaseExecutor {

    /**
     *
     * @param command
     * @returns {Promise<void>}
     */
     execute(command) {
        const commandInput = command.split(" ");
        switch(commandInput[0]) {
            case commandConstants.STATUS :
                ParkingService.getStatus();
                break;
            case commandConstants.REG_NUMBER_FOR_CARS_WITH_COLOR:
                ParkingService.getSlotNoFromRegistration(commandInput[1]);
                break;
            case commandConstants.SLOTS_NUMBER_FOR_CARS_WITH_COLOR:
                ParkingService.getSlotNoFromColor(commandInput[1]);
                break;
            case commandConstants.CREATE_PARKING_LOT:
                ParkingService.createParkingLot(commandInput[1]);
                break;
            case commandConstants.LEAVE:
                ParkingService.leave(commandInput[1]);
                break;
            case commandConstants.PARK:
                ParkingService.parkVehicle(new Car(commandInput[1], commandInput[2]));
                break;
            default:
                console.log("wrong input operation");
                break;
        }
    }
}

module.exports = new RequestExecutor();
