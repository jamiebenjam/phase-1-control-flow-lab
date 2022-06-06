function scuberGreetingForFeet(feet){
  let greeting;
  if (feet <= 400) {
    greeting = "This one is on me!"; 
  } else if (feet > 400 && feet < 2000) {
    greeting = "That will be twenty bucks.";
  } else if (feet > 2000 && feet < 2500) {
    greeting = "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    greeting = "No can do.";
  }

  return greeting
}

function ternaryCheckCity(city) {
  //let city = "NYC"
  return city === "NYC" ? "Ok, sounds good." : "No go.";
  }


function switchOnCharmFromTip(tip){
  let message;
    switch (tip) {
      case 'generous':
        message = 'Thank you so much.';
        break;
      case 'not as generous':
        message = 'Thank you.';
        break;
      default:
        message = 'Bye.';
  }
  return message;
}