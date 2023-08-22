
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
// document.getElementById('respdf').onclick = function() {
//     let pdf = document.createElement('IFRAME')
//     pdf.setAttribute('src', 'ResumePrivate.pdf') 
//     document.body.appendChild(pdf).style.width = '65%'
//     document.body.appendChild(pdf).style.height = '750px'
// };
  

// DOM for Project
document.getElementById('beauty').onclick = function() {
  window.open("https://beauty-organizer-078af2d08df4.herokuapp.com/");
};

document.getElementById('javabook').onclick = function() {
  window.open("https://java-book-a57dc0cae3ed.herokuapp.com/");
};

document.getElementById('bookguide').onclick = function() {
  window.open("https://book-guide-32207e9c7f37.herokuapp.com/");
};


// DOM for Footer Icons
document.getElementById('linkicon').onclick = function() {
    window.open("https://www.linkedin.com/in/heejung-hong/");
};

document.getElementById('giticon').onclick = function() {
    window.open("https://github.com/heejung-hong/");
};

