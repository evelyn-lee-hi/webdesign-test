window.addEventListener("load", function () {
    var menuEnter = document.querySelectorAll(".nav > ul > li > a");
    var menuLeave = document.querySelectorAll(".nav > ul > li");
    var sub = document.querySelectorAll(".sub");

    for (var i = 0; i < menuEnter.length; i++) {
        menuEnter[i].addEventListener("mouseenter", function () {
            for (var i = 0; i < sub.length; i++) {
                sub[i].style.opacity = "1";
            }
        }); // menu.mouseenter

        menuLeave[i].addEventListener("mouseleave", function () {
            for (var i = 0; i < sub.length; i++) {
                sub[i].style.opacity = "0";
            }
        });
    }

    var wrap = document.querySelector(".wrap");
    window.setInterval(function () {
        wrap.style.top = "-300px";
        wrap.style.transition = "300ms";
        window.setTimeout(function () {
            wrap.removeAttribute("style");
            wrap.appendChild(wrap.firstElementChild);
        }, 300);
    }, 2500);

    var td_popup = document.querySelector(".td_popup");
    var popup = document.getElementById("container");
    var btn = document.querySelector(".popup > button");
    td_popup.addEventListener("click", function () {
        popup.style.display = "block";
    });
    btn.addEventListener("click", function () {
        popup.style.display = "none";
    });
}); //document.onload
