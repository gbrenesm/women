const Record = require('../models/Record');
const Data = require('../models/Data')

// C
exports.addRecord = async (req, res) => {
  const { name, newspaper, publicationDate, publicationPlace, translation, file, url } = req.body
  const record = await Record.create({
    name,
    newspaper,
    publicationDate,
    publicationPlace,
    translation,
    file,
    url
  })
  await Data.findByIdAndUpdate(req.params.dataId, { $push: { record: record._id }}, { new: true })
  res.status(201).json({ record })
}

// R
exports.seeAllRecords = async (req, res) => {
  const records = await Record.find()
  res.status(200).json({ records })
}

exports.seeRecordDetails = async (req, res) => {
  const record = await Record.findById(req.params.recordId)
  res.status(200).json({ record })
}

// U
exports.updateRecord = async (req, res) => {
  const { name, newspaper, publicationDate, publicationPlace, translation, file, url } = req.body
  await Record.findByIdAndUpdate(req.params.recordId, {
    name,
    newspaper,
    publicationDate,
    publicationPlace,
    translation,
    file,
    url
  }, { new: true })
  res.status(200).json('Record updated successfully')
}

// D
exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.recordId)
  res.status(200).json('Record deleted successfully')
}