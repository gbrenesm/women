const express = require('express');
const router = express.Router();

const { addWoman,
        seeAllWomen,
        seeWomanDetails,
        updateWoman,
        deleteWoman } = require('../controllers/woman');

// C
router.post('/add', addWoman)

// R
router.get('/', seeAllWomen)
router.get('/:womanId', seeWomanDetails)

// U
router.put('/update/:womanId', updateWoman)

// D
router.delete('/:womanId', deleteWoman)

module.exports = router;