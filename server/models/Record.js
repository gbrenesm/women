const { Schema, model } = require('mongoose');

const recordSchema = new Schema(
  {
    name: { 
      type: String,
      required: true},
    newspaper: {
      type: String,
      required: true},
    publicationDate: {
      type: Date,
      required: true},
    page: String,
    publicationPlace: String,
    transcription: String,
    file: String,
    url: String
  },
  {
    versionKey: false
  }
)

module.exports = model ('Record', recordSchema)