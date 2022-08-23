const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('../api/routes/auth');
const userRoute = require('../api/routes/users');

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
app.use(express.json());
/* Viết api cho từng chức năng */
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

////
app.listen(9999, () => {
    console.log('Backend server is running !!!');
});
