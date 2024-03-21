// controllers/coordinateController.js
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Coordinate = require("../models/coordinate");

// Retrieve all coordinates
exports.coordinate_list_get = asyncHandler(async (req, res, next) => {
	const allCoordinates = await Coordinate.find().exec();
	return res.json(Object.values(allCoordinates));
});

// Retrieve a specific coordinate
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

// Create a new coordinate
exports.coordinate_create_post = asyncHandler(async (req, res, next) => {
	// Extract data from request body
	const { name, x, y } = req.body;

	// Create a new coordinate instance
	const newCoordinate = new Coordinate({ name, x, y });

	// Save the new coordinate to the database
	try {
		const savedCoordinate = await newCoordinate.save();
		res.status(201).json(savedCoordinate);
	} catch (error) {
		console.error("Error creating coordinate:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});
