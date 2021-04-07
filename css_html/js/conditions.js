"use strict"

const q = [];

q[0] = prompt('как вас зовут?', '');

// if (q[0]) {
//     console.log(true);
// } else {
//     console.log(false);
// }

const num = 50;

// if (num < 49) {
//     console.log('false');
// } else if (num > 100) {
//     console.log('false');
// } else {
//     console.log('true');
// }

// (num === 50) ? console.log('true') : console.log('false');

switch (q) {
    case 49:
        console.log('false');
        break;
    case 100:
        console.log('false');
        break;
    case 50:
        console.log('true');
        break;
    default:
        console.log('false');
        break;
}