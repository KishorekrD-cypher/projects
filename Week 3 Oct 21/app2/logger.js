const url = "http://localhost:8000/logger";

function log(message){
    console.log("The message is: "+message);
}

module.exports.log = log;
module.exports.endpoint = url;