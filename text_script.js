function returnPage() {
    window.location.href="index.html";
}

const inputBox = document.querySelector(".header input");
const addBtn = document.querySelector(".add-btn");

var dataString = localStorage.getItem("New Note");
var note = JSON.parse(dataString); 

var d = new Date();// thoi gian hien tai
var ngay = d.getDate();
var thang = d.getMonth() + 1;
var nam = d.getFullYear();
var gio = d.getHours();
var phut = d.getMinutes();
var giay = d.getSeconds();
var sngay = ngay + '/' + thang + '/' + nam + " " + gio + ":" + phut + ":" + giay;


addBtn.onclick = ()=>{ //when user click on plus icon button
    let userEnteredValue = inputBox.value; //getting input field value

    let getLocalStorageData = localStorage.getItem("New Note"); //getting localstorage
    if(getLocalStorageData == null){ //if localstorage has no data
        note = []; //create a blank array
    }
    note.push({
      title:userEnteredValue,
      description:tinymce.get("myTextarea").getContent(),
      time:sngay
    }); //pushing or adding new value in array
    localStorage.setItem("New Note", JSON.stringify(note)); //transforming js object into a json string
    returnPage();
}
