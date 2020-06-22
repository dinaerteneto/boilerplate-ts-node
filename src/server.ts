import express from 'express';

import './database';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.listen(3002, () => {
  console.log('Sever started on port 3002');
});
