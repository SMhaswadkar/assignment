const mongoose = require('mongoose');

const config = require('./config.json');

const url = config.url
            .replace("{{dbuser}}", config.dbuser)
            .replace("{{dbpass}}", config.dbpass)
            .replace("{{clusterName}}", config.clusterName)
            .replace("{{dbname}}", config.dbname)
            .replace("{{dbstring}}", config.dbstring);

mongoose.connect(url)
.then( res => console.log( 'Db connected' ))
.catch( error => console.log( 'Error', error ) );