var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText){
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail){
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
    return thumbnail.getAttribute('data-image-title');
}
function ThumbImgSelector(){
    return document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
}
function switchImage(){
    var images = ThumbImgSelector();
    // var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    // var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    images.forEach(function (image){
        image.addEventListener('click', function (event){
            event.preventDefault();
            // detailImage.setAttribute('src',imageFromThumb(image));
            // detailTitle.textContent = titleFromThumb(image);
            setDetails(imageFromThumb(image),titleFromThumb(image));

    });
    });


}
function randomFirstImage(){
    var imgArr = [].slice.call(ThumbImgSelector(THUMBNAIL_LINK_SELECTOR));
    var rand = imgArr[Math.floor(Math.random() * imgArr.length)];
    // var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    // var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    // detailImage.setAttribute('src',imageFromThumb(rand));
    // detailTitle.textContent = titleFromThumb(rand);
    setDetails(imageFromThumb(rand),titleFromThumb(rand));
    
}
switchImage();
randomFirstImage();