function filterEvenNumbers(array) {
  
    return array.filter((number) => number % 2 === 0);
  }
 
  const array = [1, 2, 3, 4, 5];
  
  console.log(filterEvenNumbers(array)); // [2, 4]
 
  