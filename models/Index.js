const { Schema, model } = require('mongoose');

const indexSchema = new Schema(
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
    publicationPlace: String,
    translation: String
  }
)

module.exports = model ('Index', indexSchema)