function createRow(usersArray){
    for(let i = 0; i < usersArray.length; i++){
        let user = usersArray[i];
        let tmp =`
            <tr>
                <td>${user.email}</td>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td style="background-color: ${user.color};"></td>
            </tr>
        `;// Creating HTML Template
        $("#userList").append(tmp)
    }
}
function init(){
    console.log("Listing");
    let users=readUsers();
    createRow(users);
}
window.onload=init;