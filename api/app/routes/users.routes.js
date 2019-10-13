const express = require('express');
const controller = require('../controllers/users.controller');

const router = new express.Router();

router.route('/users').get(controller.getUsers);

module.exports = router;
