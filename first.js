const showing = document.querySelector("#showing")
//UserId1
const user1 = {
    position: "user1",
    UserId: 7890,
    UserName: "Avijit Dagur",
    UserEmailId: "avijitdagur45@gmail.com",
    UserPassword: "Avijit@1234",
}
// userId2
const user2 = {
    position: "user2",
    UserId: 1234,
    UserName: "Subhayan Kapas",
    UserEmailId: "subhkaps@gmail.com",
    UserPassword: "Subh@1234",
}
// userId3
const user3 = {
    position: "user3",
    UserId: 6785,
    UserName: "Akash Bera",
    UserEmailId: "beraakash7@gmail.com",
    UserPassword: "beraakas54@fg",
}
//userId4
const user4 = {
    position: "user4",
    UserId: 6785,
    UserName: "Suprakash Bhattacharya",
    UserEmailId: "suprkash879@gmail.com",
    UserPassword: "supra56@3",
}
//userId5
const user5 = {
    position: "user5",
    UserId: 9870,
    UserName: "Roni Ghosh",
    UserEmailId: "ghoshroni@gmail.com",
    UserPassword: "098@roni",
}
//userId6
const user6 = {
    position: "user6",
    UserId: 9823,
    UserName: "Saheb Das",
    UserEmailId: "dassaheb76@gmail.com",
    UserPassword: "dassaheb67@34",
}
//userId7
const user7 = {
    position: "user7",
    UserId: 9417,
    UserName: "Suman Bera",
    UserEmailId: "berasuman78@gmail.com",
    UserPassword: "98Bera#$13",
}

//output portion
const user = document.querySelector("#UserIDCheckUserNameCheck")

UserIDCheckUserNameCheck.addEventListener("click", () => {
    const userid = prompt("Enter the user position")
    if (userid == user1.position) {
        console.log(user1)
        showing.innerText = user1.UserName
        showing.style.fontSize = "4rem";
        showing.style.backgroundColor = "green";

    }
    else if (userid == user2.position) {
        console.log(user2)
        showing.innerText = user2.UserName
        showing.style.fontSize = "4rem";
        showing.style.backgroundColor = "green";
    }
    else if (userid == user3.position) {
        console.log(user3)
        showing.innerText = user3.UserName
        showing.style.fontSize = "4rem";
        showing.style.backgroundColor = "green";
    }
    else if (userid == user4.position) {
        console.log(user4)
        showing.innerText = user4.UserName
        showing.style.fontSize = "4rem";
        showing.style.backgroundColor = "green";
    }
    else if (userid == user5.position) {
        console.log(user5)
        showing.innerText = user5.UserName
        showing.style.fontSize = "4rem";
        showing.style.backgroundColor = "green";
    }
    else if (userid == user6.position) {
        console.log(user6)
        showing.innerText = user6.UserName
        showing.style.fontSize = "4rem";
        showing.style.backgroundColor = "green";
    }
    else if (userid == user7.position) {
        console.log(user7)
        showing.innerText = user7.UserName
        showing.style.fontSize = "4rem";
        showing.style.backgroundColor = "green";
    }
    else {
        alert("Invalid user id")
        console.log("Invalid User ID")
    }
})
//addmore button

const addMoreButton = document.querySelector("#AddMoreButton");

// Add an event listener to the Add More button
addMoreButton.addEventListener("click", () => {
    const userId = prompt("Enter the User ID");
    const userName = prompt("Enter the User Name");

    // Get the table
    const table = document.querySelector("table");

    // Insert a new row at the end of the table
    const newRow = table.insertRow();
    if(newRow){
        alert("Data inserted successfully")
    }

    // Insert cells for the new row
    const userIdCell = newRow.insertCell(0);
    const userNameCell = newRow.insertCell(1);

    // Assign values to the cells
    userIdCell.innerText = userId;
    userNameCell.innerText = userName;
});
