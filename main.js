//=================popup model============
var model = document.getElementById("hidden-content");
var revealBtn = document.getElementById("reveal-content");
var closeBtn = document.getElementById("close");


revealBtn.onclick = function() {
    model.style.display = "block";
}

closeBtn.onclick = function() {
    model.style.display = "none";
}

//============click anywhere close window=========

window.onclick = function(event) {
    if (event.target == model) {
        model.style.display = "none";
    }
}

//========================scroll animation============

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('js-animated-view');
        } else {
            entry.target.classList.remove('js-animated-view');
        }
    });
});


const hiddenElements = document.querySelectorAll('.js-animated');
hiddenElements.forEach((el) => observer.observe(el));