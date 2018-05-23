const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://Shubanshii:Baylorprser2011@ds133360.mlab.com:33360/node-todo-api';

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});

module.exports = {mongoose};
