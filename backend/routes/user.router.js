const express = require('express');
const { createUsers, getAllUsers, getOneUser, updateUser, deleteUser } = require('../controller/user.controller');
const validator = require('../middleware/validation.middleware');

const usersRouter = express.Router();

usersRouter.post("/create", validator, createUsers);
usersRouter.get("/get", getAllUsers);
usersRouter.get("/get/:id", getOneUser);
usersRouter.put("/update/:id", updateUser);
usersRouter.delete("/delete/:id", deleteUser)


module.exports = usersRouter;