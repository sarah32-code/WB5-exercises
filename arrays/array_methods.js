let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

let itemName = cart.map(item => item.item);
cart.forEach(item => console.log(item.item));


function itemTotal(currentTotal, arrayElement) {
    return currentTotal + arrayElement.price * arrayElement.quantity;
}
let sum = cart.reduce(itemTotal, 0);
console.log(sum);

let itemNameSorted = cart.map(item => item.item);
itemNameSorted.sort();

itemNameSorted.forEach(item => console.log(item));
