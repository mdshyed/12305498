import fs from 'fs';

export default function (req, res, next) {
  res.on('finish', () => {
    fs.appendFile('logs.txt', req.method + ' ' + req.originalUrl + ' ' + res.statusCode + '\\n', () => {});
  });
  next();
} 