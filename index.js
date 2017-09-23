
var express = require("express");
var keys = require('./server/config/key');
const bodyParser = require('body-parser');
var port  = process.env.PORT || 4000;
var authRoute = require('./server/route/auth'); 
var billing = require('./server/route/billing'); 
var cookieSession = require('cookie-session');
var mongoose = require("mongoose");
mongoose.connect(keys.mongoDbURI);
var passport = require("passport");
var app = express();
require('./server/services/passport');

app.use(bodyParser.json());
app.use(cookieSession({
    // stripe: Sanu211205@
    keys: ['23222233224444454565yththrhethrhr','efqttw4t4wsefejegrigrwiwgrwgr'],
    maxAge:30*24*60*60*10000
}));

app.use(passport.initialize());
app.use(passport.session());


//setting route for google auth
authRoute(app);
//billing(app);

if(process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

app.listen(port, function(){
    console.log('----------running------');
});