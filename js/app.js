'use strict';

let userName = prompt ('What is your name ?');
let readyMassage = prompt (userName + ', are you ready for a guessing game ?').toLowerCase();
switch(readyMassage) {
    case 'yes' :
        alert('lets go');
        // console.log('yes');
        break;

        case  'y' :
        alert('lets go');
        // console.log('yes');
        break;
        
        case 'no' :
            alert('#-#');
            // console.log('no');
            break;

        case  'n' :
        alert('#-#');
        // console.log('no');
        break;
}

let q1 = prompt ('Am I Wesam ?').toLowerCase();
switch(q1) {
    case 'yes' :
        alert('right ^_^');
        // console.log('yes');
        break;

        case  'y' :
        alert('right ^_^');
        // console.log('yes');
        break;
        
        case 'no' :
            alert('I am Wesam Alqawasmeh');
            // console.log('no');
            break;

        case  'n' :
        alert('I am Wesam Alqawasmeh');
        // console.log('no');
        break;
}

let q2 = prompt ('Is my age 23 ?').toLowerCase();
switch(q2) {
    case 'yes' :
        alert('Right answer');
        // console.log('yes');
        break;

        case  'y' :
        alert('Right answer');
        // console.log('yes');
        break;
        
        case 'no' :
            alert('I am 23 years old');
            // console.log('no');
            break;

        case  'n' :
        alert('I am 23 years old');
        // console.log('no');
        break;
}

let q3 = prompt ('DO i like SHAWERMA ?').toLowerCase();
switch(q3) {
    case 'yes' :
        alert('Yeah sure');
        // console.log('yes');
        break;

        case  'y' :
        alert('Yeah sure');
        // console.log('yes');
        break;
        
        case 'no' :
            alert('wrong answer');
            // console.log('no');
            break;

        case  'n' :
        alert('wrong answer');
        // console.log('no');
        break;
}

let q4 = prompt ('DO i like games ?').toLowerCase();
switch(q4) {
    case 'yes' :
        alert('Right');
        // console.log('yes');
        break;

        case  'y' :
        alert('Right');
        // console.log('yes');
        break;
        
        case 'no' :
            alert('wrong answer');
            // console.log('no');
            break;

        case  'n' :
        alert('wrong answer');
        // console.log('no');
        break;
}

alert ('This is the end of the guessing game ' + userName + ', welcome to my web page ^_^')

