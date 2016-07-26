const express = require('express');
const router = express.Router();

const Person = require('../models/Person');
const thinky = require('../utils/thinky');
const Errors = thinky.Errors;

/* GET home page. */
router.get('/people', (req, res) => {
  Person.run().then((persons) => {
    res.json(persons);
  });
});

router.post('/people', (req, res) => {
  const newPerson = new Person({
    name: req.body.name
  });

  newPerson.save().then((result) => {
    res.json(result);
  });
});

router.post('/people/:id/attendance', (req, res, next) => {
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

});



module.exports = router;
