/* global describe, it, before */

//const server = require('../server.js');
setTimeout(()=>{},1000);
const assert = require('chai').assert;
const sinon  = require('sinon');

const fs = require('fs');
const ParkingService = require('../service/ParkingService');
const Car = require('../model/Car');

const commands = [];
let totalParkings;
const parkingArr = [];

// describe('server', function () {
//     before(function () {
//         server.listen(8080);
//     });
//
//     after(function () {
//         server.close();
//     });
// });

// describe('File reading test', function() {
//     it('Read test input', function(done) {
//         fs.readFile('./demo.txt', 'utf-8', function(err, data) {
//             if (err) {
//                 throw "Unable to read file";
//             }
//             commands = JSON.parse(JSON.stringify(data)).split("\n");
//             done();
//         });
//     });
//
//     it('Checking Commands', function(done) {
//         assert.equal(commands[0].split(" ")[0],"create_parking_lot");
//         assert.equal(commands[1].split(" ")[0],"park");
//         assert.equal(commands[7].split(" ")[0],"leave");
//         assert.equal(commands[8],"status");
//         done();
//     });
// });
// const ParkingServiceInstance = new ParkingService();
// console.log(ParkingServiceInstance);
// totalParkings = ParkingServiceInstance.createParkingLot(6);
// console.log(totalParkings)

describe("Testing Functions", function() {
    const spy = sinon.spy(console, 'log');
    it('Create a Parking lot', function (done) {
        const ParkingServiceInstance = new ParkingService();
        ParkingServiceInstance.createParkingLot(6);
        const parkingManager = ParkingServiceInstance.parkingManager;

        assert.equal(Object.keys(parkingManager.vehicleSlots).length,6);
        assert.equal(parkingManager.slotsAvailability, 6);
        done();
    });

    // it('test parking capacity', function (done) {
    //
    //     const ParkingServiceInstance = new ParkingService();
    //     ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-1234", "White"));
    //     assert.equal(spy.calledWith('Allocated slot number: Sorry, Car Parking Does not Exist'), true);
    //     ParkingServiceInstance.createParkingLot(6);
    //     ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-1234", "White"));
    //     ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-9999", "White"));
    //     ParkingServiceInstance.parkVehicle(new Car("KA-01-BB-0001", "Black"));
    //
    //     const parkingManager = ParkingServiceInstance.parkingManager;
    //     assert.equal(parkingManager.slotsAvailability,3);
    //     done();
    // });
    //
    // it('test empty parking lot', function (done) {
    //     const ParkingServiceInstance = new ParkingService();
    //     ParkingServiceInstance.getStatus();
    //
    //     //const parkingManager = ParkingServiceInstance.parkingManager;
    //     assert.equal(spy.calledWith("Sorry, parking lot is empty."), true);
    //     done();
    // });

    it('test parking lot is full', function (done) {
        const ParkingServiceInstance = new ParkingService();
        ParkingServiceInstance.createParkingLot(2);
        ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-1234", "White"));
        ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-9999", "White"));
        ParkingServiceInstance.parkVehicle(new Car("KA-01-BB-0001", "Black"));
        assert.equal(spy.calledWith("Sorry, parking lot is full"), true);
        done();
    });

    it('test leave', function (done) {
        const ParkingServiceInstance = new ParkingService();
        ParkingServiceInstance.createParkingLot(6);
        ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-1234", "White"));
        ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-9999", "White"));
        ParkingServiceInstance.parkVehicle(new Car("KA-01-BB-0001", "Black"));
        ParkingServiceInstance.leave(4);
        assert.equal(spy.calledWith("Slot number is Empty Already."), true);
        done();
    });

    it('test vehicle already present', function (done) {
        const ParkingServiceInstance = new ParkingService();
        ParkingServiceInstance.createParkingLot(6);
        ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-1234", "White"));
        ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-9999", "White"));
        ParkingServiceInstance.parkVehicle(new Car("KA-01-HH-9999", "White"));

        assert.equal(spy.calledWith("Slot number is Empty Already."), true);
        done();
    });

});
