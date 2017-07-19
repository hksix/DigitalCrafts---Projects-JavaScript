var images = [
        {href: "img/otter1.jpg" ,
        text:"Stayin' Alive" ,
        alt:"Barry the Otter" },

        {href:"img/otter2.jpg" ,
        text:"How Deep Is Your Love" ,
        alt:"Robin the Otter" },

        {href: "img/otter3.jpg" ,
        text: "You Should Be Dancing" ,
        alt:  "Maurice the Otter" },

        {href: "img/otter4.jpg" ,
        text:"Night Fever" ,
        alt: "Lesley the Otter" },

        {href:"img/otter5.jpg" ,
        text:"To Love Somebody" ,
        alt:"Barbara the Otter" },
    ]
function buildTags() {
    var thumbnailList = document.querySelector('.thumbnail-list');
    images.forEach(function (image){
        //list
        var imageList = document.createElement('li');
        imageList.setAttribute('class', 'thumbnail-item');
        //a tag
        var imageAElement = document.createElement('a');
        imageAElement.setAttribute('href', image.href);
        imageAElement.setAttribute('data-image-role', "trigger");
        imageAElement.setAttribute('data-image-title', image.alt);
        imageAElement.setAttribute('data-image-url',image.href);
        //img
        var imageElement = document.createElement('img');
        imageElement.setAttribute('class', 'thumbnail-image');
        imageElement.setAttribute('src', image.href);
        imageElement.setAttribute('alt', image.alt);
        //span
        var imageSpan = document.createElement('span');
        imageSpan.setAttribute('class', 'thumbnail-title');
        imageSpan.textContent = image.text;
        // button
        // var buttonBox = document.createElement('button');
        // buttonBox.textContent = 'What!!!';
        //append
        thumbnailList.appendChild(imageList);
        imageList.appendChild(imageAElement);
        imageAElement.appendChild(imageElement);
        imageAElement.appendChild(imageSpan);
        // imageAElement.appendChild(buttonBox);

    });
}



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
    var imagez = ThumbImgSelector();
    imagez.forEach(function (image){
        image.addEventListener('click', function (event){
            event.preventDefault();
            setDetails(imageFromThumb(image),titleFromThumb(image));


    });
    });
}
function randomFirstImage(){
    var imgArr = [].slice.call(ThumbImgSelector(THUMBNAIL_LINK_SELECTOR));
    var rand = imgArr[Math.floor(Math.random() * imgArr.length)];
    setDetails(imageFromThumb(rand),titleFromThumb(rand));
    
}

function imgSlid(){
    
   
}

function main(){
buildTags();
switchImage();
randomFirstImage();
titleSlide();
}
main();

var btn = document.querySelector('button');
var thumbnailarr = [].slice.call(document.querySelectorAll("li"));

function toggleEndClass (box) {
  box.classList.toggle('end');
}
btn.addEventListener('click', function () {
  thumbnailarr.forEach(toggleEndClass);
})


