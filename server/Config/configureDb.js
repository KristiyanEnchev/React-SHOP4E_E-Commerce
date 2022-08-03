<<<<<<< HEAD
import mongoose from 'mongoose';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectDb = (dbConnection) => {
  try {
    mongoose.connect(dbConnection, options);
    mongoose.connection.on('connected', (err, res) => {
      console.log('mongoose is connected');
    });
    console.log('*** >>> Database is connected <<< ***');
  } catch (error) {
    console.error(
      '!!! >>> Database is not connected <<< !!!\nError:',
      error.message
    );
  }
};
=======
import mongoose from 'mongoose';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectDb = (dbConnection) => {
  try {
    mongoose.connect(dbConnection, options);
    mongoose.connection.on('connected', (err, res) => {
      console.log('mongoose is connected');
    });
    console.log('*** >>> Database is connected <<< ***');
  } catch (error) {
    console.error(
      '!!! >>> Database is not connected <<< !!!\nError:',
      error.message
    );
  }
};
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
