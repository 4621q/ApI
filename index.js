// console.log("hello world")
// const http = require

import express from "express";
import cors from "cors";
import Cars from "./Cars.js";
import Dogs from "./Dogs.js"; 
import Hotels from "./Hotels.js"

const port = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const allProducts=[...Cars,...Dogs,...Hotels];
app.get("/", (req, res) => {
  res.send(allProducts);
});

app.get("/Cars", (req, res) => {
  res.json({
    success: true,
    category: "car",
    data: Cars,
  });
});

app.get("/Dogs", (req, res) => {
  res.json({
    success: true,
    category: "dog",
    data: Dogs,
  });
});


app.get("/Hotels", (req, res) => {
  res.json({
    success: true,
    category: "hotel",
    data: Hotels,
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});