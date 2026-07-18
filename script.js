let myLeads = ["hey","hello","hi"]
const inputEl = document.querySelector("#input-el")
const inputButton = document.querySelector("#input-btn")
inputButton.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
for (let index = 0; index < myLeads.length; index++) {
    const element = myLeads[index];
    console.log(element)
}
