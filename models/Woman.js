const { Schema, model } = require('mongoose')

const womanSchema = new Schema(
  {
    name: String,
    age: Number,
    note: String,
    data: {
      type: Schema.Types.ObjectId,
      ref: 'Data'
    }
  },
  {
    versionKey: false
  }
)

module.exports = model ('Woman', womanSchema)