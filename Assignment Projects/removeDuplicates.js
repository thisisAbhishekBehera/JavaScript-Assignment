function removeDuplicatesFromCart(cart) {
    // Create a Set to store unique items
    const uniqueItemsSet = new Set(cart);
  
    // Convert the Set back to an array
    const uniqueCart = Array.from(uniqueItemsSet);
  
    return uniqueCart;
  }
  