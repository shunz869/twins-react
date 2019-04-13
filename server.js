const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./DB');
const BowelRouter = require('./routes/bowelRouter')
const KniveRouter = require('./routes/knivesRouter')
const CupRouter = require('./routes/cupRouter')


mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database' +err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/bowels', BowelRouter);
app.use('/knives', KniveRouter);
app.use('/cups', CupRouter);


app.listen(4000, function(){
  console.log('Server is running on Port:4000 ');
});
