const express = require('express')
const itemRouter = express.Router()
const uuid = require('uuid/v4')
const Items = require('../models/items')


itemRouter.get('/', (req, res) => {
    Items.find((err, items) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(items)
    })
})

// Posting
itemRouter.post('/', (req, res) => {
    req.body._id = uuid()
    const newItem = new Items(req.body)
    newItem.save((err, item) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(item)
    })
})

//Get One
itemRouter.get('/:_id', (req, res) => {
    const foundItem = Items.findById(req.params._id, (err, item) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(200).send(item)
    })
})

//Delete
itemRouter.delete('/:_id', (req, res) => {
    Items.findOneAndRemove({ _id: req.params._id }, (err, item) => {
        if (err) {
            res.status(500).send(err)
        }
        const response = {
            message: "Item successfully deleted",
            id: item._id
        }
        return res.status(200).send(response)
    })
})

//Put Edit
itemRouter.put("/:_id", (req, res) => {
    Items.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updatedItem) => {
            if (err) {
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = itemRouter