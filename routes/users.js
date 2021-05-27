const express = require('express');
const router = express.Router();
const usersHandler = require('./handler/users');

/* GET users listing. */
router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.put('/:id', usersHandler.edit);
router.get('/', usersHandler.getAll);
router.get('/:id', usersHandler.get);
// router.delete('/:id', usersHandler.destroy);

module.exports = router;
