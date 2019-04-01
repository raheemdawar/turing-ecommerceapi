const express=require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const swaggerDoc=require('./swaggerDoc');

const dotenv = require('dotenv');
dotenv.config();
const app=express();
swaggerDoc(app);
const port=process.env.port|3000;
const endpoints=require('./routes/endpoints');
app.use(compression());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:'+port);
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});


endpoints(app);

// Error handling 
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send('Access denied');
    }
    else {
        next(err);
    }
});

app.listen(port,()=>{

console.log('app started at ',port);
})