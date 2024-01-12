import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.prettyPrint()
  ),
  transports: [new winston.transports.File({ filename: 'out.log' })]
});

// export const logger = {
//   info: (msg: string, ...arg: any[]) => {
//     // console.log(msg, arg);
//     winstonLogger.info(msg, arg);
//   },
//   debug: (msg: string, ...arg: any[]) => {
//     // console.debug(msg, arg);
//     winstonLogger.debug(msg, arg);
//   },
//   error: (msg: string, ...arg: any[]) => {
//     // console.error(msg, arg);
//     winstonLogger.error(msg, arg);
//   }
// };
