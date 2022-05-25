const NoteList = document.querySelector(".lists");

var dataString = localStorage.getItem("New Note");
var note = JSON.parse(dataString); 

const note_title = document.getElementById("note-title");
const note_text = document.getElementById("note-text");
const note_time = document.getElementById("note-time");

function turnPage() {
    window.location.href="text.html";
}

function togglePopup(index) {
    document.getElementById("popup-1").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
    note_title.innerHTML = note[index].title;
    note_text.innerHTML = note[index].description;
    note_time.innerHTML = note[index].time;
}

showTasks();

function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Note");
    if(getLocalStorageData == null){
        note = [];
    }   
    let newLiTag = "";
    for(let index=0; index<note.length; index++) {
      let element = note[index].title;
      newLiTag +=   `<li class="note-list"><p onclick="togglePopup(${index})">${element}</p><div class="icon"><button><i class="fa-solid fa-bookmark"></i></button><button><i class="fa-solid fa-pen-to-square"></i></button> <button><i class="fa-solid fa-circle-down"></i></button><button onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></button></div></li>`
    };
    
    NoteList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
}
// delete task function
function deleteTask(index){
    note.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Note", JSON.stringify(note));
    showTasks(); //call the showTasks function
}
