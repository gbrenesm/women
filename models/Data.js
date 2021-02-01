const { Schema, model } = require('mongoose');

const dataSchema = new Schema(
  {
    woman: {
      type: Schema.Types.ObjectId,
      ref: 'Woman',
      required: true},
    record: [{
      type: Schema.Types.ObjectId,
      ref: 'Record',
      required: true
    }],
    eventsDay: String,
    place: String,
    who: String,
    what: String,
    why: String,
    note: String
  }
)

module.exports = model ('Data', dataSchema)