// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
//const router = require('./controllers/places');
const methodOverride = require("method-override");

// Express Settings
app.set("views", __dirname + "/views");
app.engine("jsx", require("express-react-views").createEngine());
app.set("view engine", "jsx");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//app.use('/places', router)

// Controllers & Routes
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

// Listen for Connections
app.listen(process.env.PORT);

module.exports = app;
