// console.log('hello');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const Sequelize = require('sequelize');
const {sequelize} = require('./models')
const app = express();
const config = require('./config/config')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)
// app.listen(config.port)

sequelize.sync()
  .then(() => {
	app.listen(config.port)
	console.log(`server started`)
})


