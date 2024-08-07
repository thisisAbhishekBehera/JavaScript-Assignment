function validateURL(url) {
    const urlRegex = /^(https?:\/\/)([\w\-.]+\.[a-zA-Z]{2,})$/;
    const isValid = urlRegex.test(url);
  
    if (isValid) {
      console.log("Valid URL");
    } else {
      console.log("Invalid URL");
    }
  }
  
  // Example usage:
  const url1 = "https://www.example.com";
  const url2 = "http://google.co.in";
  const url3 = "invalid-url";
  
  validateURL(url1); // Output: Valid URL
  validateURL(url2); // Output: Valid URL
  validateURL(url3); // Output: Invalid URL
  