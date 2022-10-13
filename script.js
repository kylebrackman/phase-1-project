// fetching SpaceX API and attempting to get crew info
const selectAgencyDropdown = document.getElementById("selectAgency");
selectAgencyDropdown.onchange = fetchCrewNames
function fetchCrewNames() {
    fetch("https://api.spacexdata.com/v4/crew")
    .then(res => res.json())
    .then(data => renderCrewInfo(data))
};

function renderCrewInfo(crew) {
    const main = document.querySelector("main")
    main.innerHTML=""
    if (selectAgencyDropdown.value === "NASA" ) {
        crew.forEach(crew => {
            if (crew.agency === "NASA") {
            const h2 = document.createElement("h2")
            const img = document.createElement("img")
            const aTag = document.createElement("a")
            aTag.href= crew.wikipedia
            aTag.innerText = `${crew.name + " wikepedia link!"}`
            img.src = `${crew.image}`
            h2.innerHTML = crew.name
            main.appendChild(h2)
            main.appendChild(img)
            main.appendChild(aTag)
            }
        })
    }
    if (selectAgencyDropdown.value === "ESA" ) {
        crew.forEach(crew => {
            if (crew.agency === "ESA") {
            const h2 = document.createElement("h2")
            const img = document.createElement("img")
            const aTag = document.createElement("a")
            aTag.href= crew.wikipedia
            aTag.innerText = `${crew.name + " wikepedia link!"}`
            img.src = `${crew.image}`
            h2.innerHTML = crew.name
            main.appendChild(h2)
            main.appendChild(img)
            main.appendChild(aTag)
            }
        })
    }
    if (selectAgencyDropdown.value === "JAXA" ) {
        crew.forEach(crew => {
            if (crew.agency === "JAXA") {
            const h2 = document.createElement("h2")
            const img = document.createElement("img")
            const aTag = document.createElement("a")
            aTag.href= crew.wikipedia
            aTag.innerText = `${crew.name + " wikepedia link!"}`
            img.src = `${crew.image}`
            h2.innerHTML = crew.name
            main.appendChild(h2)
            main.appendChild(img)
            main.appendChild(aTag)
            }
        })
    }
    if (selectAgencyDropdown.value === "SpaceX" ) {
        crew.forEach(crew => {
            if (crew.agency === "SpaceX") {
            const h2 = document.createElement("h2")
            const img = document.createElement("img")
            const aTag = document.createElement("a")
            aTag.href= crew.wikipedia
            aTag.innerText = `${crew.name + " wikepedia link!"}`
            img.src = `${crew.image}`
            h2.innerHTML = crew.name
            main.appendChild(h2)
            main.appendChild(img)
            main.appendChild(aTag)
            }
        })
    }
    if (selectAgencyDropdown.value === "Axiom Space" ) {
        crew.forEach(crew => {
            if (crew.agency === "Axiom Space") {
            const h2 = document.createElement("h2")
            const img = document.createElement("img")
            const aTag = document.createElement("a")
            aTag.href= crew.wikipedia
            aTag.innerText = `${crew.name + " wikepedia link!"}`
            img.src = `${crew.image}`
            h2.innerHTML = crew.name
            main.appendChild(h2)
            main.appendChild(img)
            main.appendChild(aTag)
            }
        })
    }
    if (selectAgencyDropdown.value === "Roscosmos" ) {
        crew.forEach(crew => {
            if (crew.agency === "Roscosmos") {
            const h2 = document.createElement("h2")
            const img = document.createElement("img")
            const aTag = document.createElement("a")
            aTag.href= crew.wikipedia
            aTag.innerText = `${crew.name + " wikepedia link!"}`
            img.src = `${crew.image}`
            h2.innerHTML = crew.name
            main.appendChild(h2)
            main.appendChild(img)
            main.appendChild(aTag)
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


// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById("search").addEventListener("submit", (e) => {
//         e.preventDefault()
//         searchForCrewMember
//     })
// })

// function searchForCrewMember(name) {
//     fetch("https://api.spacexdata.com/v4/crew")
//     .then(res => res.json())
//     .then (data => searchName(data))
// }

// function searchName(crew) {
//     const searchResult = document.getElementById("searchResult")
//     if (e.target.crewMemberSearch.value === crew.name) {
//         console.log(crew.name)
//     }
// }