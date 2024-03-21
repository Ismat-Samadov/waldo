// routes/index.js
var express = require("express");
var router = express.Router();
const coordinate_controller = require("../controllers/coordinateController");
const user_controller = require("../controllers/userController");

router.get("/coordinates", coordinate_controller.coordinate_list_get);
router.get("/coordinates/:name&:x&:y", coordinate_controller.coordinate_get);

router.get("/user", user_controller.user_list_get);
router.post("/user", user_controller.user_post);
router.post("/user/:id", user_controller.user_put);

module.exports = router;    