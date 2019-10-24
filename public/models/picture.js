let mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var PictureSchema = new mongoose.Schema({
  picture: { type: String },
  userId: { type: String},
  caption: String,
  pictureId: {type: Number, unique :true},
}, { timestamps: true }); // timestamps is for automatically update of changes (createAt, updateAt)


PictureSchema.plugin(AutoIncrement, {inc_field: 'pictureId'});



let Picture = mongoose.model('picture', PictureSchema);

module.exports = Picture;