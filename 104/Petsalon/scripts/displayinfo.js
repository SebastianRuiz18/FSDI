function displayInformation(){
    document.getElementById("salonInformation").innerHTML=`
        <h2> Welcome to ${salon.name}</h2>
        <p> You can find us at ${salon.adress.street}, ${salon.adress.number}<p>
        <p> Open from ${salon.hours.open} to ${salon.hours.close}<p>
    `
}
displayInformation();