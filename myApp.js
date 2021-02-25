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

///
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, match) => {
    if (err) return console.log(err);
    console.log(match);
    match.favoriteFoods.push(foodToAdd);
    console.log(match);
    match.save((err, updatePerson) => {
      if (err) return console.log(err)
      done(null, updatePerson)
    });
  })
};
///

///
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, personUpdated) => {
    if (err) console.log(err)
    console.log(personUpdated)
    done(null, personUpdated)
  })

};
///

///
const removeById = (personId, done) => {
  Person.findOneAndRemove({_id: personId}, (err, personDeleted) => {
    if (err) return console.error(err)
    done(null, personDeleted)
  })
};
///

//
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, peopleDeleted) => {
    if (err) return console.log(err);
    done(null, peopleDeleted);
  })
};
///

///
const queryChain = (done) => {
  const foodToSearch = "burrito";
  var findQueryByFood = Person.find({favoriteFoods: foodToSearch});
  //console.log(findQueryByFood)
  findQueryByFood.sort({name: 1})
  findQueryByFood.limit(2);
  findQueryByFood.select({age: 0})
  findQueryByFood.exec((err, data) => {
    if (err) return console.error(erro);
    console.log(data)
  })
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
