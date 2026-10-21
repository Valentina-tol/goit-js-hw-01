// Calculate the total price of droids
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;

  // Return the order message
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
// Test the function
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
