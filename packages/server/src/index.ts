import app from './app';
import { connectDatabase } from './database';

const PORT = process.env.PORT || 4000;

app
  .listen(PORT, async () => {
    await connectDatabase();

    console.log(`Running on port ${PORT}`);
  })
  .on('error', (err) => {
    console.log(err);
  });