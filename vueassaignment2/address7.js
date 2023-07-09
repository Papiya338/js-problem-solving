function getAddressCity(address) {
  
    const city = address?.city;
  
    return city ? city : "Unknown";
  }
  
  const address = { street: "123 Main Street", country: "USA" };
  
  console.log(getAddressCity(address));
 
  