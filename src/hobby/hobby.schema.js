import mongoose from 'mongoose';

const hobbySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  calendar: [
    {
      date: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true,
        enum: ['checked', 'crossed', 'zero']
      }
    }
  ]
});

const HobbyModel = mongoose.model('Hobby', hobbySchema);

export default HobbyModel;
