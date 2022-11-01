const spaceXData = "https://api.spacexdata.com/v4/crew"
const selectAgencyDropdown = document.getElementById("selectAgency");
selectAgencyDropdown.addEventListener("change", renderCrewInfo)
const darkModeButton = document.getElementById("darkMode");
darkModeButton.addEventListener("click", changeColorScheme);
let darkMode = false;
let savedCrewData = null

function fetchCrewData() {
    fetch(spaceXData)
        .then(res => res.json())
        .then(data => {
            savedCrewData = data
        })
}

function renderCrewInfo(event) {
    const main = document.querySelector("main")
    main.innerHTML = ""
    const selectedAgency = selectAgencyDropdown.value
    savedCrewData.forEach(crewMember => {
        if (crewMember.agency === selectedAgency) {
            const h2 = document.createElement("h2")
            const img = document.createElement("img")
            const aTag = document.createElement("a")
            aTag.href = crewMember.wikipedia
            aTag.innerText = `${crewMember.name + " wikepedia link!"}`
            img.src = `${crewMember.image}`
            img.addEventListener("mouseover", () => { img.classList.toggle("imgMouseOver") })
            img.addEventListener("mouseout", () => { img.classList.toggle("imgMouseOver") })
            h2.innerHTML = crewMember.name
            main.appendChild(h2)
            main.appendChild(img)
            main.appendChild(aTag)
        }
    })
}

function changeColorScheme() {
    darkMode = !darkMode
    document.body.classList.toggle("darkMode")
    if (!darkMode) {
        darkModeButton.innerText = "Dark Mode"
    }
    else {
        darkModeButton.innerText = "Light Mode"
    }
};

fetchCrewData()

