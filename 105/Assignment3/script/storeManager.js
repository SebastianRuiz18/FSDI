const LS_KEY="users";
function saveUser(user){
    // Load the old data from the localStorage
    let oldData=readUsers();
    //merge the data
    oldData.push(user);

    let val=JSON.stringify(oldData); // Parse into a JSON string

    localStorage.setItem(LS_KEY, val); // Send it to localStorage
}
function readUsers(){
    // get values from the localStorage
    let data = localStorage.getItem(LS_KEY);
    if(!data){ // NOT users?
        return []; // creating the array the first registration
    }else{
        let list=JSON.parse(data);
        return list;
    }
}