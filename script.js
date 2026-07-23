let myLeads = []
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ulEl")
const inputButton = document.querySelector("#input-btn")
inputButton.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLead()
    inputEl.value = ""
})
function renderLead() {
    let listItem = `
    <li>
        <a href="${inputEl.value}">
            ${inputEl.value}
        </a>
    </li>
    `
    ulEl.innerHTML += listItem
}