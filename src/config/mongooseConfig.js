import mongoose from 'mongoose';

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/habitTracker', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected using Mongoose.');
  } catch (err) {
    console.log(err);
    console.log('Error while connecting to Database.');
  }
};
