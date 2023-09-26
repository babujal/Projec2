const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = Schema({
  user: {type: String, unique: true, required: true, lowercase: true},
  password: {type: String, required: true, minLength: 6}
})

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})


const User = mongoose.model('user', userSchema)

module.exports = User
