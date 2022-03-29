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


// Social list
var socialList = document.querySelectorAll('.social-list > li');
socialList.forEach(function(item) {
    console.log(item);
    item.onclick = (e) => {
        e.stopPropagation();
        if (!item.classList.contains('up')) {
            var upElement = document.querySelector('.up');
            if (!!upElement) {
                upElement.classList.remove('up');
            }
            e.preventDefault();
            item.classList.add('up');
        }
    }
});

document.querySelector('body').onclick = () => {
    var upElement = document.querySelector('.up');
    if (!!upElement) {
        upElement.classList.remove('up');
    }
}