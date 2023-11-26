import { ObjectId } from 'mongodb';
import HobbyModel from './hobby.schema.js';

export default class HobbyRepository {
  async add(hobbyName) {
    try {
      const newHobby = new HobbyModel({
        name: hobbyName,
        calendar: []
      });
      const savedHobby = await newHobby.save();
      if (savedHobby) {
        return { success: true, msg: 'Hobby added successfully.', hobby: savedHobby };
      } else {
        return { success: false, msg: 'Hobby addition failed.' };
      }
    } catch (err) {
      console.error(err);
      throw new Error('Error in saving hobby.');
    }
  }

  async update(id, calendar) {
    try {
      let hobby = await HobbyModel.findById(id);
      if (hobby) {
        hobby.calendar = calendar; // Update the calendar property in memory
        const updatedHobby = await hobby.save(); // Save the modified hobby back to the database
        return { success: true, msg: 'Hobby updated successfully.', hobby: updatedHobby };
      } else {
        return { success: false, msg: 'Hobby not found.' };
      }
    } catch (err) {
      console.error(err);
      throw new Error('Error in updating hobby.');
    }
  }

  async getAll() {
    try {
      const allHobbies = await HobbyModel.find();
      return allHobbies;
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong in Repository.');
    }
  }

  async fetchHobbyCalendar(hobbyId) {
    try {
      const hobby = await HobbyModel.findById(hobbyId);
      if (hobby) {
        return { success: true, msg: 'Fetched Hobby successfully.', hobby };
      } else {
        return { success: false, msg: 'Hobby not found.' };
      }
    } catch (err) {
      throw new Error('Something went wrong in Repository.');
    }
  }
}
