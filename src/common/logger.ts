import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.prettyPrint()
  ),
  transports: [new winston.transports.File({ filename: 'out.log' })]
});
