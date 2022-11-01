import dayjs from 'dayjs';
import express from 'express';

import database from './libs/database.js';

import errors from './middlewares/errors.js';
import planetsRoutes from './routes/planets-routes.js';

database();
const app = express();
app.use(express.json()); //Permettre à notre serveur de comprendre le json reçu

app.use('/planets', planetsRoutes);

app.use(errors);

export default app;