const input = document.getElementById("input-box");
const button = document.getElementById("button")
const list = document.getElementById("list")


function addTask(){
    if(input.value == '')
    {
        alert("You must write something")
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        var span2 = document.createElement("span");
        span2.innerHTML = "\u00d7";
        li.appendChild(span2);
        }
    input.value = '';
    saveData();
}

list.addEventListener("click",function(e){
    if (e.target.tagName === "LI") 
    { 
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, true)

function saveData(){
    localStorage.setItem("data", list.innerHTML)
}

function showData(){
    let data = localStorage.getItem('data')
    list.innerHTML = data

}


button.addEventListener("click", ()=>{addTask()});
showData();
