const express = require("express");

var cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const multer = require("multer");
const path = require("path");
const Profile = require("./api/module/profile");
const profile = new Profile();



app.use(cors())

app.use('/uplouds', express.static('uplouds'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('des',file)
    cb(null, path.normalize("uplouds"));
  },
  filename: function (req, file, cb) {
    console.log('filename',file)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ExtFile(file.mimetype));
  },
});

const ExtFile = (mimetype) => {
  switch (mimetype) {
    case "image/png":
      return ".png";
      break;
    case "image/jpeg":
      return ".jpeg";
      break;
  }
  return;
};
const upload = multer({ storage: storage });

app.get("/", (req, res) => {

  res.status(200).send("hello we are good");
});

app.get("/profile", (req, res) => {
  res.status(200).send(profile.get());
});
app.get("/profile/:user_id", (req, res) => {
  res.status(200).send(test);
});

app.post(
  "/api/profile",
  upload.single("avatar"),
  (req, res) => {
    res.status(201).send("ok");

    const newProfile = {
      id: Date.now(),
      firstName: req.body.first,
      middleName: req.body.middle,
      lastName: req.body.last,
      DOB: req.body.dob,
      joint: Date.now(),
      avatar: req.file.path.replace(/\\/g, "/"),
    };
    profile.addData(newProfile);
    console.log("newprofile", req.file,req.body);
  }
);
app.listen(port, () => console.log("http://localhost:" + port));
