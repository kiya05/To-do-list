const input= document.getElementById("input");
const listItems= document.getElementById("list-items");

function addTasks(){

    if(input.value===''){
        
       alert("write something!") ;  
    }
    
    else{
        let li= document.createElement("li");
        li.innerHTML=input.value;
        listItems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7" ;
        li.appendChild(span);

    }
    input.value=" ";
    saveData();
}
 listItems.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 },false);

 function saveData(){
    localStorage.setItem("data",listItems.innerHTML);
 }

 function showTask(){
    listItems.innerHTML = localStorage.getItem("data");
 }
 showTask();


