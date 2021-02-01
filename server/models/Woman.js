const { Schema, model } = require('mongoose')

const womanSchema = new Schema(
  {
    name: String,
    birthDay: Date,
    dateOfDeath: Date,
    age: Number,
    note: String,
    data: {
      type: Schema.Types.ObjectId,
      ref: 'Data'
    },
    personalRecords: [{
      type: Schema.Types.ObjectId,
      ref: 'Personal'
    }]
  },
  {
    versionKey: false
  }
)

module.exports = model ('Woman', womanSchema)