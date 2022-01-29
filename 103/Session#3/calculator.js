console.log("Calculator function");
function calc(){
    // Get data from prompt
    let num1 = Number(prompt(`Enter the first number:`));
    console.log("num1: " + num1);
    let num2 = Number(prompt(`Enter the second number:`));
    console.log("num2: " + num2);
    let add = num1 + num2;

    // Operations + print on console
    console.log("Add: " + add);
    let sub = num1 - num2;
    console.log("Sub: " + sub);
    let div = num1 / num2;
    console.log("Div: " + div);
    let mul = num1 * num2;
    console.log("Mul: " + mul);

    // Print
    document.getElementById("results").innerHTML = `
    <p class="add">${num1} + ${num2} = ${add}</p>
    <p class="sub">${num1} - ${num2} = ${sub}</p>
    <p class="div">${num1} / ${num2} = ${div}</p>
    <p class="mul">${num1} * ${num2} = ${mul}</p>
    `;

    // Return
    return add, sub, div, mul;
}