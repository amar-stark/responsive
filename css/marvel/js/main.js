$(document).ready(function () {
    $(document).keyup(function (a) {
        27 == a.keyCode && $(".overlay").removeClass("activated");
    }),
        $(".cell").click(function (a) {
            console.log(a.target), a.target == this && $(".overlay").removeClass("activated");
        }),
        $("#tweet .button").click(function (a) {
            a.preventDefault();
            var b = encodeURIComponent($(this).attr("title") + " – ");
            window.open(
                "http://twitter.com/share?url=&text=" + b + "&related=@marvelapp&",
                "twitterwindow",
                "height=450, width=550, top=" + ($(window).height() / 2 - 225) + ", left=" + $(window).width() / 2 + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
            );
        }),
        $(".grab").click(function () {
            $(this).parent().parent().find(".overlay").addClass("activated"),
                $(this)
                    .parent()
                    .parent()
                    .find("code")
                    .each(function (a, b) {
                        hljs.highlightBlock(b);
                    });
        }),
        $(".selector li").click(function () {
            var a = $(this).closest("section"),
                b = a.attr("id"),
                c = $("#" + b + " .marvel-device"),
                d = $("#" + b + " .orientation"),
                e = $("#" + b + " .colour"),
                f = $(this).attr("data");
            return "landscape" == f
                ? void (c.hasClass("landscape") ? ($(this).removeClass("selected"), c.removeClass("landscape"), d.html("")) : ($(this).addClass("selected"), c.addClass("landscape"), d.html(" landscape")))
                : (a.removeClass().addClass(f),
                  void (c.hasClass("landscape")
                      ? ($("#" + b + " .selector li").removeClass("selected"),
                        $("#" + b + " .select-landscape").addClass("selected"),
                        $(this).addClass("selected"),
                        c.removeClass().addClass("marvel-device " + b + " " + f + " landscape"),
                        e.html(" " + f))
                      : ($("#" + b + " .selector li").removeClass("selected"), $(this).addClass("selected"), c.removeClass().addClass("marvel-device " + b + " " + f), e.html(" " + f))));
        });
});
