const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
/* connect vs database */
dotenv.config();
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection success'))
    .catch((err) => console.log(err));
/* connect vs database */
app.listen(9999, () => {
    console.log('Backend server is running !!!');
});
