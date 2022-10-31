const spaceXData = "https://api.spacexdata.com/v4/crew"
const selectAgencyDropdown = document.getElementById("selectAgency");
selectAgencyDropdown.addEventListener("change", fetchCrewData)
const darkModeButton = document.getElementById("darkMode");
darkModeButton.addEventListener("click", changeColorScheme);
let darkMode = false;

function fetchCrewData() {
    let savedCrewData = null
    if (savedCrewData === null) {
        fetch(spaceXData)
            .then(res => res.json())
            .then(data => {
                let savedCrewData = data
                // this is passing savedCrewData to the above variable up top, then can be used below
                // in the else statement?
                renderCrewInfo(savedCrewData)
            })
    }
    else {
        renderCrewInfo(savedCrewData)
    }
};

function renderCrewInfo(crew) {
    const main = document.querySelector("main")
    main.innerHTML = ""
    const selectedAgency = selectAgencyDropdown.value
    crew.forEach(crew => {
        if (crew.agency === selectedAgency) {
            const h2 = document.createElement("h2")
            const img = document.createElement("img")
            const aTag = document.createElement("a")
            aTag.href = crew.wikipedia
            aTag.innerText = `${crew.name + " wikepedia link!"}`
            img.src = `${crew.image}`
            img.addEventListener("mouseover", () => {img.classList.toggle("imgMouseOver")})
            img.addEventListener("mouseout", () => {img.classList.toggle("imgMouseOver")})
            h2.innerHTML = crew.name
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

