// import required files
const {calendars} = require('./calendars');
const fs = require('fs');
const path = require('path');

// define stylesheet so we can specify which partial to add to layout,
// and which stylesheet to apply to the partial
let styles = {
    homePage: "styles-main",
    profilePage: "styles-profile",
    classPage: "styles-classes",
    topicsPage: "styles-topics",
    topicDetailsPage: "styles-topic-details",
    galleryPage: "styles-gallery"   
};

exports.getHomePage = (req,res)=>{
    // render page with values for content page and styles page
    res.render('layout', {
        page: 'partials/main',
        style: styles.homePage});
}

exports.getProfilePage = (req,res)=>{
    // render page with values for content page and styles page
    res.render('layout', {
        page: 'partials/profile',
        style: styles.profilePage});
}

exports.getClassesPage = (req,res)=>{
    // render page with values for content page and styles page
    res.render('layout', {
        page: 'partials/classes',
        style: styles.classPage,
        calendars: calendars});          
}

exports.getTopics = (req,res)=> {
    res.render('layout', {
        page: 'partials/topics',
        style: styles.topicsPage});

}
// see if I can combine getTopics and getTopicsDetail into single controller
// maybe move all arghive pages under views/partials/archive/year
// and /topics would default to current year
exports.getTopicDetail = (req,res)=> {
    let year = req.params.year;
    let pageName = req.params.page;
    let imgPath = '/images/topics/'+ year + '/';
    let page = 'partials/topics/'+ year + '/details/' + pageName;
    res.render('layout', {
        page: page,
        style: styles.topicDetailsPage,
        imgPath: imgPath
    });
}

exports.getGalleryPage = (req,res)=>{
    // initialize variable to hold medium
    let medium;
    // set default value of medium
    if(typeof req.params.medium==='undefined') {
        medium='fruit'
    } else {
        // or set value of medium to whatever value was passed
        medium=req.params.medium
    };
    // define the image directory
    const imageDirectory  = './public/images/gallery/' + medium ;
    
    // read filenames in image directory
    fs.readdir(imageDirectory, (err, files) => {
        if (err) {
            console.error('Error reading directory:');
            return;
        };
        // render page with values for content page, medium, styles page, and image filenames 
        res.render('layout', {
            page: 'partials/gallery',
            medium: medium,
            style: styles.galleryPage,
            images: files
        });
    });
};



    


