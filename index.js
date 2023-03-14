function scuberGreetingForFeet(range){
  // Write your code here!
  if(range <= 400) {
    return 'This one is on me!';
  } else if(range > 400 && range <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else{
    return 'No can do.';
  }
}
// console.log(scuberGreetingForFeet(2501))

function ternaryCheckCity(city) {
  // Write your code here!
  return city == 'NYC' ?'Ok, sounds good.' : 'No go.';
} 

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('not generous'));