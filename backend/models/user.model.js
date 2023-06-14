const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, 'Username is required!'],
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required!'],
        minlength: [10, 'Mobile Number must be 10 digits, got {value}'],
        maxlength: [10, 'Mobile Number must only be 10 digits, got {value}']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, "Email already exists"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, "Email is required"]
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    profilepic: {
        type: String,
        default: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
    }
});

//Export the model
const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;