$(document).ready(function () {
    $("a").click(function (event) {
        event.preventDefault();

        var loHash = this.hash;

        $("html").animate(
            {
                scrollTop: $(loHash).offset().top - 20,
            },
            800
        );
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});