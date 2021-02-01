const Data = require('../models/Data');
const Woman = require('../models/Woman');

// C
exports.addData = async (req, res) => {
  const { eventsDay, place, who, what, why, note } = req.body
  const data = await Data.create({
    woman: req.params.womanId,
    eventsDay,
    place,
    who,
    what,
    why,
    note
  })
  await Woman.findByIdAndUpdate(req.params.womanId, { data: data._id })
  res.status(201).json({ data })
}

// R
exports.seeAllData = async (req, res) => {
  const datas = await Data.find()
  res.status(200).json({ datas })
}

exports.seeDataDetail = async (req, res) => {
  const data = await Data.findById(req.params.dataId)
    .populate('Woman')
    .populate('Record')
  res.status(200).json({ data })
}

// U
exports.updateData = async (req, res) => {
  const { eventsDay, place, who, what, why, note } = req.body
  await Data.findByIdAndUpdate(req.params.dataId, {
    eventsDay,
    place,
    who,
    what,
    why,
    note }, { new: true }
    )
  res.status(200).json('Data updated successfully')
}

// D
exports.deleteData = async (req, res) => {
  await Data.findByIdAndDelete(req.params.dataId)
  res.status(200).json('Data deleted successfully')
}