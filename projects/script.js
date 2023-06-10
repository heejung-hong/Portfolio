

// let theParent = document.querySelector("#theDude");
// theParent.addEventListener("mouseover", doSomething, false);
// function doSomething(e) {
//   if (e.target !== e.currentTarget) {
//     let clickedItem = e.target.id;
//     alert("Hello" + clickedItem)
//   }
//   e.stopPropagation();
// }

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
  window.open("https://github.com/heejung1180");
};

