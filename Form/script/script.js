$(".login-part").addClass("active-form");

$(document).ready(function () {
    $("#open-register").click(function () {
        $(".login-part").removeClass("active-form");
        $(".register-part").addClass("active-form");
    });
    $("#open-login").click(function () {
        $(".register-part").removeClass("active-form");
        $(".login-part").addClass("active-form");
    });
});