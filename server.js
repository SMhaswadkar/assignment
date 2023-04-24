const config = require('./config.json');
require('./connection');

const express = require('express');
const app = express(); // creates an app. it is top level function exported by express

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', ( req, res ) => {
    res.status(200).send('Connected');
})

const router = require('./Routes/routes');
app.use('/users', router);

app.listen(config.port, config.host,  (error) => {
    if( error ) { console.log( "Error", error ); }
    else { console.log( `Express is now running at ${config.host} : on port ${config.port}`)}
});