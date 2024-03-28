
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://sweetyjharbade999:JEe25hmQ2MvHo26C@kratikadb.darqdux.mongodb.net/empDatas?retryWrites=true&w=majority&appName=kratikadb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


db.once('open', function() {
  console.log('Connected to MongoDB database');
});


app.use('/', routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
