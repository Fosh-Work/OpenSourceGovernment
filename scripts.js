/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*HW6Part2 */

/*carosel script */
var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;

function rotateCarousel() {
    var angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function () {
    selectedIndex--;
    rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function () {
    selectedIndex++;
    rotateCarousel();
});


/*Robot Name Functions */
function checkRobot() {
    var elName = document.getElementById('feedback');
    if (this.value.length < 5) {
        elName.textContent = "The Robot's Name must be 5 characters long!";
    } else {
        elName.textContent = "";
    }
}

var elUsername = document.getElementById('rname');
// When it loses focus call checkRobot()
elUsername.addEventListener('blur', checkRobot, false);


/*Model Name Functions */
function checkModel() {
    var elMName = document.getElementById('feedback1');
    if (this.value !== "Gundam") {
        elMName.textContent = "The robot's model is not correct.";
    } else {
        elMName.textContent = "";
    }
}

var elModelname = document.getElementById('modelType');
// When it loses focus call checkRobot()
elModelname.addEventListener('blur', checkModel, false);

function setup() {
    var textinput;
    textinput = document.getElementById('rname');
    textinput.focus();
}

window.addEventListener('load', setup, false);

/*flip cards */
var card = document.querySelector('.card');
card.addEventListener('click',
        function () {
            card.classList.toggle('is-flipped');
        });

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("jf-show") === -1) {
        x.className += " jf-show";
        x.previousElementSibling.className += " jf-theme-d1";
    } else {
        x.className = x.className.replace("jf-show", "");
        x.previousElementSibling.className =
                x.previousElementSibling.className.replace(" jf-theme-d1", "");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("jf-show") === -1) {
        x.className += " jf-show";
    } else {
        x.className = x.className.replace(" jf-show", "");
    }
}

/* Name Functions */
function checkName() {
    var elName = document.getElementById('feedback');
    if (this.value.length < 5) {
        elName.textContent = "UserName must be 5 characters long!";
    } else {
        elName.textContent = "";
    }
}

var elUsername = document.getElementById('uname');
// When it loses focus call checkName()
elUsername.addEventListener('blur', checkName, false);

function goBack() {
    window.history.back();
}



