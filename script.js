const testSubmit = document.getElementById(search)
console.log(testSubmit)

testSubmit.addEventListener("submit", function(e) {
    e.preventDefault()
    alert("working!")
})