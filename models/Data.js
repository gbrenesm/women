const { Schema, model } = require('mongoose');

const dataSchema = new Schema(
  {
    woman: {
      type: Schema.Types.ObjectId,
      ref: 'Woman',
      required: true},
    index: [{
      type: Schema.Types.ObjectId,
      ref: 'Index',
      required: true
    }],
    eventsDay: String,
    place: String,
    who: String,
    why: String,
    note: String
  }
)

module.exports = model ('Data', dataSchema)