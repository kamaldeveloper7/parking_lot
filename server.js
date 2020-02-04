const http = require('http');
const fs = require('fs');
const rl = require("readline");

const {port, host} = require('./config/configuration.js');
const RequestExecutor = require('./executor/RequestExecutor');

const inputs = process.argv;
inputs[inputs.length - 1] = 'true';
try {
  if(inputs[inputs.length - 1] === 'true') {
    interact();
  }
  else {
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
} catch (e) {
    console.log(e);
}

function  interact() {
    const promptOption = rl.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
    promptOption.question("Input: ", function (input) {
        if(input === "exit"){
            console.log('exiting');
            process.exit(0);
        }
        else {
            if (RequestExecutor.validateInput(input)) {
                RequestExecutor.execute(input);
            }
        }
        interact();
    });

}

try {
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Server is up and running!\n');
    }).listen(port, host);
} catch (error) {
    console.log(error)
}


