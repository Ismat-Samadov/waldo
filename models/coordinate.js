// models/coordinate.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coordinateSchema = new Schema({
	name: { type: String, required: true },
	x: { type: Number, required: true },
	y: { type: Number, required: true },
});
module.exports = mongoose.model("coordinate", coordinateSchema);



// curl - X POST \
// https://waldo-4knp.onrender.com/api/coordinates/bulk \
// -H 'Content-Type: application/json' \
// -d '[
// {
// 	"name": "odlaw",
// 		"x": 11,
// 			"y": 37
// },
// {
// 	"name": "wizard",
// 		"x": 27,
// 			"y": 37
// },
// {
// 	"name": "waldo",
// 		"x": 62,
// 			"y": 37
// }
// ]'
