const path = require('path');

// define stylesheet so we can specify which partial to add to layout,
// and which stylesheet to apply to the partial
let styles = {
    topicsPage: "styles-topics",
    topicDetailsPage: "styles-topic-details",
};

// controller to build and display topics page; info from JSON file in each archive year directory
exports.getTopics = (req,res,next)=> {
    console.log("url: " + req.url);
    let year;
    if(req.url==="/") {
        year = "2024"
    } else {
    // get url from params 
    year = req.url;
    }
    // build path to JSON file for selected year in archive
    let jsonFile = '../views/partials/topics/' + year + "/topics.json";
    
    // get data from JSON file
    let JSONdata = require(jsonFile);
    // send data to topics page
    res.render('layout', {
        page: 'partials/topics',
        style: styles.topicsPage,
        data: JSONdata
    });
}

// controller to render topics details page
exports.getTopicDetail = (req,res)=> {
    // get year for topics;
    let year = req.params.year;
    // get details page name
    let pageName = req.params.page;
    // build path to images for selected year
    let imgPath = '/images/topics/'+ year + '/';
    // build path to details page for selected year
    let page = 'partials/topics/'+ year + '/details/' + pageName;

    // send data to topics page
    res.render('layout', {
        page: page,
        style: styles.topicDetailsPage,
        imgPath: imgPath
    });
}

