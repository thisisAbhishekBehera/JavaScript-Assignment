function divisibleBy3NotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        continue;
      }
      if (numbers[i] % 3 === 0) {
        console.log(numbers[i]);
      }
    }
  }
  
  // Example usage:
  const numbers = [3, 6, 9, 12, 15, 18, 21];
  divisibleBy3NotBy2(numbers);
  