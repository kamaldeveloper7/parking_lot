const http = require('http');
const fs = require('fs');
const rl = require("readline");

const {port, host} = require('./config/configuration.js');
const RequestExecutor = require('Executor/RequestExecutor');

const inputs = process.argv;

try {
    switch (inputs.length) {
        case 0: {
            console.log("Input:");
            while(true) {
                const promptOption = rl.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
                if(promptOption.toLowerCase() === "exit")
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
        case 1:
            fs.readFile(inputs[2], 'utf-8', function(err, data) {
                const commands = data.split("\n");
                for(let i =0 ; i < commands.length; i++){
                    if(RequestExecutor.validateInput(commands[i])) {
                        try {
                            RequestExecutor.execute(commands[i]);
                        } catch (e) {
                            console.log(e);
                        }
                    }
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


