function destructureExample(obj, array) {
  
    const { name, age } = obj;
    const [firstElement, thirdElement] = array;
  
    return {
      name: name,
      age: age,
      firstElement: firstElement,
      thirdElement: thirdElement,
    };
  }
  
  const obj ={ name: 'John', age: 30, city: 'New York' };
  const array = [10, 20, 30, 40];
  
  const result = destructureExample(obj, array);
  
  console.log(result); 
  