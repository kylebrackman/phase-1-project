// fetching SpaceX API and attempting to get crew info
const selectAgencyDropdown = document.getElementById("selectAgency");
selectAgencyDropdown.addEventListener("onchange", fetchCrewNames)

function fetchCrewNames() {
    fetch("https://api.spacexdata.com/v4/crew")
    .then(res => res.json())
    .then(data => {
        const crewInfo = data
    })
};

function renderCrewInfo(crew) {
    const main = document.querySelector("main")
    main.innerHTML=""
    const selectedAgency = selectAgencyDropdown.value
        crew.forEach(crew => {
            if (crew.agency === selectedAgency) {
                const h2 = document.createElement("h2")
                const img = document.createElement("img")
                const aTag = document.createElement("a")
                aTag.href= crew.wikipedia
                aTag.innerText = `${crew.name + " wikepedia link!"}`
                img.src = `${crew.image}`
                img.addEventListener("mouseover", () => {
                    img.classList.toggle("imgMouseOver")
                })
                img.addEventListener("mouseout",() => {
                    img.classList.toggle("imgMouseOver")
                })
                h2.innerHTML = crew.name
                main.appendChild(h2)
                main.appendChild(img)
                main.appendChild(aTag)
            }
        })
}

let darkMode = false;
let darkModeButton = document.getElementById("darkMode");

darkModeButton.addEventListener("click", changeColorScheme);

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
