

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const images = document.getElementsByClassName('images');

let currentImgIndex = 0;
let previousImgIndex = 0;

next.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex++

    if(currentImgIndex >= images.length) {
        console.log('Too high of an index! Going to reset to 0!')
        currentImgIndex = 0;
    }

    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})

prev.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex--

    if(currentImgIndex < 0) {
        console.log('Too low of an index! Going to reset to 4!')
        currentImgIndex = images.length - 1;
    }

    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})


// DOM for Footer Icons
document.getElementById('linkicon').onclick = function() {
  window.open("https://www.linkedin.com/in/heejung-hong/");
};

document.getElementById('giticon').onclick = function() {
  window.open("https://github.com/heejung1180");
};