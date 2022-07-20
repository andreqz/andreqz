let userName='Janek';

userName ? console.log('Hello, ' + userName + '!') : console.log('Hello!');

let userQuestion='Liczba';
console.log(userName +' asked: ' + userQuestion);

let randomNumber=Math.floor(Math.random()*8);
console.log(randomNumber);
let eightBall='';


switch (randomNumber){
   case 0:
    eightBall==='xxxx';
    break;
    case '1':
    eightBall==='ssssssxxxx';
    break;
    case '2':
    eightBall==='zzzzzxxxx';
    break;
    case '3':
    eightBall==='nnnnnxxxx';
    break;
    case '4':
    eightBall==='kkkxxxx';
    break;
    case '5':
    eightBall==='lllllllxxxx';
    break;
    case '6':
    eightBall==='ooooooxxxx';
    break;
    case '7':
    eightBall==='sssssssooooooxxxx';
    break;
}

console.log(eightBall);



