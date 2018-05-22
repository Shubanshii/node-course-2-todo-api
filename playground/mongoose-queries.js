const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// let id = '5b048b55b1cdfc015829649511';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // use when you know you're just looking for one doc
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


if (!ObjectID.isValid('5b019d22f5805312407098a4')) {
  console.log('ID not valid');
}

User.findById('5b019d22f5805312407098a4').then((user) => {
  if(!user) {
    return console.log('User not found.');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
