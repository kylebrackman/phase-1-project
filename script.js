const searchName = document.getElementById("search")

searchName.addEventListener("submit", function(e) {
    e.preventDefault()
    alert("working!")
})

const selectAgencyDropdown = document.getElementById("selectAgency")

selectAgencyDropdown.onchange = function(){
    fetch("https://api.spacexdata.com/v4/crew")
    .then(res => res.json())
    .then(data => console.log(data))
}

function changeAgency(agencyName){
    if (data.agency === agencyName) {
        return filterCrew(agencyName)
    }
}

function filterCrew() {
    let nasaCrew = data.filter(data => data.agency === "NASA")
    console.log(nasaCrew)
}



// fetch("https://api.spacexdata.com/v4/crew")
// .then(res => res.json())
// .then(data => console.log(data))