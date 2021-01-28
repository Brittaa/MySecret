const express = require('express');
const secretsController = require('../controllers/secrets');
const submitController = require('../controllers/submit');

const router = express.Router();

router.get('/secrets', secretsController.getSecrets);

router.get('/submit', submitController.getSubmit);
router.post('/submit', submitController.postSubmit);

module.exports = router;