const express = require('express');
const app = express();
const logger = require('./routes/pino');

app.use(express.json());

app.get('/', (req, res) => {
  logger.info('Root');

  return res.status(200).send('Root');
});

app.get('/1', (req, res) => {
    logger.info('One');
  
    return res.status(200).send('One');
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000.');
});