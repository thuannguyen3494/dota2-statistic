/* eslint no-console: 0 */

import express from 'express';

import { apiPort } from '../config/env';
import heroes from './routes/hero.routes';
const app = express();

// app.get('/api', (req, res) => {
//   res.send('Hello, world!');
// });
app.use('/api', heroes);

app.listen(apiPort, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Api listening on port ${apiPort}!`);
  }
});
