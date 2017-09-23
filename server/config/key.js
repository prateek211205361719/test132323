

if(process.env.NODE_ENV === 'production'){
   module.exports = require('./prod');
    //we are in production
}else{
    module.exports = require('./dev');
}