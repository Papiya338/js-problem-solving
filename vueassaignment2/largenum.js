function getLargestNumber(number1, number2) {
  
    const largerNumber = number1 >= number2 ? number1 : number2;
   
    return largerNumber >= number1 ? largerNumber : number1;
  }
  
  console.log(getLargestNumber(10, 5));

  