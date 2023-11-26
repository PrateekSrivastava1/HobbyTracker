import HobbyRepository from './hobby.repository.js';

export default class HobbyController {
  constructor() {
    this.hobbyRepository = new HobbyRepository();
  }

  async create(req, res, next) {
    try {
      console.log('controller: ', req.body.hobbyName);
      const newHobby = await this.hobbyRepository.add(req.body.hobbyName);
      if (newHobby.success) {
        const allHobbies = await this.hobbyRepository.getAll();
        res.render('hobbyList', { hobbies: allHobbies });
      }
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong in Controller.');
    }
  }

  async updateCalendar(req, res, next) {
    try {
      const { updatedStatuses } = req.body;
      const { _id, calendar } = updatedStatuses;
      console.log('updatedStatuses: ', updatedStatuses);

      const hobby = await this.hobbyRepository.update(_id, calendar);
      if (hobby.success) {
        res.render('hobbyCalendar', { hobbies: hobby.hobby ? hobby.hobby : [] });
      }
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong in Controller.');
    }
  }

  async getAll(req, res, next) {
    try {
      const allHobbies = await this.hobbyRepository.getAll();
      res.render('hobbyList', { hobbies: allHobbies });
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong in Controller.');
    }
  }

  async getHobbyCalendar(req, res) {
    try {
      const hobbyId = req.query.hobbyId;
      const hobby = await this.hobbyRepository.fetchHobbyCalendar(hobbyId);
      if (hobby.success) {
        res.render('hobbyCalendar', {
          hobbies: hobby.hobby
        });
      } else {
        res.render('hobbyCalendar', {
          hobbies: []
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }
}
