const express = require('express');
const router = express.Router();

const employeeCtrl = require('../controllers/user');

router.post('/signup', employeeCtrl.signup);
router.post('/login', employeeCtrl.login);

module.exports = router;