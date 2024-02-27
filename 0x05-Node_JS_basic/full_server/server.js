import express from 'express';
import routeController from './routes/index';

const app = express();
const PORT = 1245;

routeController(app);

app.listen(PORT);

export default app;
