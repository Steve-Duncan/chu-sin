const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const routerTopics = express.Router();
const topicsController = require('../controllers/topicsController.js');

// define which function in controller will handle request

/* GET home page. */
router.get("/", controller.getHomePage);

/* GET profile page. */
router.get("/profile",controller.getProfilePage);

// GET classes page
router.get("/classes",controller.getClassesPage);

// GET course flow page
router.get("/course_flow",controller.getCourseFlowPage);

// GET gallery page
router.get("/:medium",controller.getGalleryPage);

// GET topics page
router.get("/topics",topicsController.getTopics);






module.exports = router;
