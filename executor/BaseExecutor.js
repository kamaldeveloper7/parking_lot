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
     validateInput(inputCommand) {
        let valid = true;
        try {

            const inputs = inputCommand.split(" ");
            const mappedCommand = InputCommandMapper.getInputCommandFromMap(inputs[0]);
            switch (inputs.length) {
                case 1:
                    if (mappedCommand !== 4)
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
        return valid;
    }
}

module.exports = BaseExecutor;

