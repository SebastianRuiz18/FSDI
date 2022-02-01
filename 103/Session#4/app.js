let hunger = 80;
let happiness = 50;
let energy = 40;

function displayInfo(){
    document.getElementById("hungerInfo").innerHTML=`JS-Hunger: ${hunger}%`;
    document.getElementById("happinessInfo").innerHTML=`JS-Hapiness: ${happiness}%`;
    document.getElementById("energyInfo").innerHTML=`JS-Energy: ${energy}%`;
}

function feed(){
    console.log("Feed Function");
    hunger -= 20;
    happiness += 10;
    energy += 10;

    if(hunger < 0)
    {
        hunger = 0;
    }
    if(happiness > 100)
    {
        happiness = 100;
    }
    if(energy > 100)
    {
        energy = 100;
    }

    displayInfo();
}

function pet(){
    console.log("Pet Function");
    happiness += 20;

    if(happiness > 100)
    {
        happiness = 100;
    }

    displayInfo();
}

function play(){
    console.log("Play Function");
    energy -= 20;
    hunger += 20;
    happiness += 30;
    if(energy < 0)
    {
        energy = 0;
    }
    if(hunger > 100)
    {
        hunger = 100;
    }
    if(happiness > 100)
    {
        happiness = 100;
    }
    displayInfo();
}

displayInfo();