function convertPricesToINR(items) {
    const exchangeRate = 80;
    return Object.entries(items).reduce((acc, [item, price]) => {
      acc[item] = price * exchangeRate;
      return acc;
    }, {});
  }
  
  // Example usage:
  const itemsWithUSDPrices = {
    apple: 1.25,
    banana: 0.75,
    orange: 1.50
  };
  
  const itemsWithINRPrices = convertPricesToINR(itemsWithUSDPrices);
  console.log(itemsWithINRPrices);  