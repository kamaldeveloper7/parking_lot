/**
 * Exception class for error handling
 */
class Exception {

    /**
     *
     * @param errorCode
     * @param message
     * @param optional
     */
    constructor(errorCode, message, optional = {}) {
        this.message = undefined;
        this.errorCode = undefined;
        this.optional = {};
        this.setMessage(message);
        this.setErrorCode(errorCode);
        this.setOptionalParameter(optional);
    }

    /**
     * function to set message
     * @param message
     */
    setMessage(message) {
        this.message = message;
    }

    /**
     *  function to set errorCode
     * @param errorCode
     */
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
    }

    /**
     * function to set optional parameter
     * @param optional
     */
    setOptionalParameter(optional) {
        this.optional = optional;
    }

    /**
     * function to get error message
     * @returns {undefined}
     */
    getMessage() {
        return this.message;
    }

    /**
     * function to get error code
     * @returns {undefined}
     */
    getErrorCode() {
        return this.errorCode;
    }

    /**
     *  function to get optional parameters
     * @returns {{}|*}
     */
    getOptionalParameter() {
        return this.optional;
    }
}

module.exports = Exception;
