const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8080
const path = require("path")
require("dotenv").config()


// MIDDLEWARE>>>>>>>>>>>>>>>

app.use(express.json())
app.use("/classifiedItems", require('./routes/itemsRouter'))
app.use(express.static(path.join(__dirname, "client", "build")))



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/storedb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Connected to the DB`))
    .catch((err) => console.log(err))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
    


app.listen(PORT, () => {
    console.log(`V*Trade server is running on port ${PORT}`)
})