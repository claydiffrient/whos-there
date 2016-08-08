const thinky = require('../utils/thinky');

const { type } = thinky;

const Person = thinky.createModel('Person', {
  id: type.string(),
  name: type.string(),
  attendance: type.array().schema(type.date()).default([]),
  lastAttended: type.virtual().default(function () {
    return this.attendance[this.attendance.length - 1];
  })
});

module.exports = Person;
