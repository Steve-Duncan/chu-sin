
function loadGallery(medium, images) {
    const arrTest=images.split(',');
    arrTest.sort((a, b) => a.localeCompare(b, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))
    console.log('images: ' + arrTest)


    var imageThumbs = document.getElementById("image-thumbs");
    // create array to hold images
    const arrImages=[];
    // images import as comma-delimited list; load temp array with images
    const arrTmp=images.split(',');
    // console.log(arrTmp)
    for(const image of arrTmp) {
        let img = image.substr(-5, 1)
        if (img!=='s'){
            // only get image names for source images, not thumbs 
            // strip off the file extension so we can sort
            // and add the image names for 
            arrImages.push(image.slice(0, -4));
        }
    }
    console.log('before sort: ' + arrImages)

    
    // now sort the array numerically
    arrImages.sort((a, b) => a - b);
    console.log('sorted: ' + arrImages)
    for(const image of arrImages) {
        // create page elements
        var thumb = document.createElement("img");
        var a = document.createElement("a");
        // add s to filename and build path for thumb image
        thumb.src = "./images/gallery/" + medium + "/" + image + "s.jpg";
        // build path for image source
        a.href = "./images/gallery/" + medium + "/" + image + ".jpg";
        // add a link with image src to page
        imageThumbs.appendChild(a);
        // add attribute so lightbox can manipulate the image
        a.setAttribute("data-lightbox", image);
        // add class to thumb element
        thumb.classList.add("thumb");
        // add thumb element to page
        a.appendChild(thumb);
    
    }
}
