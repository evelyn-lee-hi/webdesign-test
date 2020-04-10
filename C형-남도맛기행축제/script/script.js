// JavaScript Document
window.addEventListener("load", function () {
    var modal = document.getElementById("modal");
    document.querySelector(".td_popup").addEventListener("click", function () {
        modal.style.display = "block";
    });
    document.querySelector(".btn").addEventListener("click", function () {
        modal.style.display = "none";
    });

    var wrap = document.querySelector(".wrap");
    window.setInterval(function () {
        wrap.style.left = "-800px";
        wrap.style.transition = "300ms";
        window.setTimeout(function () {
            wrap.removeAttribute("style");
            wrap.appendChild(wrap.firstElementChild);
        }, 300);
    }, 3000);

    var menubtn = document.querySelectorAll(".nav > ul > li");
    for (var i = 0; i < menubtn.length; i++) {
        menubtn[i].addEventListener("mouseenter", function () {
            this.lastElementChild.style.display = "block";
        });
        menubtn[i].addEventListener("mouseleave", function () {
            this.lastElementChild.style.display = "none";
        });
    }
}); //window.onload
