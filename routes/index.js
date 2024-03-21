// routes/index.js
const express = require("express");
const router = express.Router();
const coordinate_controller = require("../controllers/coordinateController");
const user_controller = require("../controllers/userController");

// Existing routes
router.get("/coordinates", coordinate_controller.coordinate_list_get);
router.get("/coordinates/:name&:x&:y", coordinate_controller.coordinate_get);
router.get("/users", user_controller.user_list_get);
router.post("/users", user_controller.user_post);
router.post("/users/:id", user_controller.user_put);

// New route for creating coordinates
router.post("/coordinates", coordinate_controller.coordinate_create_post);

module.exports = router;
