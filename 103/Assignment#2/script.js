//Test the script link
console.log("Script Receipt");

// Declare
var Subtotal
var Total;

// Assign from prompt
let pctName = prompt("Enter the name of the Product: ");
let pctQuantity = prompt("Enter the quantity of the product: ");
let pctPrice = prompt("Enter the price of the product: ");
let tax = 1.16;

// Calculate
Subtotal = pctPrice * pctQuantity;
Total = Subtotal * tax;

// Print results in console
console.log(`Product: ${pctName}`);
console.log(`Quantity: ${pctQuantity}`);
console.log(`Price: ${pctPrice}`);
console.log(`Subtotal: ${Subtotal}`);
console.log(`Total: ${Total}`);

// Print results in HTML/Document
document.write(`<h3>Receipt</h3>`);
document.write(`Product: ${pctName}<br>`);
document.write(`Quantity: ${pctQuantity}<br>`);
document.write(`Price: ${pctPrice}<br><br>`);
document.write(`Subtotal: ${Subtotal}<br>`);
document.write(`Total: ${Total}<br>`);