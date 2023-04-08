import 'dotenv/config';
// import 'module-alias/register';
import mongoose from 'mongoose';

import App from './app';
import { UsersController } from './api/users/users.controller';
import { ListsController } from './api/list/list.controller';

const app = new App(
  [new UsersController(), new ListsController()],
  Number(process.env.PORT)
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Connected successfully');
});

app.listen();
