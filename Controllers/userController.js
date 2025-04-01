import userSchema from "../Schema/userSchema";
import { nanoid } from "nanoid";

//in controller we write all the logic about all the functions like get users and creating, updating, deleting and then we export all of these to import them in the route file to write the requests.

//making temporary empty array
let users = [];

//for fetching the users

const getAllUsers = (req, res) => {
  console.log("arhe ha req");
  try {
    res.send(users);
  } 
  catch (e) {
    console.log(e);
  }
};


//for creating the user

const createUser = async (req, res) => {
  try {
    const value = await userSchema.validateAsync(req.body);

    let user = { ...req.body, id: nanoid() };
    users.push(user);

    res.status(201).json("user created successfully");
    console.log(value);
  } 
  catch (error) {
    res.status(500).json({
      error: error?.details,
    });
  }
};


//for deleting user

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    let index = users.findIndex((user) => user.id == id);
    users.splice(index, 1);

    res.send({
      deletedId: id,
      message: "user deleted successfully",
    });
  } 
  catch (error) {
    console.log(error);
  }
};


//for Updating the user

const updateUser = (req, res) => {
  try {
    const { id } = req.params;

    let index = users.findIndex((user) => user.id == id);
    users.splice(index, 1, { ...req.body, id: id });

    res.send({
      updatedUser: id,
      message: "user updated successfully",
    });
  } 
  catch (error) {
    console.log(error);
  }
};

//for fetching individual user

const getUser = (req, res) => {
  try {
    const { id } = req.params;
    let foundUser = users.find((obj) => obj.id == id);

    res.send({
      user: foundUser,
      message: "user found successfully",
    });
  } 
  catch (error) {
    console.log(error);
  }
};

export { getAllUsers, updateUser, deleteUser, getUser, createUser };

//saare controllers mein logic likhne k baad routes mein jaate hain execute karne k liye 