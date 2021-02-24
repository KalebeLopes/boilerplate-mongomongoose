require('dotenv').config();
mongoose = require('mongoose');

const personSchema = require('./schema/person.js');
const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}); // conectando com o banco

///
var Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  var kalebe = new Person({
    name: 'kalebe',
    age: 21,
    favoriteFoods: ['lasanha']
  });

  kalebe.save(function(err, data){
    if (err) return console.error(err);
    done(null, data)
  })
};
///

///
var arrayOfPeople = [
  {
    name: 'lucas',
    age: 22,
    favoriteFoods: ['hamburger']
  },
  {
    name: 'pedro',
    age: 30,
    favoriteFoods: ['pizza']
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if(err) return console.error(err);
    done(null, people);
  });
};
/// 

///
let personName = {
  name: 'kalebe'
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, matches) => {
    if (err) return console.error(err);
    console.log(matches);
    done(null, matches);
  })
  
};
///

///
var food = 'hamburger';

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, match) => {
    if (err) return console.error(err);
    console.log(match);
    done(null, match);
  })
};
///

///
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, match) => {
    if (err) return console.error(err)
    console.log(match)
    done(null, match);
  })
};
///

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
