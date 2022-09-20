import mongoose from 'mongoose';

import { config } from './config';

export const connectDatabase = async (): Promise<void> => {
  mongoose.connection
    .on('error', err => console.log(err))
    .once('open', () => console.log('Connected with the database!'))
    .on('close', () => console.log('Database connection was closed!'));

  await mongoose.connect(config.MONGO_URI);
};