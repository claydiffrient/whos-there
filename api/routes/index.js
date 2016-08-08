const express = require('express');
const router = express.Router();
const Handlers = require('./handlers');

router.get('/people', Handlers.listAllPeople);
router.get('/people/recent', Handlers.listRecentAttendees);
router.post('/people', Handlers.createPerson);
router.post('/people/:id/attendance', Handlers.addAttendanceToPerson);

module.exports = router;
