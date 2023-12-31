import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';
import expressEjsLayouts from 'express-ejs-layouts';
import hobbyRoute from './src/hobby/hobby.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

// Define the views directory
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('', hobbyRoute);

export default app;
