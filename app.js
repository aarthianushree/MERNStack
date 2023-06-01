//OF6jYT7flK4htRNZ

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes.js");
const cors = require("cors");
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books


mongoose
  .connect(
    "mongodb+srv://anushreeig20:Anushree2003 @cluster0.gsy7ba1.mongodb.net/"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err)); //mongodb+srv://<username>:<password>@cluster0.gsy7ba1.mongodb.net/?retryWrites=true&w=majority