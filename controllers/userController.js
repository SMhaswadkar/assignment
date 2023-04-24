const User = require('../Models/userModel');

const getUser = async ( req, res ) => {    
    try {                        
        const result = await User.findById({_id: req.params.id});
        res.status(200).send({success: true, msg: 'Record fetched Successfully...', data: result});
    } catch (error) {
        console.log( error.message );
        res.status(400).send({success: false, msg: "Something went wrong"});
    }
}

const getAllUsers = async ( req, res ) => {
    try {                
        const result = await User.find();
        res.status(200).send({success: true, msg: 'Record fetched Successfully...', data: result});
    } catch (error) {
        console.log( error.message );
        res.status(400).send({success: false, msg: "Something went wrong"});
    }
}

const addNewUser = async( req, res ) => {    
    try {
        const new_user = new User({
            title: req.body.title,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            power: req.body.power,
            city: req.body.city
        });

        const result = await new_user.save();

        res.status(200).send({success: true, msg: 'Record inserted successfully...', data: result});        
    } catch (error) {
        console.log( error.message );
        res.status(400).send({success: false, msg: "Something went wrong"});
    }
}

const deleteUser = async( req, res ) => {
    try {
        const record_id = req.params.id;
        const result = await User.findByIdAndRemove({_id: record_id});
        res.status(200).send({success: true, msg: 'Record deleted successfully...', data: result});        
    } catch (error) {
        console.log( error.message );
        res.status(400).send({success: false, msg: "Something went wrong"});
    }
}

const updateUser = async( req, res ) => {
    try {        
        const record_id = req.params.id;

        const result = await User.findByIdAndUpdate({_id: record_id},{"$set":{firstname: req.body.firstname, lastname: req.body.lastname, title: req.body.title, power: req.body.power, city: req.body.city}});

        res.status(200).send({success: true, msg: 'Record deleted successfully...', data: result});        
        
    } catch (error) {
        console.log( error.message );
        res.status(400).send({success: false, msg: "Something went wrong"});
    }
}

module.exports = {    
    addNewUser,
    deleteUser,
    updateUser,
    getUser,
    getAllUsers
}