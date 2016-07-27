const Person = require('../models/Person');
const thinky = require('../utils/thinky');
const Errors = thinky.Errors;

const listAllPeople =  (req, res) => {
  Person.run().then((persons) => {
    res.json(persons);
  });
};

const createPerson = (req, res) => {
  const newPerson = new Person({
    name: req.body.name
  });

  newPerson.save().then((result) => {
    res.json(result);
  });
};

const addAttendanceToPerson = (req, res, next) => {
  Person.get(req.params.id)
        .then((person) => {
          person.attendance.push(req.body.date);
          person.save().then((result) => {
            res.json(result);
          })
        })
        .catch(Errors.DocumentNotFound, (err) => {
          next(err);
        });

};

module.exports = {
  listAllPeople,
  createPerson,
  addAttendanceToPerson
};
