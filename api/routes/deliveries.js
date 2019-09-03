const express = require('express');
const router = express.Router();
const DeliveryController = require('../controllers/delivery-controller')

router.post('/', DeliveryController.store);
router.get('/', DeliveryController.show);
router.get('/:id', DeliveryController.showById);
router.patch('/:id', DeliveryController.update);

module.exports = router;
