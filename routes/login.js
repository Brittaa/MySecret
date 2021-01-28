const express = require('express');
const loginController = require('../controllers/login');
const router = express.Router();

router.get('/login', loginController.getLoginPage);
router.post('/login', loginController.logUserIn);
router.get('/logout', loginController.logUserOut);

module.exports = router;