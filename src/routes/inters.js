 const express = require('express');
const router = express.Router();

const { 
    getInters,
    updateInter,
    deletedInter,
    register,
    getInter
} = require('../services/inters');

router.get('/inters', getInters);
router.post('/inter', getInter);
router.post('/register', register);
router.patch('/update/:id', updateInter);
router.delete('/delete/:id', deletedInter);

module.exports = router;