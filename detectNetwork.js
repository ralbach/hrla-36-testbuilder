// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  let firstTwoDigits = cardNumber[0]+cardNumber[1];
  let firstThreeDigits = cardNumber[0]+cardNumber[1]+ cardNumber[2];
  let firstFourDigits = cardNumber[0]+cardNumber[1]+ cardNumber[2]+cardNumber[3];
  let firstSixDigits = Number(cardNumber[0]+cardNumber[1]+ cardNumber[2]+cardNumber[3]+cardNumber[4]+cardNumber[5]);

  if (cardNumber.length == 14 && (firstTwoDigits == "38" || firstTwoDigits == "39")){
    return "Diner's Club";
  }
  else if(cardNumber.length == 15 && (firstTwoDigits == "34" || firstTwoDigits == "37")){
    return "American Express";
  }

  else if (cardNumber.length == 16 && (firstTwoDigits == "55" || firstTwoDigits == "51" || firstTwoDigits == "52" || firstTwoDigits == "53" || firstTwoDigits =="54")){
    return "MasterCard";
  }
  //Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
    else if((cardNumber.length == 16 || cardNumber.length == 18 || cardNumber.length == 19) && (firstFourDigits == "4903" || firstFourDigits == "4905" || firstFourDigits == "4911" ||
     firstFourDigits == "4936" || firstFourDigits == "6333"|| firstFourDigits == "6759" || firstSixDigits == "564182" || firstSixDigits == "633110")){
       return "Switch";
     }
  else if(cardNumber[0] == "4" && (cardNumber.length == 13 || cardNumber.length == 16 || cardNumber.length == 19)){
    return "Visa";
  }

  else if((cardNumber.length = 16 || cardNumber.length ==19) && (firstFourDigits == "6011" || firstThreeDigits =="644" ||
  firstThreeDigits =="645" || firstThreeDigits =="646" || firstThreeDigits =="647" ||firstThreeDigits =="648" || firstThreeDigits =="649" || firstTwoDigits=="65")){
    return "Discover";
  }

  else if((cardNumber.length >= 12 && cardNumber.length <= 19) && (firstFourDigits == "5018" || firstFourDigits == "5020" || firstFourDigits == "5038" || firstFourDigits == "6304")){
    return "Maestro";
  }

  else if((cardNumber.length >= 16 || cardNumber.length <= 19) && (firstThreeDigits == "624" || firstThreeDigits == "625" || firstThreeDigits == "626" || firstFourDigits == "6282" ||
firstFourDigits == "6283" || firstFourDigits == "6284" || firstFourDigits == "6285" || firstFourDigits == "6286" || firstFourDigits =="6287" || firstFourDigits == "6288"
|| (firstSixDigits > 622125 && firstSixDigits < 622926))){
    return "China UnionPay";
  }

  else {return "Please enter a valid credit card number.";}
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
