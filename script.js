const searchName = document.getElementById("search")

searchName.addEventListener("submit", function(e) {
    e.preventDefault()
    alert("working!")
})

fetch("https://api.spacexdata.com/v4/crew")
.then(res => res.json())
.then(data => console.log(data))