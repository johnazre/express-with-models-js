const User = require('../models/User')

exports.getAllUsers = () => User.findAll()
exports.getOneUser = id => User.findOne(id)
exports.addOneUser = user => User.addOne(user)
exports.updateOneUser = user => User.updateOne(user)
exports.removeOneUser = id => User.removeUser(id)
