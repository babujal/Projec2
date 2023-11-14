const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const newUserSchema = Schema({
  username: {type: String, unique: true, required: true, lowercase: true},
  password: {type: String, required: true, minLength: 6}
})

newUserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})


const NewUser = mongoose.model('NewUser', newUserSchema)

module.exports = NewUser
