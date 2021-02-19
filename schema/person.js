mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema ({
  name: String,
  age: Number,
  favoriteFoods: [String]
})

module.exports = personSchema