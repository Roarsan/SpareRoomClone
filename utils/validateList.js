const ExpressError = require('./ExpressError');
const listSchema = require('../schemas/schema');  


module.exports = (req, res, next) => {
    const {error} = listSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(', ');
        throw new ExpressError(400, msg);
    }
    else{
        next();
    }

};
