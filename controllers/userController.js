const router = require('express').Router()
const {
  getAllUsers,
  getOneUser,
  addOneUser,
  updateOneUser,
  removeOneUser
} = require('../services/userService')

router.get('/', (req, res) => {
  res.json(getAllUsers())
})

router.get('/:id', function(req, res) {
  res.json(getOneUser(req.params.id))
})

router.post('/', function(req, res) {
  res.json(addOneUser(req.body))
})

router.patch('/:id', function(req, res) {
  res.json(updateOneUser(req.body))
})

router.delete('/:id', function(req, res) {
  res.json(removeOneUser(req.params.id))
})

module.exports = router
