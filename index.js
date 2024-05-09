let myLeads =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const fromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(fromLocalStorage){
    myLeads = fromLocalStorage
    render(myLeads)
}

function render (leads){
   let  listItems = " "
   for(i=0; i < leads.length ; i++)
    listItems += `
    <li>
     <a target='-blank' href='${leads[i]}'>${leads[i]}</a>
    </li>
   `
   ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click",function(){
 myLeads.push(inputEl.value)
 localStorage.setItem("myLeads",JSON.stringify(myLeads))
 inputEl.value =" "
 render(myLeads)
})

