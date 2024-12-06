const express = require('express');
const topics = express.Router();
const topicsController = require('../controllers/topicsController');


// GET topics page
topics.get("/:year",topicsController.getTopics);
// GET topics detail page
topics.get("/:year/details/:page",topicsController.getTopicDetail);

module.exports = topics;