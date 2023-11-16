const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://taha:taha123@cluster0.dexovoh.mongodb.net';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
