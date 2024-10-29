const eventEmitter = require('events');

class logger extends eventEmitter{
    log(message){
        console.log(message);
        this.emit("message loggged", {id: 1, url: 'http://'})
    }
}

module.exports = logger;