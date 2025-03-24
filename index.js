import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;
const fruits = 
    [
        {"name": "Apple", "color": "Red", "averageWeight": 150},
        {"name": "Banana", "color": "Yellow", "averageWeight": 120},
        {"name": "Orange", "color": "Orange", "averageWeight": 130},
        {"name": "Grapes", "color": "Green", "averageWeight": 5},
        {"name": "Mango", "color": "Yellow", "averageWeight": 200},
        {"name": "Strawberry", "color": "Red", "averageWeight": 15},
        {"name": "Watermelon", "color": "Green", "averageWeight": 5000},
        {"name": "Pineapple", "color": "Brown", "averageWeight": 2000},
        {"name": "Kiwi", "color": "Brown", "averageWeight": 75},
        {"name": "Blueberry", "color": "Blue", "averageWeight": 1},
        {"name": "Papaya", "color": "Yellow", "averageWeight": 1200},
        {"name": "Peach", "color": "Pink", "averageWeight": 150},
        {"name": "Pear", "color": "Green", "averageWeight": 180},
        {"name": "Cherry", "color": "Red", "averageWeight": 8},
        {"name": "Lemon", "color": "Yellow", "averageWeight": 100},
        {"name": "Coconut", "color": "Brown", "averageWeight": 1500},
        {"name": "Guava", "color": "Green", "averageWeight": 250},
        {"name": "Dragon Fruit", "color": "Pink", "averageWeight": 600},
        {"name": "Lychee", "color": "Red", "averageWeight": 20},
        {"name": "Pomegranate", "color": "Red", "averageWeight": 300}
      ]


app.get("/", (req, res) => {
  res.send("Hello World Home Page");
});

app.get("/twitter",(req,res)=>{
   res.send("<h1>Twitter Page</h1>");
})

app.get("/login",(req,res)=>{
   res.send("<h1 style='color:green; font-family:sans-serif;'>Login Page</h1>");
})

app.get("/aslamdsa",(req,res)=>{
   res.send("<h1 style='color:red;text-align:center'>Aslam DSA Page</h1>");
})

app.get("/fruitsdata",(rq,res)=>{
    res.json(fruits);
})
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
