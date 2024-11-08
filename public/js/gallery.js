
function loadGallery(medium, images) {

    console.log(images);
    // images import as comma-delimited list
    // create array from images
    const arrImages = images.split(',');
    // console.log(arrImages);
    // and sort array in natural order to match filename order in directory
    arrImages.sort((a, b) => a.localeCompare(b, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}));
    // reverse the array order so images display newest (highest numbered) images first
    arrImages.reverse();
    
    // get div on page to load thumbnail images
    var imageThumbs = document.getElementById("image-thumbs");
    // loop through elements in array
    for(const image of arrImages) {
        // create page elements
        var thumb = document.createElement("img");
        var a = document.createElement("a");
        // skip elements with s in filename; 
        if(!image.includes("s")) {
            // build path for image source
            a.href = "./images/gallery/" + medium + "/" + image;
            // add attribute so lightbox can manipulate the image
            a.setAttribute("data-lightbox", image);
            // add a link with image src to page
            imageThumbs.appendChild(a);
            // build path for thumbnail source
            thumb.src = "./images/gallery/" + medium + "/" + image.slice(0,-4) + "s.jpg";
            thumb.classList.add("thumb");
            // add thumb element to page
            a.appendChild(thumb);
        }
    }
}

