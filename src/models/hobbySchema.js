export default class HobbyModel {
  hobbies = [
    {
      id: 1,
      name: 'Shopping',
      calendar: [
        { date: '2023-11-01', status: 'checked' },
        { date: '2023-11-02', status: 'crossed' },
        { date: '2023-11-04', status: 'checked' }
      ]
    },
    {
      id: 2,
      name: 'breaking',
      calendar: [
        { date: '2023-11-19', status: 'crossed' },
        { date: '2023-11-20', status: 'crossed' },
        { date: '2023-11-21', status: 'crossed' }
      ]
    }
  ];

  getAllHobbies = () => {
    return this.hobbies;
  };
}
// import mongoose from 'mongoose';

// const hobbySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   calendar: [
//     {
//       date: {
//         type: String,
//         required: true
//       },
//       status: {
//         type: String,
//         required: true,
//         enum: ['checked', 'crossed', 'zero']
//       }
//     }
//   ]
// });

// const HobbyModel = mongoose.model('Hobby', hobbySchema);

// export default HobbyModel;
