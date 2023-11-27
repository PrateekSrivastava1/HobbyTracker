import express from 'express';
import HobbyController from './hobby.controller.js';

const router = express.Router();

const hobbyController = new HobbyController();

// GET Routes
router.route('/').get((req, res) => {
  hobbyController.getHomePage(req, res);
});
router.route('/getHobbyCalendar').get((req, res) => {
  hobbyController.getHobbyCalendar(req, res);
});
router.route('/getStarted').get((req, res) => {
  hobbyController.getAll(req, res);
});
router.route('/createHobbyPage').get((req, res) => {
  hobbyController.getCreateHobbyPage(req, res);
});

//POST Routes
router.route('/create').post((req, res) => {
  hobbyController.create(req, res);
});
router.route('/updateCalendar').post((req, res) => {
  hobbyController.updateCalendar(req, res);
});

export default router;
