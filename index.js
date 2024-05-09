let myLeads =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const fromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn =document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
if(fromLocalStorage){
    myLeads = fromLocalStorage
    render(myLeads)
}
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
})


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

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear
    listItems = ''
    myLeads = []
    render(myLeads)
})

