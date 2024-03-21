const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Coordinate = require("../models/coordinate");
exports.coordinate_list_get = asyncHandler(async (req, res, next) => {
	const allCoordinate = await Coordinate.find().exec();
	return res.json(Object.values(allCoordinate));
});
exports.coordinate_get = asyncHandler(async (req, res, next) => {
	const coordinateCharacter = await Coordinate.findOne({
		name: req.params.name,
	}).exec();
	let isCoordinateClose = false;
	const range = 3;
	if (
		req.params.x <= coordinateCharacter.x + range &&
		req.params.x >= coordinateCharacter.x - range &&
		coordinateCharacter.y + range >= req.params.y &&
		req.params.y >= coordinateCharacter.y - range
	)
		isCoordinateClose = true;

	return res.send(isCoordinateClose);
});