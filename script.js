const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message)=> {
    const formControl = input.parentElement;
    formControl.className = 'form_control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

const showSuccess = (input)=> {
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}


const isValidEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };


form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(username.value === ''){
        showError(username, 'Username is required');
    }else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'email is required');
        isValidEmail(email);
    }else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'password is required');
    }else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, 'password2 is required');
    }else{
        showSuccess(password2);
    }
});