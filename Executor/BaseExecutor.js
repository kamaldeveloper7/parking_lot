const InputCommandMapper = require('../helpers/InputCommandMapper');

/**
 * BaseExecutor Class
 */
class BaseExecutor {

    async execute() {}

    /**
     *
     * @param inputCommand
     */
    static validateInput(inputCommand) {
        try {
            let valid = false;
            const inputs = inputCommand.split(" ");
            const mappedCommand = InputCommandMapper.getInputCommandFromMap(inputs[0]);
            switch (inputs.length) {
                case 1:
                    if (mappedCommand !== 0)
                        valid = false;
                    break;

                case 2:
                    if (mappedCommand !== 1)
                        valid = false;
                    break;

                case 3:
                    if(mappedCommand !== 2)
                        valid = false;
                    break;
                default:
                    valid=false;
            }
        } catch (e) {

        }
    }
}

module.exports = new BaseExecutor();

