// Import the necessary modules here

import HobbyModel from '../models/hobbySchema.js';

const hobbyModel = new HobbyModel();

export default class hobbyController {
  index = (req, res) => {
    const allHobbies = hobbyModel.getAllHobbies();
    res.render('hobbyList', { hobbies: allHobbies });
  };

  search = (req, res) => {
    const searchQuery = req.body.name;
    const allHobbies = hobbyModel.getAllHobbies();

    let searchResults = allHobbies.filter(hobby =>
      hobby?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    res.render('searchResults', { hobbies: searchResults });
  };

  create = (req, res) => {
    let allHobbies = hobbyModel.getAllHobbies();
    allHobbies.push({
      id: allHobbies.length + 1,
      name: req.body.hobbyName,
      calendar: []
    });
    res.render('hobbyList', { hobbies: allHobbies });
  };

  getHobbyCalendar = (req, res) => {
    const hobbyId = req.query.hobbyId;
    let allHobbies = hobbyModel.getAllHobbies();
    const hobby = allHobbies.find(hobby => hobby.id == hobbyId);
    res.render('hobbyCalendar', { hobbies: hobby ? hobby : [] });
  };

  updateCalendar = (req, res) => {
    const allHobbies = hobbyModel.getAllHobbies();
    const { updatedStatuses } = req.body;
    const { id, calendar } = updatedStatuses;
    const hobbyIndex = allHobbies.findIndex(hobby => hobby.id == id);
    if (hobbyIndex) {
      allHobbies[hobbyIndex].calendar = calendar;
    }
    res.render('hobbyCalendar', { hobbies: updatedStatuses ? updatedStatuses : [] });
  };
}
