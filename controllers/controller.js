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

exports.getGalleryPage = (req,res,next)=>{
    if(typeof req.params.medium==='undefined') {
        // set default value of medium
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
        
    

}

exports.doNotGetGalleryPage = (req,res,next)=>{

    console.log('In getGalleryPage, url: ' + req.url);
    // initialize variable to hold medium
    let medium;
    // set default value of medium
    if(typeof req.medium==='undefined') {
        medium='fruit'
    } else {
        // or set value of medium to whatever value was passed
        medium=req.params.medium
    };
console.log("medium: " + medium);
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








    


