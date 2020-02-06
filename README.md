# Parking Lot Problem

**author: kamal Sehrawat

Solve parking lot problem written in Nodejs. So this need [Nodejs to be installed](https://nodejs.org/dist/v12.14.1/node-v12.14.1.pkg) (version >= 12.14.1).


## Project Requirements

* Nodejs Version > 12.14.1
* npm version 6.4.1 

## Setup application

Run bash ```setup``` in ```bin``` directory
```sh
parking_lot $ bin/setup
```
This command will automatically installed required packages mentioned in ```package.json``` and automatically run unit testing, unit testing commands contained in the file  ```test/testing.js```

This application fully controlled by command. Run bash ```parking_lot``` in bin directory with 2 options:

* The inputs commands are expected and taken from the file specified
```sh
parking_lot $ bin/parking_lot [input_filepath]
```
* Or start the program in interactive mode.
```sh
parking_lot $ bin/parking_lot
```
**Command list**

* ```>> create_parking_lot [capacity]```
Initialization of parking lot with parameters of slot capacity. This command must be run first to initialize the parking lot.

* ```>> park [car_registration_number] [car_color]```
The parking car in available slot with identity of registration number and color.
If success, program will print ```Allocated slot number: [nearest_slot_number]```. If failed,
(parking lot is full, slot already filled) will print ```Sorry, parking lot is full```

* ```>> leave [slot_number]```
The slot is available again after the car leaves the parking lot (give the entrance ticket) so that the slot can be occupied by the another car will park.

* ```>> status```
For print parking area status in table format.
```Slot No.    Registration No     Color```

* ```>> registration_numbers_for_cars_with_colour [car_color]```
For print all registration car with specific color who was parking.

* ```>> slot_numbers_for_cars_with_colour [car_color]```
For print all slot number with specific car color who was parking.

* ```>> slot_number_for_registration_number [car_registration_number]```
For print slot number with specific car registration color who was parking.

Notes:
1. Source code can find in folder ```parking_lot```.
2. git logs are present in ```log.txt``` file.
3. file_inputs.txt file is used to run automated test cases.
