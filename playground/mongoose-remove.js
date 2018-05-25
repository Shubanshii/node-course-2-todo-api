const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose2');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => console.log(result));

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5b074942466780e1401e3afd').then((todo) => {
  console.log(todo);
});
