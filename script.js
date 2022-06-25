const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.button_login');

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value >= 8){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}
// inputs.forEach(input) => input.addEventListener('input', handleChange);