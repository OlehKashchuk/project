
const box = document.getElementById('box');

console.log(box);

const  btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(itm => {
    console.log(itm);
});


