function displayInformation(){
    document.getElementById("salonInformation").innerHTML=`
        <p> Welcome to ${salon.name}<p>
        <p> You can find us at ${salon.adress.street}, ${salon.adress.number}<p>
        <p> Open from ${salon.hours.open} to ${salon.hours.close}<p>
    `
}
displayInformation();