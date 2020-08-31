// routes
import index from './routes/index';

import express from 'express';
const app = express();

app.use('/', index);

app.listen(3000, () => console.log('Listening on port 3000'));