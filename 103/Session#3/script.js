// Create a Function
function sayHello(name, place){
    //Body of function
    console.log(`Hello ${name} from ${place}!`)
    let template = (`<h2>Hello <span class="name">${name}</span> from <span class="place">${place}</span>!</h2>`)
    return template;
}

let markInfo = sayHello("Mark", "USA")
document.write(markInfo);