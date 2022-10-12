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
    if (selectAgencyDropdown.value === "NASA" ) {
        crew.forEach(crew => {
            if (crew.agency === "NASA") {
            const h2 = document.createElement("h2")
            h2.innerHTML = crew.name
            main.appendChild(h2)
            }
        })
    }
    if (selectAgencyDropdown.value === "ESA" ) {
        crew.forEach(crew => {
            if (crew.agency === "ESA") {
            const h2 = document.createElement("h2")
            h2.innerHTML = crew.name
            main.appendChild(h2)
            }
        })
    }
    if (selectAgencyDropdown.value === "JAXA" ) {
        crew.forEach(crew => {
            if (crew.agency === "JAXA") {
            const h2 = document.createElement("h2")
            h2.innerHTML = crew.name
            main.appendChild(h2)
            }
        })
    }
    if (selectAgencyDropdown.value === "SpaceX" ) {
        crew.forEach(crew => {
            if (crew.agency === "SpaceX") {
            const h2 = document.createElement("h2")
            h2.innerHTML = crew.name
            main.appendChild(h2)
            }
        })
    }
    if (selectAgencyDropdown.value === "Axiom Space" ) {
        crew.forEach(crew => {
            if (crew.agency === "Axiom Space") {
            const h2 = document.createElement("h2")
            h2.innerHTML = crew.name
            main.appendChild(h2)
            }
        })
    }
    if (selectAgencyDropdown.value === "Roscosmos" ) {
        crew.forEach(crew => {
            if (crew.agency === "Roscosmos") {
            const h2 = document.createElement("h2")
            h2.innerHTML = crew.name
            main.appendChild(h2)
            }
        })
    }
}


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

