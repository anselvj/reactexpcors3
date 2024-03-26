const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/route');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOption =  {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOption));
app.use('/',router);

app.use((req, res, next) => {
    // Middleware logic
    next(); // Call next to pass control to the next middleware or route handler
});

const PORT = 4000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});