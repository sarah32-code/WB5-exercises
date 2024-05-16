let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];
// Which candies costs less than $4.00?

let cheapCandies = products.filter(product => product.price < 4.00)

console.log (cheapCandies)
// Which candies has "M&M" its name?

let mms = products.filter(product => product.product.includes("M&M"))
console.log (mms)
// Do we carry "Swedish Fish"?

let swedishFish = products.filter(product => product.product === "Swedish Fish")
console.log("Do we carry Swedish Fish? " + (swedishFish.length > 0 ? "Yes" : "No"))