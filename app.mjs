import express from "express"
const port = 3000;
const app = express();
import cors from "cors";
const router = express.Router();
import routes from "./Routes/routes.js"

app.get('/',(req, res)=>{
    res.send('Hello Worldddddd')
})
app.get('/users',(req, res)=>{
    res.send('Hello Another got request is working')
})

app.post('/user', (req,res) => {
    res.send('Got a POST Request')
})

app.listen(port,()=> {
    console.log(`Example app listening on port ${port}`);
})

