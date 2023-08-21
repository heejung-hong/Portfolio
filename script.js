
// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }


// Carousel
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


// Resume PDF link
document.getElementById('respdf').onclick = function() {
    let pdf = document.createElement('IFRAME')
    pdf.setAttribute('src', 'ResumePrivate.pdf') 
    document.body.appendChild(pdf).style.width = '65%'
    document.body.appendChild(pdf).style.height = '750px'
};
  
  
// Projects hover to change color
let elements = document.getElementsByClassName('myElement');

for (let i = 0; i < elements.length; i++) {
elements[i].onmouseover = function() {
    console.log(elements[i])
    elements[i].style.background = 'lavender';
}
elements[i].onmouseout = function() {
    console.log(elements[i])
    elements[i].style.background = 'none';
}
}


// DOM for Footer Icons
document.getElementById('linkicon').onclick = function() {
    window.open("https://www.linkedin.com/in/heejung-hong/");
};

document.getElementById('giticon').onclick = function() {
    window.open("https://github.com/heejung-hong/");
};

