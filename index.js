import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World Home Page");
});

app.get("/twitter",(req,res)=>{
   res.send("<h1>Twitter Page</h1>");
})

app.get("/login",(req,res)=>{
   res.send("<h1>Login Page</h1>");
})

app.get("/aslamdsa",(req,res)=>{
   res.send("<h1 style='color:red;text-align:center'>Aslam DSA Page</h1>");
})
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
