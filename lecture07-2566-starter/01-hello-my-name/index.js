const greetme = document.querySelector('#greet-me');
const showname = document.querySelector('#name-input');
const greetmsg = document.querySelector('#greet-msg');

showname.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        greetme.click();
    }
});

greetme.addEventListener('click', () => {
    if (showname.value === '') {
        alert('Please enter your name');
        greetmsg.classList.add('text-danger');
        greetmsg.innerHTML = 'Please enter your name';
    } else {
        alert(`Hello ${showname.value}`);
        greetmsg.classList.remove('text-danger');
        greetmsg.innerHTML = `Hello ${showname.value}`;
    }
});
