
// calulates multiple of 3, 5, 7 up to provided number and return sum
function computeMultiplesSum(n) {
  const multiples = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      multiples.push(i)
    }
  }

  return multiples.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log("boom: ", computeMultiplesSum(11)); // sum: 40

// discount priciest item, plus sum all final pricing
function sumOfPricesWithDiscount(prices, discount) {
  const maxPrice = Math.max(...prices);
  const maxPriceIndex = prices.indexOf(maxPrice);
  const newPricesList = [...prices];

  newPricesList[maxPriceIndex] = maxPrice * (1 - discount / 100); // apply discount to the largest price

  return newPricesList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

console.log(
  "sumOfPricesWithDiscount: ",
  sumOfPricesWithDiscount([100, 200, 400], 20)
); // sum: 620
