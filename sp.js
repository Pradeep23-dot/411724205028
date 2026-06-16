console.log("HELLOOO")
function example()
{
    console.log()
}
const input = document.getElementById("input")
const output = document.getElementById("inputField")
input.addEventListener("input",() =>{
    output.innerHTML = input.value
})
const second = document.createElement("p")
second.textContent = "New Paragraph"
document.body.appendChild(second)
second.remove()