import express from 'express'
import { addOrder, updateOrder } from '../handlers/orders.js'

const router = express.Router({ mergeParams: true })

router.route('/').post(addOrder)

router.route('/:orderId').put(updateOrder)

export default router