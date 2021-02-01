const Woman = require('../models/Woman');

// C
exports.addWoman = async (req, res) => {
  const { name, age, note } = req.body
  const woman = await Woman.create({
    name,
    age,
    note
  })
  res.status(201).json(woman)
}

// R
exports.seeAllWomen = async (req, res) => {
  const women = await Woman.find()
  res.status(200).json({ women })
}

exports.seeWomanDetails = async (req, res) => {
  const woman = await Woman.findById(req.params.womanId)
  res.status(200).json(woman)
}

// U
exports.updateWoman = async (req, res) => {
  const { name, age, note } = req.body
  await Woman.findByIdAndUpdate(req.params.womanId, {
    name,
    age,
    note }, { new: true })
  res.status(200).json('Woman record updated successfully')
}

// D
exports.deleteWoman = async (req, res) => {
  await Woman.findByIdAndDelete(req.params.womanId)
  res.status(200).json('Woman record deleted successfully')
}