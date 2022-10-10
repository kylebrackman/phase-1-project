const searchName = document.getElementById("search")

searchName.addEventListener("submit", function(e) {
    e.preventDefault()
    alert("working!")
})

const selectAgencyDropdown = document.getElementById("selectAgency")
console.log(selectAgencyDropdown)

selectAgencyDropdown.onchange = function(){
    console.log("test change")
}


function changeAgency(){
}

fetch("https://api.spacexdata.com/v4/crew")
.then(res => res.json())
.then(data => console.log(data))