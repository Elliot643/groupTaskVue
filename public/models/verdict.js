let mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var VerdictSchema = new mongoose.Schema({
  comment: { type: String },
  commenter: { type: String },
  thumbsUp: Boolean,
  pictureId: {type: Number, ref: "picture"},
  verdictId: {type: Number, unique :true}
}, { timestamps: true }); // timestamps is for automatically update of changes (createAt, updateAt)


VerdictSchema.plugin(AutoIncrement, {inc_field: 'verdictId'});



let Verdict = mongoose.model('verdict', VerdictSchema);

module.exports = Verdict;