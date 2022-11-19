const express = require("express");
const app = express()
const universitiesRoute = require('./routes/universityRoutes')
const dbconfig = require('./db')

app.use('/api/universities', universitiesRoute)
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Node server Started`));