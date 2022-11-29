import * as dotenv from 'dotenv';
dotenv.config();
// make our env variables available

import app from './server';
import config from './config/index';

app.listen(config.PORT, () => {
  console.log(`server is runnig on port ${config.PORT}`)
})