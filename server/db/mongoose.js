const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://Shubanshii:Baylorprser2011@ds133360.mlab.com:33360/node-todo-api' || 'mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});

module.exports = {mongoose};
