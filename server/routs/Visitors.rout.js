const express = require('express')
const { ObjectID } = require('mongodb')
const router = express.Router()
const VisitorsModel = require('../models/Visitors.model')

router.put('/update-visitor/:id', async (req, res) => {
    await VisitorsModel
        .updateOne({
            _id: ObjectID.createFromHexString(req.params.id),
        }, {
            visits: req.body.visits,
            lastDay: req.body.lastDay,
            lastTime: req.body.lastTime,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if (!docs) {
                res.status(404).send()
            } else {
                res.json(docs)
            }
        })
})


router.post('/new-visitor', async (req, res) => {
    await VisitorsModel
        .create({
            ip: req.body.ip,
            visits: req.body.visits,
            lastDay: req.body.lastDay,
            lastTime: req.body.lastTime,
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if (!docs) {
                res.status(404).send()
            } else {
                res.json(docs)
            }
        })
})

router.get('/look-for-metch/:ip', async (req, res) => {
    await VisitorsModel
        .findOne({
            ip: req.params.ip
        }, (err, docs) => {
            if(err) {
                console.log(err)
                res.status(500).send()
            } else if(!docs) {
                res.send({'message': 'no-metch'})
            } else {
                res.json(docs)
            }
        })
})

module.exports = router