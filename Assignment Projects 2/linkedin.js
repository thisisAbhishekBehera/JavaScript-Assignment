function validateLinkedInProfileURL(url) {
    const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-\/]{5,30}$/;
    const isValid = linkedinRegex.test(url);
  
    if (isValid) {
      console.log("Valid LinkedIn profile URL");
    } else {
      console.log("Invalid LinkedIn profile URL");
    }
  }
  
  // Example usage:
  const url1 = "https://www.linkedin.com/in/john-doe-123";
  const url2 = "http://www.linkedin.com/public-profile/in/jane_smith";
  const url3 = "https://linkedin.com/invalid-profile";
  const url4 = "https://www.linkedin.com/in/very-long-profile-id-with-more-than-30-characters";
  
  validateLinkedInProfileURL(url1); // Output: Valid LinkedIn profile URL
  validateLinkedInProfileURL(url2); // Output: Invalid LinkedIn profile URL (incorrect protocol)
  validateLinkedInProfileURL(url3); // Output: Invalid LinkedIn profile URL (missing www)
  validateLinkedInProfileURL(url4); // Output: Invalid LinkedIn profile URL (exceeds character limit)
  