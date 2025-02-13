let elemNoname = document.getElementById("noname");
let elemName = document.getElementById("name");

let nameValue = localStorage.getItem("name");

if(nameValue) {
    elemNoname.style.display = "none";
    elemName.innerText = "Olá" + nameValue
}

function addName(){
    console.log("addName");
    let cxaName = document.getElementById("cxaName");
    let value = cxaName.value;
    localStorage.setItem("name", value);
    elemNoname.style.display = "none";
    elemName.innerText = "Olá" + nameValue
} 