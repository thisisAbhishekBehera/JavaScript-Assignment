function generateRandomNumberWithDelay(delay) {
    let remainingTime = delay;
  
    const intervalId = setInterval(() => {
      console.log(`Generating random number in ${remainingTime} seconds`);
      remainingTime--;
  
      if (remainingTime === 0) {
        clearInterval(intervalId);
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Random number generated:", randomNumber);
      }
    }, 1000);
  }
  
  // Example usage:
  const delayInSeconds = 3;
  generateRandomNumberWithDelay(delayInSeconds);
  