import database from '../models/index'

export function addOrder(req, res, next) {
    const { order } = req.body
    console.log(`here`)
    if (!order) {
        return next({
            status: 400,
            message: 'Bad Request'
        })
    } else {
        const orderListRef = database.collection('orders').add({
            ...order,
            delivered: false
        }).then(ref => {
            return res.status(200).json({ message: 'added!' })
        })

    }
}

export function updateOrder(req, res, next) {
    const { orderId } = req.params
    const orderRef = database.collection('orders').doc(`${orderId}`)
    const updatedStatus = orderRef.update({ delivered: true }).then(ref => res.status(200).json({ message: 'updated!' }))
}