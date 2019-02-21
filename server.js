require( 'dotenv' ).config();

var helmet = require( 'helmet' );
var express = require( 'express' );
var app = express();

var bodyParser = require( 'body-parser' );

app.use( helmet() );
app.use( express.static( 'dist' ) );

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

app.post( '/test', ( req, res ) => {

    console.log( 'received request' );
    console.log( req.body );

    res.send( 'sup baby' );
});

var port = process.env.PORT || 3000;

app.listen( port, () => {

    console.log( 'Server running on port: *' + port );
});