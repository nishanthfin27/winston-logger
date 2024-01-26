//const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `[${level}] [${timestamp}] : [${message}]`;
});

const productionLogger = () => {
    return createLogger({
        level: 'info',
        format: combine(
            timestamp(),
            myFormat
        ),
        transports: [
            new transports.Console(),
            new transports.File({filename: "myErros.log"})
        ],
    });
}

module.exports = productionLogger