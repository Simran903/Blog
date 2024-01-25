const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

const db_url = "mongodb+srv://<username>:<password>@cluster0.qjfafn9.mongodb.net/?retryWrites=true&w=majority"

// Connection to database
mongoose.connect(db_url)
.then(() => console.log('connected to db'))
.catch((error) => console.log(error))

// Server
app.use(express.json())
app.use(cors())

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})
