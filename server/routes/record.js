const express = require('express');
const router = express.Router();

const { addRecord,
        seeAllRecords,
        seeRecordDetails,
        updateRecord,
        deleteRecord } = require('../controllers/record');

// C
router.post('/add/:womanId', addRecord)

// R
router.get('/', seeAllRecords)
router.get('/:recordId', seeRecordDetails)

// U
router.put('/update/:recordId', updateRecord)

// D
router.delete('/:recordId', deleteRecord)

module.exports = router;