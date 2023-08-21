
// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }


// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


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

