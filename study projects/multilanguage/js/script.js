$function() {
    $("en").click(function() {
    $(".nav-menu").children().eq(1).text("About me");
    $(".nav-menu").children().eq(2).text("Resume");
    $(".nav-menu").children().eq(3).text("Projects");
    $(".nav-menu").children().eq(4).text("Contact me");
    $(".language-selected").addClass(".en");
    })

    $("#title").text ("A Simple Webpage with the  de Multi-Language");

}