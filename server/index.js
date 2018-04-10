const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./api/user');
const employee = require('./api/employee');
//const login = require('./api/login');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const auth = (req, res, next) => {
//     req.challenge = req.get('Authorization');
//
//     req.authenticated = req.authentication === 'secret';
//
//     if (req.authenticated) {
//         req.authentication = { user: 'admin' };
//     } else {
//         req.authentication = { error: 'INVALID_API_KEY' };
//     }
//
//     next();
// };

app.use("/api/user", user);

app.use('/api/employee', employee);

//app.use('/api/login', login);


app.listen(3030, '0.0.0.0', () => {

        console.log('He is alive');
        mongoose.connect('mongodb://fastfix:fastfix@ds036967.mlab.com:36967/fastfix');


});
