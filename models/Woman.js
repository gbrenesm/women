const { Schema, model } = require('mongoose')

const womanSchema = new Schema(
  {
    name: String,
    age: Number,
    note: String
  }
)

module.exports = model ('Woman', womanSchema)