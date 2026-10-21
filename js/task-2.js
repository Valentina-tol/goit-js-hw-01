'use strict';

// Calculate the total shipping cost
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;

  // Return the shipping message
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Test the function
console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));
