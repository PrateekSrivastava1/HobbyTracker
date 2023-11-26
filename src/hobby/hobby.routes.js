import express from 'express';
// import HobbyController from '../controllers/hobbyController.js';
import HobbyController from './hobby.controller.js';

const router = express.Router();

const hobbyController = new HobbyController();
// GET Routes
// router.route('/', hobbyController.index);
// router.route('/getHobbyCalendar', hobbyController.getHobbyCalendar);

router.route('/').get((req, res) => {
  hobbyController.getAll(req, res);
});
router.route('/getHobbyCalendar').get((req, res) => {
  hobbyController.getHobbyCalendar(req, res);
});

//POST Routes
// router.route('/create', hobbyController.create);
// router.route('/updateCalendar', hobbyController.updateCalendar);

router.route('/create').post((req, res) => {
  hobbyController.create(req, res);
});
router.route('/updateCalendar').post((req, res) => {
  hobbyController.updateCalendar(req, res);
});

export default router;
