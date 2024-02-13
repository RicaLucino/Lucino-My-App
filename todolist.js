const listBox = document.getElementById("listbox");
const listContainer = document.getElementById("list");

function addTask(){
    if(listBox.value === ''){
        alert("Write task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = listBox.value;
        listContainer.appendChild(li);
    }
    
}