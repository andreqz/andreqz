let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly=true;
const age=13;

if (age>18&&registeredEarly){
  raceNumber+=1000;
}
if(age>18&&registeredEarly){
  console.log('Race number: '+raceNumber + ' is going to start at 9:30am');
} else if(age>18&& !registeredEarly){
  console.log('Race at 11:00am');
}

if(age<18){
  console.log('Race at 12:30pm');
}
else{
  console.log('see reg desk');
}

