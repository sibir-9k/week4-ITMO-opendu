const express = require('express')

const app = express()
const port = process.env.PORT || '1337'
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.text())

app.set('port', port)

app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.set('Access-Control-Allow-Headers', 'x-test,Content-Type,Accept,Access-Control-Allow-Headers')
    res.set('Charset', 'UTF-8')
    res.set('Content-Type', 'application/json')
    next()
})


router.all('/result4/', (req, res) => res.json({
    message: ' id71293382',
    'x-result': req.headers['x-test'],
    'x-body': JSON.parse(JSON.stringify(req.body))
}))

app.use(router)
app.listen(port)