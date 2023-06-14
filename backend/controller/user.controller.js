const User = require("../models/user.model");

// create a new User 
const createUsers = async (request, response) => {
    const { username, mobile, email, address, profilepic } = request.body;

    // searching for existing users in database
    const findUser = await User.findOne({ email });
    try {
        if (!findUser) {
            // create a new user
            const newUser = new User({
                username,
                mobile,
                email,
                address,
                profilepic
            })

            const saveUser = await newUser.save();
            response.status(201).json(saveUser);
        }
        else {
            // user already exists
            response.status(500).json({ message: 'User Already Exists' })
        }

    } catch (error) {
       
        response.status(500).json({ message: 'Failed to create user or username already exists' })
    }
}

// getting all users
const getAllUsers = async (request, response) => {
    try {
        const user = await User.find();
        response.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get users' });

    }
}

// getting a specific user
const getOneUser = async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findById(id);
        if (user) {
            response.status(200).json(user);
        }
        else {
            response.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to get user' });
    }
}


// updating a specific user
const updateUser = async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findByIdAndUpdate(
            id,
            request.body,
            { new: true }
        );
        if (user) {
            response.status(201).json(user);
        }
        else {
            response.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to update user' });
    }
}

// deleting a specific user
const deleteUser = async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (user) {
            response.json({ message: 'User deleted' });
        } else {
            response.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        response.status(400).json({ message: 'Failed to delete user' });
    }
}


module.exports = { createUsers, getAllUsers, getOneUser, updateUser, deleteUser }