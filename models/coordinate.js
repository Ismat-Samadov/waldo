// models/coordinate.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coordinateSchema = new Schema({
	name: { type: String, required: true },
	x: { type: Number, required: true },
	y: { type: Number, required: true },
});
module.exports = mongoose.model("coordinate", coordinateSchema);
