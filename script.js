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
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// DOM for Project
document.getElementById("commonground").onclick = function () {
  window.open("https://commongroundnotary.com/");
};

document.getElementById("age-calculator").onclick = function () {
  window.open("https://heejung-hong.github.io/age-calculator-app/");
};

document.getElementById("insure-landing").onclick = function () {
  window.open("https://heejung-hong.github.io/insure-landing-page/");
};

document.getElementById("pod-request").onclick = function () {
  window.open("https://heejung-hong.github.io/pod-request-access/");
};

document.getElementById("single-portfolio").onclick = function () {
  window.open("https://heejung-hong.github.io/single-page-design-portfolio/");
};

document.getElementById("fylo").onclick = function () {
  window.open("https://heejung-hong.github.io/fylo-dark-theme/");
};

// DOM for Resume
function openPDF() {
  document.getElementById("resPDF").style.display = "block";
  document.getElementById("resIMG").style.display = "none";
  document.getElementById("openPDF").style.display = "none";
  document.getElementById("closePDF").style.display = "inline";
}

function closePDF() {
  document.getElementById("resPDF").style.display = "none";
  document.getElementById("resIMG").style.display = "block";
  document.getElementById("openPDF").style.display = "inline";
  document.getElementById("closePDF").style.display = "none";
}

// DOM for Footer Icons
document.getElementById("linkedinIcon").onclick = function () {
  window.open("https://www.linkedin.com/in/heejung-hong/");
};

document.getElementById("githubIcon").onclick = function () {
  window.open("https://github.com/heejung-hong/");
};
