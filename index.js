import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';
import expressEjsLayouts from 'express-ejs-layouts';
import HobbyController from './src/controllers/hobbyController.js';
const hobbyController = new HobbyController();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

// Define the views directory
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//GET Routes
app.get('/', hobbyController.index);
app.get('/getHobbyCalendar', hobbyController.getHobbyCalendar);

//POST Routes
app.post('/search', hobbyController.search);
app.post('/create', hobbyController.create);
app.post('/updateCalendar', hobbyController.updateCalendar);

export default app;
