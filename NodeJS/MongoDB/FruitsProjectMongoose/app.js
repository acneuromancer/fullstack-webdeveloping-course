// jshint esversion: 6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fruitsDB', {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"]
  },
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);
const Fruit = mongoose.model("Fruit", fruitSchema);


function addOneElement() {
  const person = new Person({
    name: "John",
    age: 37
  });

  person.save();

  const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as fruit."
  });

  fruit.save();
}


function addManyElements() {
  const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit!"
  });

  const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Too sour for me"
  });

  const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Weird texture"
  });

  Fruit.insertMany([kiwi, orange, banana], function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully saved all the fruits to fruitsDB");
    }
  });
}


function deleteOneElement() {
  Fruit.deleteOne({ name: "Orange" }, function(err) {
    if(err) {
      console.log(err)
    } else {
      console.log("Successfully deleted the document");
    }
  });
}


function printCollections() {
  Fruit.find(function(err, fruits) {
    if (err) {
      console.log(err);
    } else {
      mongoose.connection.close();
      fruits.forEach(function(fruit) {
        console.log(fruit);
      });
    }
  });

  Person.find(function(err, people) {
    if (err) {
      console.log(err);
    } else {
      people.forEach(function(person) {
        console.log(person);
      });
      mongoose.connection.close();
    }
  });
}


function updateOneElement() {
  const watermelon = new Fruit({
    name: "Watermelon",
    rating: 8,
    review: "Excellent, I can't have enough from it."
  });
  watermelon.save();

  Person.updateOne({name: "John"}, {favouriteFruit: watermelon}, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated the document");
    }
  });
}


function addRelatedElements() {
  const pineApple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
  });
  pineApple.save();

  const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineApple
  });
  person.save();
}


// addOneElement();
// addManyElements();
// deleteOneElement();
// updateOneElement();
// addRelatedElements();
printCollections();
