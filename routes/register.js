const express = require('express');
const registerController = require('../controllers/register');
const router = express.Router();

router.get('/register', registerController.getRegisterPage);
router.post('/register', registerController.postRegisterUser);

module.exports = router;