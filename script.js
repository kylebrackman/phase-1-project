const searchName = document.getElementById("search")

searchName.addEventListener("submit", function(e) {
    e.preventDefault()
    alert("working!")
})

const selectAgencyDropdown = document.getElementById("selectAgency")

selectAgencyDropdown.onchange = function(){
    fetch("https://api.spacexdata.com/v4/crew")
    .then(res => res.json())
    .then(data => changeAgency(data))
}

function changeAgency(data){
    let p = document.createElement("p")
    p.innerText = data.name 
    document.querySelector("#crewMembers").appendChild(p)
}

let darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", changeColorScheme);

let dark = false;

function changeColorScheme() {
    dark = !dark
    darkMode.innerText = "Light Mode"
    document.body.classList.toggle("darkMode");
    if (!dark) {
        darkMode.innerText = "Dark Mode"
    }
}

// function filterCrew(agencyName) {
//     let crew = data.filter(data => data.agency === "NASA")
//     console.log(nasaCrew)
// }



// fetch("https://api.spacexdata.com/v4/crew")
// .then(res => res.json())
// .then(data => console.log(data))