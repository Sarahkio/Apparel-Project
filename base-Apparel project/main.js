const form = document.querySelector('.container form');
const email = document.querySelector('.container form input[type=email]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;
    console.log(emailValue);
    if (validateEmail(emailValue)) {
    form.classList.remove('error');
    } else {
        form.classList.add('error');
    }
});
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};







// const form = document.getElementById('form');
// const email= document.getElementById('email');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     var emailVal = email.value;

//     if (!validateEmail(emailVal)) {
//         form.classList.add('error');
//         console.log('this does not work');
//     } else {
//         form.classList.remove('error');
//         console.log('this works');
//     }
// });

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// };
