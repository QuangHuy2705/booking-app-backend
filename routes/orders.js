const express = require('express')
const { addOrder, updateOrder } = require('../handlers/orders.js')

const router = express.Router({ mergeParams: true })

router.route('/').post(addOrder)

router.route('/:orderId').put(updateOrder)

module.exports = router