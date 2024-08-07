function countVowels(name) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  // Example usage:
  const name = "Alice";
  const vowelCount = countVowels(name);
  console.log("Number of vowels:", vowelCount); // Output: Number of vowels: 2
  