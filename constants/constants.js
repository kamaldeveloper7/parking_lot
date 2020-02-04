module.exports = {
    commands: {
        REG_NUMBER_FOR_CARS_WITH_COLOR:"registration_numbers_for_cars_with_colour",
        SLOTS_NUMBER_FOR_CARS_WITH_COLOR:"slot_numbers_for_cars_with_colour",
        SLOTS_NUMBER_FOR_REG_NUMBER: "slot_number_for_registration_number",
        CREATE_PARKING_LOT: "create_parking_lot",
        PARK: "park",
        LEAVE: "leave",
        STATUS: "status"
    },
    status: {
        AVAILABLE:1,
        NOT_FOUND: 2,
        VEHICLE_ALREADY_EXIST: 3,
        NOT_AVAILABLE: 4
    },
    errorCode: {
        PARKING_ALREADY_EXIST: "Sorry Parking Already Created, It CAN NOT be again recreated.",
        PARKING_NOT_EXIST_ERROR: "Sorry, Car Parking Does not Exist",
        INVALID_VALUE: "value is incorrect",
        INVALID_FILE: "Invalid File",
        PROCESSING_ERROR: "Processing Error ",
        INVALID_REQUEST: "Invalid Request"
    }
};
