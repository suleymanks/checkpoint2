const nameInput = document.querySelector("#name")
const ageInput = document.querySelector("#age")
const locationInput = document.querySelector("#location")
const addButton = document.querySelector("#add")
const searchInput = document.querySelector("#search-location")
const searchButton = document.querySelector("#search-button")
const userList = document.querySelector(".display-container")

//localStorage.clear();

runEventListener()

function runEventListener(){
    addButton.addEventListener("click", storeData)
    searchButton.addEventListener("click", searchUsersByLocation)
}

function storeData(){
    const nameinfo = nameInput.value;
    const ageinfo = ageInput.value;
    const locationinfo = locationInput.value;

    if(nameinfo=="" || ageinfo=="" || locationinfo=="") return alert("Please fill all form!")

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matched = users.find((user) => user.username===nameinfo)
    if(matched) alert("Please choose another name its using")

    const data = {
        username : nameinfo,
        userage : ageinfo,
        userlocation : locationinfo,
    }

    users.push(data);

    localStorage.setItem("users",JSON.stringify(users));
}

function searchUsersByLocation(){
    const searchValue = searchInput.value;
    const locationinfo = locationInput.value;


    if(searchValue=="") return alert("Please fill search area!")

    const users = JSON.parse(localStorage.getItem("users")) || [];

    let matched = users.filter((user) => user.userlocation === searchValue)

    console.log(matched);

    const displayDiv = document.createElement("div")
    displayDiv.innerText=`${matched.map((element)=> `Username :${element.username} Location:${element.userlocation} Age:${element.userage}`)}`
    userList.appendChild(displayDiv);
}