const { Schema, model } = require('mongoose')

const womanSchema = new Schema(
  {
    name: String,
    birthDay: Date,
    dateOfDeath: Date,
    age: Number,
    note: String,
    persoalRecord: {
      type: Schema.Types.ObjectId,
      ref: 'Personal'
    },
    record: [{
      type: Schema.Types.ObjectId,
      ref: 'Record',
    }],
    eventsDay: Date,
    place: String,
    who: String,
    what: String,
    description: String,
  },
  {
    versionKey: false
  }
)

module.exports = model ('Woman', womanSchema)