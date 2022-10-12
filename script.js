const searchName = document.getElementById("search");

searchName.addEventListener("submit", function(e) {
    e.preventDefault()
    alert("working!")
});

// fetching SpaceX API and attempting to get crew info
const selectAgencyDropdown = document.getElementById("selectAgency");
selectAgencyDropdown.onchange = fetchCrewInfo

function fetchCrewInfo() {
    fetch("https://api.spacexdata.com/v4/crew")
    .then(res => res.json())
    .then(data => renderCrewNames(data))
};

function renderCrewNames(crew) {
    const main = document.querySelector("main")
    crew.forEach(crew => {
        const h2 = document.createElement("h2")
        h2.innerHTML = crew.name
        main.appendChild(h2)
    })
}


// function changeAgency(data){
//     let p = document.createElement("p")
//     crewMemberName = data.filter(filterCrew(data))
//     p.innerText = crewMemberName
//     document.querySelector("#crewMembers").appendChild(p)
// };


let darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", changeColorScheme);
let dark = false;
function changeColorScheme() {
    dark = !dark
    darkMode.innerText = "Light Mode"
    document.body.classList.toggle("darkMode")
    if (!dark) {
        darkMode.innerText = "Dark Mode"
    }
};

