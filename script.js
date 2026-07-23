let myLeads = ["hey","hello","hi"]
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ulEl")
const inputButton = document.querySelector("#input-btn")
inputButton.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
for (let index = 0; index < myLeads.length; index++) {
    const element = myLeads[index];
    // console.log(element)
    // ulEl.innerHTML += `<li>` + element + `</li>`
    const li = document.createElement("li")
    li.textContent = element
    ulEl.append(li)
}
//hello