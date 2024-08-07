function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  // Example usage:
  const userName = "john doe";
  const capitalizedName = capitalizeName(userName);
  console.log(capitalizedName); // Output: John doe
  