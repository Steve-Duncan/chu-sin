var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');

// define which function in controller will handle request

/* GET home page. */
router.get("/", controller.getHomePage);

/* GET profile page. */
router.get("/profile",controller.getProfilePage);

// GET classes page
router.get("/classes",controller.getClassesPage);

// GET topics page
router.get("/topics",controller.getTopics);

router.get("/topics/:year/details/:page",controller.getTopicDetail);


// GET gallery page
router.get("/gallery",controller.getGalleryPage);
router.get("/:medium",controller.getGalleryPage);

module.exports = router;
