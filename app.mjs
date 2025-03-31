import express from "express";
const app = express();
import cors from "cors";
const router = express.Router();
import userRoutes from "./routes/userRoutes.js";

//using cors
app.use(cors());

//use body parser
app.use(express.json());

//loading the routes 
app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("server is listening ");
});

