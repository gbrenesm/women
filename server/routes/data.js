const express = require('express');
const router = express.Router();

const { addData,
        seeAllData,
        seeDataDetail,
        updateData,
        deleteData } = require('../controllers/data');

// C
router.post('/add/:womanId', addData)

// R
router.get('/', seeAllData)
router.get('/:dataId', seeDataDetail)

// U
router.put('/update/:dataId', updateData)

// D
router.delete('/:dataId', deleteData)

module.exports = router;