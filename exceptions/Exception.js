/**
 *
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
     *
     * @param message
     */
    setMessage(message) {
        this.message = message;
    }

    /**
     *
     * @param errorCode
     */
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
    }

    /**
     *
     * @param optional
     */
    setOptionalParameter(optional) {
        this.optional = optional;
    }

    /**
     *
     * @returns {undefined}
     */
    getMessage() {
        return this.message;
    }

    /**
     *
     * @returns {undefined}
     */
    getErrorCode() {
        return this.errorCode;
    }

    /**
     *
     * @returns {{}|*}
     */
    getOptionalParameter() {
        return this.optional;
    }
}

module.exports = Exception;
