const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("connection", { id: 1, message: "Merhaba Akif" });
  }
}

module.exports = Logger;
