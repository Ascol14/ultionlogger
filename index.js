module.exports = {
    Logger: class Logger {
        constructor(debugMode) {
            this.debugMode = debugMode;
        }

        log(message) {
            console.log(message);
        }

        debug(message) {
            if (this.debugMode) {
                console.log(message);
            }
        }

        error(message) {
            console.error(message);
        }

        warn(message) {
            console.warn(message);
        }
    }
}