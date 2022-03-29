 var checkBox = document.getElementById('menu__checkbox')
 // Modal
var modal = document.querySelector('.modal'),
closeBtn = document.querySelector('.modal-close'),
openBtns = document.querySelectorAll('.js-buy-btn');

for (var index = 0; index < openBtns.length; index++) {
    openBtns[index].onclick = function () {
        modal.classList.add('js-show-modal')
    }
};

closeBtn.onclick = function () {
    modal.classList.remove('js-show-modal')
};
// End Modal

// Scroll
document.getElementById("to-home").onclick = function () {
    document.getElementById("slider").scrollIntoView({behavior: "smooth"});
    checkBox.checked = false;
};

document.getElementById("to-band").onclick = function () {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
    checkBox.checked = false;
};

document.getElementById("to-tour").onclick = function () {
    document.getElementById("tour").scrollIntoView({behavior: "smooth"});
    checkBox.checked = false;
};

document.getElementById("to-contact").onclick = function () {
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
    checkBox.checked = false;
};
// End Scroll   

// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}


// Icons
var icons = document.querySelectorAll('footer .social-list li')

var iconsLength = icons.length

icons[0].addEventListener('click', function() {
    setTimeout(function() {
        document.querySelector('footer .social-list li a').href="https://www.facebook.com/profile.php?id=100025214232244"
    }, 500)
})

for (let currentIndex = 0; currentIndex < iconsLength; currentIndex++) {
    icons[currentIndex].addEventListener('click', addClass)
}

document.querySelector('body').addEventListener('mouseup', removeClass)

function addClass() {
    this.classList.add("up")
}


var a = document.getElementById('to-facebook')
function removeClass() {
    if (icons[0].contains(a)) {
        a.removeAttribute("href");
    }

    for (var currentElement of icons) {
        if (currentElement.classList.contains("up")) {
            currentElement.classList.remove("up");
            break;
        }
    }
}


