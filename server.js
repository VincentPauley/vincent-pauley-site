require( 'dotenv' ).config();

var helmet = require( 'helmet' );
var express = require( 'express' );
var app = express();

app.use( helmet() );
app.use( express.static( 'public' ) );

var port = process.env.DEV_PORT || 3000;

console.log( process.env.NODE_ENV );

app.listen( port, () => {

    console.log( 'Server running on port: *' + port );
});