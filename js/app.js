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

function myName(m){
    let q1 = prompt (m).toLowerCase();
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
}

myName('Am I Wesam ?');


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

let totalMark = 0;

function graduation(g){
    let counter = 1;

    let graduationYear = prompt (g);
    
    if(graduationYear > 2020){
        alert('too high')
    
    } else if (graduationYear < 2020){
        alert('too low')
    }
    
    while (graduationYear != 2020){
        graduationYear = prompt (g)
        counter++;
        if(counter === 6){
            alert('I graduated in 2020')
            break;
        }
        if(graduationYear > 2020){
            alert('too high')
        
        } else if (graduationYear < 2020){
            alert('too low')
        }
    }
    
    if (graduationYear == 2020){
        totalMark++;
    }
}

graduation('Geuss my graduation year between(2017-2021)');


let counter2 = 1;

let favNum = prompt ('Geuss my Favorite number between(0-10)');

if(favNum > 7){
    alert('too high')

} else if (favNum < 7){
    alert('too low')
}

while (favNum != 7){
    favNum = prompt ('Geuss my Favorite number between(0-10)')
    counter2++;
    if(counter2 === 6){
        alert('My favorite number 7')
        break;
    }
    if(favNum > 7){
        alert('too high')
    
    } else if (favNum < 7){
        alert('too low')
    }
}

if(favNum == 7){
    totalMark++;
}

let counter3 = 1;

let certificate = prompt ('Geuss how many certificates i have between(0-4)');

if(certificate > 3){
    alert('too high')

} else if (certificate < 3){
    alert('too low')
}

while (certificate != 3){
    certificate = prompt ('Geuss how many certificates i have between(0-4)')
    counter3++;
    if(counter3 === 6){
        alert('I have 3 certificates in my major')
        break;
    }
    if(certificate > 3){
        alert('too high')
    
    } else if (certificate < 3){
        alert('too low')
    }
}

if (certificate == 3){
    totalMark++;
}

let counter4 = 1;

let competitions = prompt ('Geuss how many competitions i won between(0-4)');

if(competitions > 1){
    alert('too high')

} else if (competitions < 1){
    alert('too low')
}

while (competitions != 1){
    competitions = prompt ('Geuss how many competitions i won between(0-4)')
    counter4++;
    if(counter4 === 6){
        alert('thr right answer is 1')
        break;
    }
    if(competitions > 1){
        alert('too high')
    
    } else if (competitions < 1){
        alert('too low')
    }
}

if(competitions == 1){
    totalMark++;
}

let counter5 = 1;

let age = prompt ('Geuss my age between (18-25)');

if(age > 23){
    alert('too high')

} else if (age < 23){
    alert('too low')
}

while (age != 23){
    age = prompt ('Geuss my age between (18-25)')
    counter5++;

    if(counter5 === 6){
        alert('the right answer is 23')
        break;
    }

    if(age > 23){
        alert('too high')
    
    } else if (age < 23){
        alert('too low')
    }
}

if(age == 23){
    totalMark++;
}

function myGpa(p){
    let counter6 = 1;

    let gpa = prompt (p);
    
    if(gpa > 3.34){
        alert('too high')
    
    } else if (gpa < 3.34){
        alert('too low')
    }
    
    while (gpa != 3.34){
        gpa = prompt (p)
        counter6++;
        if(counter6 === 6){
            alert('My GPA is 3.34')
            break;
        }
        if(gpa > 3.34){
            alert('too high')
        
        } else if (gpa < 3.34){
            alert('too low')
        }
    }
    
    if(gpa == 3.34){
        totalMark++;
    }
}

myGpa('Geuss my GPA in University between (3-3.5)');


let counter7 = 1;

let courseName = ['code 201-d34',201,'201d34'];
let course = prompt('What is the name of our corse ? ');
switch(course){
    case courseName[0][1][2] :
        alert('right answer')
        totalMark++;
        break;
    
    default :
    
    while (counter7 < 7){
        course = prompt('What is the name of our corse ? ')
        counter7++;
        if(counter7 === 6){
            alert('the possible answers : code 201-d34, 201, 201d34')
            break;
        }
         }
         break;

}

alert('your total mark is ' + totalMark + ' of 7')



alert ('This is the end of the guessing game ' + userName + ', welcome to my web page ^_^') 
