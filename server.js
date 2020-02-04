const http = require('http');
const fs = require('fs');
const rl = require("readline");

const {port, host} = require('./config/configuration.js');
const RequestExecutor = require('./executor/RequestExecutor');

const inputs = process.argv;
console.log(inputs[inputs.length-1])
try {
    switch (inputs[inputs.length-1]) {
        case 100: {
            console.log("Input:");
            while(true) {
                const promptOption = rl.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
                console.log(promptOption)
                if(promptOption === "exit")
                    break;
                else {
                    if(RequestExecutor.validateInput(promptOption)) {
                        try {
                            RequestExecutor.execute(promptOption);
                        } catch (e) {
                            console.log(e);
                        }

                    }
                }
            }
            break;
        }
        case 1: {
            console.log('aaaaaa')
            fs.readFile(inputs[2], 'utf-8', function (err, data) {
                const commands = data.split("\n");
                for (let i = 0; i < commands.length; i++) {
                    if (RequestExecutor.validateInput(commands[i])) {
                        try {
                            RequestExecutor.execute(commands[i]);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }
            });
        }
        default:

                const promptOption = rl.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
                promptOption.question("Input: ", function (input) {
                    if(RequestExecutor.validateInput(input)) {
                        RequestExecutor.execute(input);
                    }

                });



    }
} catch (e) {
    console.log(e);
}


try {
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Server is up and running!\n');
    }).listen(port, host);
} catch (error) {
    console.log(error)
}


