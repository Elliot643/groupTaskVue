var crypto = require('crypto');
let mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var UserSchema = new mongoose.Schema({
  username: { type: String, required: [true, "can't be blank"], unique: true },
  userId: {type: Number, unique :true},
  profilePic: String,
  pictureIds: { type: Array, ref: "picture" },
  hash: String,
  salt: String
}, { timestamps: true }); // timestamps is for automatically update of changes (createAt, updateAt)

UserSchema.plugin(AutoIncrement, {inc_field: 'userId'});

UserSchema.methods.setPassword = function (password) {
  // creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex')

  // hashing user's salt and password with 1000 iterations,  64 length and sha512 digest
  this.hash = crypto.pbkdf2Sync(password, this.salt,
    1000, 64, `sha512`).toString(`hex`)
}

UserSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password,
    this.salt, 1000, 64, `sha512`).toString(`hex`)
  return this.hash === hash
}

let User = mongoose.model('users', UserSchema)

module.exports = User