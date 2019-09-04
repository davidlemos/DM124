const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth')
const DeliveryController = require('../controllers/delivery-controller')

router.post('/', checkAuth, DeliveryController.store);
router.get('/', DeliveryController.show);
router.get('/:id', DeliveryController.showById);
router.patch('/:id', checkAuth, DeliveryController.update);
router.delete('/:id', checkAuth, DeliveryController.delete);

module.exports = router;
