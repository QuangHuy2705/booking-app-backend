const db = require('../models/index')

exports.addOrder = function(req, res, next) {
    const { order } = req.body
    console.log(`here`)
    if (!order) {
        return next({
            status: 400,
            message: 'Bad Request'
        })
    } else {
        const orderListRef = db.collection('orders').add({
            ...order,
            delivered: false
        }).then(ref => {
            return res.status(200).json({ message: 'added!' })
        })

    }
}

exports.updateOrder = function(req, res, next) {
    const { orderId } = req.params
    const orderRef = db.collection('orders').doc(`${orderId}`)
    const updatedStatus = orderRef.update({ delivered: true }).then(ref => res.status(200).json({ message: 'updated!' }))
}
