import server from './index.js';
import { connectUsingMongoose } from './src/config/mongooseConfig.js';

server.listen(3000, () => {
  connectUsingMongoose();
  console.log('server is listening at port 3000');
});
