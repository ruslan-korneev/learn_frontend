let name = "Ruslan";
let age = 20;

console.log(name, '-', age, 'y.o.');

//change value of name
name = 'Руслан';

//var with f-string
let send_welcome = `Hello ${name} (${age}), how are you?`;

console.log(send_welcome);

//Header and nav links list
const header = document.querySelector('.header');
const nav_links = document.querySelectorAll('.nav__link');
console.log(typeof header);
console.log(header);
console.log(nav_links);

//Functions
function say_hello(number) {
    console.log('hello first function');
    console.log(`call ${number}`);
}

say_hello(1);
say_hello(2);

// Events
window.addEventListener('scroll', check_scroll);
document.addEventListener('DOMContentLoaded', check_scroll);

function check_scroll(){
    let scroll_pos = window.scrollY;
    console.log(`scrolled to ${scroll_pos}`);
    let flag_2 = scroll_pos > 1200 & scroll_pos < 1800;
    if(scroll_pos > 2 & scroll_pos < 620 | flag_2) {
        header.classList.add('red');
    } else {
        header.classList.remove('red');
    }
};

const test_button = document.querySelector('#test_button')
test_button.addEventListener('click', function() {
    console.log('clicked');
});

// for
for(let nav_item of nav_links){
    nav_item.addEventListener('click', function() {
        console.log(nav_item.text);
    });
};
