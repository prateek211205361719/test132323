


/*const keys = require('../config/key');
const stripe = require('stripe')(keys.stripeSecretKey);
var { isUserLogin }  = require('../middlewares/requirelogin');
module.exports = (app) => {

    /app.post('/api/stripe', isUserLogin, async (req, res) =>{
        console.log(req.body);
        const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: req.body.id, // obtained with Stripe.js
            description: "$5 for 5 email"
        });
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
        console.log(charge);
    });
}
*;