
let salon={
    name:"Enchulame el Perro",
    adress:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-55"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Mixed",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-55"
        },
        {
            name:"Krypto",
            age:66,
            gender:"Male",
            breed:"Labrador",
            service:"Grooming",
            owner:"Superman",
            phone:"222-222-22"
        },
        {
            name:"Santa's Little Helper",
            age:7,
            gender:"Male",
            breed:"Mixed",
            service:"Grooming",
            owner:"Homer Simpson",
            phone:"888-888-88"
        }
    ]
}
console.log(salon.pets);

function displayPetsNames(){
    for (let i = 0; i < salon.pets.length; i++){
        console.log(salon.pets[i].name);
        document.write(`Pet ${i+1}: ${salon.pets[i].name}<br>`);
    }
}

function displayNumberOfPets(){
    let i = salon.pets.length;
    document.write(`Pets currently registered: ${i}`);
}
displayPetsNames();
displayNumberOfPets();