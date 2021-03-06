var express = require('express'),
    config = require('./config/database'),
    middleware = require('./config/middleware'),
    mongoose = require('mongoose'),
    express = require('express'),
    //  { google } = require('googleapis'),
    cors = require('cors'),
    bodyParser = require('body-parser');
// routes
var mainRoute = require('./routes/route');
const fs = require('fs');

const TOKEN_PATH = './config/token.json';
//sect the mongoo connection string from config

mongoose.set('useFindAndModify', false);
mongoose.connect(config.development, (err) => {
    let t = err;
});

var db = mongoose.connection;

// Init App
var app = express();
var server = require("http").Server(app);

app.use(cors())
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.static('files'))
    /*
    app.get('/google/calback', (req, res) => {
        const code = req.locaquery.code;
        const credencials = require('./config/credentials.json');

        const { client_secret, client_id, redirect_uris } = credencials.web;
        const oAuth2Client = new google.auth.OAuth2(
            client_id, client_secret, redirect_uris[0]);

        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.log('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            try {
                fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                    if (err) return console.error(err);
                    console.log('Token stored to', TOKEN_PATH);
                });
            } catch (e) {
                let i = e;
            }

        });
    })*/

app.use('/api/v1/', middleware.checkToken, mainRoute);

app.set('port', (process.env.PORT || 8800));
app.set('address', '0.0.0.0');
server.listen(app.get('port'), app.get('address'), function() {
    console.log('Listinig to ' + app.get('address') + ' port ' + app.get('port'));
});