const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const multer = require("multer");

const config = require("config");

const app = express();

const uploadImage = multer({
  storage: multer.diskStorage({
    destination: "images",
    filename(req, fileName, cb) {
      console.log(fileName);
      cb(null, Date.now() + fileName.originalname);
    },
  }),
});

/**
 * TODO
 *  1.CRUD Branch
 *  2.CRUD Car
 *  3.CRUD Station
 *  4.CRUD Trip
 *  5.signup, signin, token, validate token, logout, logout all
 *  6.Booking Ticket
 *  7.Upload file
 *  9.Send email
 *  8.Chat module
 *
 */

app.use(bodyParser.json());
app.post("/upload", uploadImage.array("files", 12), async (req, res) => {
  console.log(req.files);
  res.send("asdsd");
});

mongoose
  .connect(config.get("dbConfig.url"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("mongodb atlas connected!!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening.....");
});
