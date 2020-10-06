// import cors from 'cors';
import express from 'express';
import { join } from 'path';

const port = process.env.PORT ?? 4000;

const app = express();

// app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept',
//   );
//   next();
// });

app.use(express.static(join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
