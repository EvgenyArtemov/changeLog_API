import * as dotenv from 'dotenv';
dotenv.config();
// make our env variables available

import app from './server';

app.listen(3001, () => {
  console.log('server is runnig on port 3001')
})