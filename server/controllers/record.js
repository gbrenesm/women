const Record = require('../models/Record');
const Woman = require('../models/Woman')

// C
exports.addRecord = async (req, res) => {
  const { name, newspaper, publicationDate, page, publicationPlace, translation, file, url } = req.body
  const record = await Record.create({
    name,
    newspaper,
    publicationDate,
    page,
    publicationPlace,
    translation,
    file,
    url
  })
  await Woman.findByIdAndUpdate(req.params.womanId, { $push: { record: record._id }}, { new: true })
  res.status(201).json(record)
}

// R
exports.seeAllRecords = async (req, res) => {
  const records = await Record.find()
  res.status(200).json({ records })
}

exports.seeRecordDetails = async (req, res) => {
  const record = await Record.findById(req.params.recordId)
  res.status(200).json(record)
}

// U
exports.updateRecord = async (req, res) => {
  const { name, newspaper, publicationDate, page, publicationPlace, translation, file, url } = req.body
  await Record.findByIdAndUpdate(req.params.recordId, {
    name,
    newspaper,
    publicationDate,
    page,
    publicationPlace,
    translation,
    file,
    url
  }, { new: true })
  res.status(200).json('Record updated successfully')
}

// D
exports.deleteRecord = async (req, res) => {
  const record = await Record.findByIdAndDelete(req.params.recordId)
  await Woman.findByIdAndUpdate(req.body.dataId, { $pull: { record: record._id}})
  res.status(200).json('Record deleted successfully')
}