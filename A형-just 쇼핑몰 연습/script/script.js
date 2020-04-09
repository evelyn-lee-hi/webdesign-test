$(function () {

    var $buttons = $(".tab_btn > li");
    var $contents = $(".tab_contents");

    $buttons.on("click", function () {
        $buttons.removeClass("active");
        $(this).addClass("active");

        $contents.removeClass("active");

        var index = $(this).attr("data-index");
        $contents.eq(index).addClass("active");

    });  // tab_button

    var wrap = document.querySelector("#slide > ul");
    window.setInterval(function () {
        wrap.style.left = "-1200px";
        wrap.style.transition = "300ms"
        window.setTimeout(function () {
            wrap.removeAttribute("style");
            wrap.appendChild(wrap.firstElementChild);
        }, 300);
    }, 3500);

    var menu = document.querySelectorAll(".nav > ul > li");
    for (var i = 0; i < menu.length; i++) {
        menu[i].addEventListener("mouseenter", function () {
            this.lastElementChild.style.display = "block";
        });
        menu[i].addEventListener("mouseleave", function () {
            this.lastElementChild.style.display = "none";
        });
    }
}); //document.onready