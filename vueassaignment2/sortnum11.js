function sortNumbers(array) {
   
    return [...array].sort((a, b) => a - b);
  }
  
  const array = [5,2,8,1,4];

  console.log(sortNumbers(array)); 

  