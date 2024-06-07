// Get the container element
var btnContainer = document.getElementById("topnav1");

// Get all buttons with class="btnnav" inside the container
var btns = btnContainer.getElementsByClassName("btnnav");

// Add event listener for all buttons
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        // Remove active class from all buttons
        for (var j = 0; j < btns.length; j++) {
            btns[j].classList.remove("active");
        }

        // Add active class to the clicked button
        this.classList.add("active");

        // Store the href of the active button in localStorage
        localStorage.setItem("activeNav", this.href);
    });
}

// On page load, check localStorage and set the active class based on the current URL
document.addEventListener("DOMContentLoaded", function () {
    var activeNav = localStorage.getItem("activeNav");
    var currentUrl = window.location.href;

    if (activeNav) {
        for (var i = 0; i < btns.length; i++) {
            // Check if the current button's href matches the stored href or current URL
            if (btns[i].href === activeNav || btns[i].href === currentUrl) {
                btns[i].classList.add("active");
            } else {
                btns[i].classList.remove("active");
            }
        }
    } else {
        // If no activeNav is stored, set active based on the current URL
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].href === currentUrl) {
                btns[i].classList.add("active");
            }
        }
    }
});
