
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = ('form-control error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function success(input) {
    const formControl = input.parentElement;
    formControl.className = ('form-control success');
}

function checkEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( re.test(input.value.trim())) {
        success(input);
    } else {
        showError(input, `Please enter valid email`)
    }
  }

function checkRequire(inputArray) {
    inputArray.forEach(function (input) {

        if (input.value === '') {
            showError(input, `${getFieldId(input)} is required`)
        } else {
            success(input)
        }
    })
}

function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min , max){
    if (input.value.length < min) {
        showError(input, `${getFieldId(input)} needs to be atleast ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldId(input)} needs to be less than ${max} characters`)
    } else{
        success(input)
    }
}

function checkPasswordsMatch (input1, input2){
    if(input1.value !== input2.value){
        showError(confirmPassword, `Passwords not match`)
    }
}

form.addEventListener('submit', function (e) {

    e.preventDefault();

    checkRequire([username,email,password,confirmPassword])

    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordsMatch(password, confirmPassword)

    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     success(username);
    // }

    // if (email.value === '') {
    //     showError(email, 'Email is required');
    // } else if (!validateEmail(email.value)) {
    //     showError(email, 'Email is invalid');
    // } else {
    //     success(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'Password is required');
    // } else {
    //     success(password);
    // }

    // if (confirmPassword.value === '') {
    //     showError(confirmPassword, 'Password is required');
    // } else {
    //     success(confirmPassword);
    // }
})