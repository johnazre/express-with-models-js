let { users } = require('../db')

class User {
  constructor(name, company, email, phone, address) {
    this.name = name
    this.company = company
    this.email = email
    this.phone = phone
    this.address = address
  }

  static findAll() {
    return users
  }

  static findOne(id) {
    return users.find(user => user.id == id)
  }

  static addOne(newUser) {
    const { name, company, email, phone, address } = newUser
    return new User(name, company, email, phone, address)
  }

  static updateOne(selectedUser) {
    users = users.map(user => {
      if (user.id == user.id) {
        return selectedUser
      } else {
        return user
      }
    })
    // Shorthand of above
    // users = users.map(user => user.id == user.id ? selectedUser : user)
    return users.find(user => user.id == selectedUser.id)
  }

  static removeUser(id) {
    const removedUser = users.filter(user => user.id == id)
    users = users.filter(user => user.id != id)
    return removedUser
  }
}

module.exports = User
