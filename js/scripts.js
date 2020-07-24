$(document).ready(function () {
    $('#login_link ').click(function () {
        $('#loginmodal').modal('toggle');
    });
    $('#cancel').click(function () {
        $('#loginmodal').modal('hide');

    });
    $('#signup_link ').click(function () {
        $('#signupmodal').modal('toggle');
    });
});