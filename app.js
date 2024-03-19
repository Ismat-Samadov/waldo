var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoDb = process.env.MONGODB_URL;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
const cors = require("cors");
const corsOptions = {
	origin: "*",
	credentials: true, 
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use(function (req, res, next) {next(createError(404));});
app.use(function (err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};
	res.status(err.status || 500);
	res.render("error");
});
module.exports = app;
