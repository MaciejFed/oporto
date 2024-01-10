import winston from 'winston';

const winstonLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.prettyPrint()
  ),
  transports: [new winston.transports.File({ filename: 'out.log' })]
});

export const logger = {
  info: (msg: string, ...arg: any[]) => {
    console.log(msg, arg);
    winstonLogger.info(msg);
  },
  debug: (msg: string, ...arg: any[]) => {
    console.debug(msg, arg);
    winstonLogger.debug(msg);
  },
  error: (msg: string, ...arg: any[]) => {
    console.error(msg, arg);
    winstonLogger.error(msg, arg);
  }
}
