const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()
app.use(bodyParser.text())
app.use(cors())
app.post('/result4/', (req, res) => {
    const xTest = req?.headers?.['x-test']
    const xBody = req?.body
    res.json({ message: 'id71293382', "x-result": xTest, "x-body": xBody })
})
app.get('/result4/', (req, res) => {
    const xTest = req?.headers?.['x-test']
    const xBody = 'abc'
    res.json({ message: 'id71293382', "x-result": xTest, "x-body": xBody })
})
app.listen(PORT, () => console.log(`App is listening on ${PORT}`))
