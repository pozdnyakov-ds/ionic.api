const express = require('express');
const deviceController = require('../../controllers/deviceController');

const router = express.Router();

router.get('/:deviceId', deviceController.getDevice);
router.post('/', deviceController.registerDevice);

module.exports = router;
