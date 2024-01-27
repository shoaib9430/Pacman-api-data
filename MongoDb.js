const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://shoaibakhtar9430:j2HeTMNfvFOwnDfg@cluster0.gs0gy5r.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(dbURL)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error during connection to the database:', error);
  });

module.exports = mongoose;
