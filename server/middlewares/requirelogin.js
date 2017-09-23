

var isUserLogin = (req, res, next) => {
    if(!req.user){
        res.status(401).send({error: 'You must login'});
    }
    next();

}

module.exports = {
    isUserLogin
};