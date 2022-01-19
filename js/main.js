$(document).ready(function() {
    $("ul.hl li").hover(function() {
        $(".icongroup, .arrow", this).removeClass("hidden")
    }, function() {
        $(".icongroup, .arrow", this).addClass("hidden")
    });
    $("a").on("click", function(event) {
        if (this.hash !== "" && $("body").css("scroll-behavior") != "smooth") {
            event.preventDefault();
            var h = this.hash;
            $("html, body").animate({
                scrollTop: $(h).offset().top
            }, 300, function() {
                window.location.hash = h
            })
        }
    })
});
