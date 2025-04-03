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
    } catch (e) {
      console.log(e);
    }
  };


//for creating the user



//for deleting user


//for Updating the user


//for fetching individual user



export { getAllUsers, updateUser, deleteUser, getUser, createUser };

//saare controllers mein logic likhne k baad routes mein jaate hain execute karne k liye 