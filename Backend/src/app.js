const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const router = require('./routes/index.js');

//settings
app.set('port', process.env.PORT || 8080);
mongoose.connect(process.env.MONGO_STRING,
{useNewUrlParser:true}
);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/', router);

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});