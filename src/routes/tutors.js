const express = require('express');
const router = express.Router();

const { 
    addTutor, 
    deleteTutor, 
    getTutor, 
    getTutors, 
    updateTutor
} = require('../services/tutors');

router.get('/tutors', getTutors);
router.get('/tutor', getTutor);
router.post('/add', addTutor);
router.delete('/delete/:id', deleteTutor);
router.patch('/update/:id', updateTutor);

module.exports = router;