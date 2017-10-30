$(document).ready(function() {
    var inputs = {
        username: $('#username'),
        password: $('#password'),
        confirmPassword: $('#confirm_password')
    };

    var errorsDiv = $('#errors');
    errorsDiv.css('display', 'none');

    function validateInputs(e) {
        e.preventDefault();
        var errors = [];

        // reset any invalid styles
        $('input').css('color', 'black');
        $('input').css('outline', 'none');

        if (inputs.username.val().length < 5) {
            inputs.username.css('color', 'red')
            input.username.css('outline', '1px solid red');
            errors.push('Username must more than 5 characters');
        }

        if (inputs.password.val() !== inputs.confirmPassword.val()) {
            inputs.password.css('color', 'red');
            inputs.password.css('outline', '1px solid red');
            inputs.confirmPassword.css('color', 'red');
            inputs.confirmPassword.css('outline', '1px solid red');
            errors.push('Passwords do not match');
        }

        if (errors.length === 0) {
            alert('All good!');
        } else {
            console.log('showing errors...')
            var htmlContent = '<ul>';
            errors.forEach(function(error) {
                htmlContent += '<li>' + error + '</li>';
            });
            htmlContent += '</ul>'
            errorsDiv.html(htmlContent);
            errorsDiv.css('display', 'block');
        }
    }

    $('#submit').click(validateInputs);
})
