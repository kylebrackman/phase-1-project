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

// function filterCrew(agencyName) {
//     let crew = data.filter(data => data.agency === "NASA")
//     console.log(nasaCrew)
// }



// fetch("https://api.spacexdata.com/v4/crew")
// .then(res => res.json())
// .then(data => console.log(data))