const express = require('express');
const router = express.Router();


const inters = require('./inters');
const tutors = require('./tutors');

router.use('/inters', inters);
router.use('/tutors', tutors);


module.exports = router;