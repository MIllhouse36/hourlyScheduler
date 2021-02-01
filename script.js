var container = document.querySelector(".container");
var date = document.getElementById("currentDay");
var currentHour = (moment().startOf("hour").format("ha"));
var time = [];
var saveBtn = document.querySelector(".saveBtn");
date.textContent = moment().format("dddd, MMMM Do, YYYY");
console.log(currentHour)
timeOneDay();

function timeOneDay() { //generates strings of the indivdual hours based off of the start of the day and pushes them into an array
    for (i = 0; i < 25; i++) {
        var formattedTime = moment().startOf("day").add(i, "hours").format("ha");
        time.push(formattedTime);
    } makeBlx();
}

function makeBlx() {

    for (var i = 0; i < time.length - 1; i++) { //Loops through length of time array 
        
        var hrColTxt = time[i];// sets the value of hrColTxt to the string corresponding to the index value in the array being looped through
        var rowCon = document.createElement("div");
        var hrCols = document.createElement("div");//creates column that holds hours
        var textarea = document.createElement("textarea");//creates textarea element
        var saveBtn = document.createElement("button");//creates save button
        var clrBtn = document.createElement("button");
        hrCols.textContent = hrColTxt;//sets the textcontent of hrCols div to index string corresponding to hrColTxt
        saveBtn.textContent = "Save";//sets starting text of button
        clrBtn.textContent = "Clear";
        rowCon.setAttribute("class", "row time-block mb-5")
        hrCols.setAttribute("class", "col hour");
        textarea.setAttribute("class", "col-9  future description");
        saveBtn.setAttribute("class", "col  saveBtn ");
        clrBtn.setAttribute("class", "col  clrBtn" )

        container.appendChild(rowCon);
        rowCon.appendChild(hrCols);
        rowCon.appendChild(textarea);
        rowCon.appendChild(clrBtn);
        rowCon.appendChild(saveBtn);

        
        if(!localStorage.getItem(hrCols.textContent)){
            localStorage.setItem(hrCols.textContent, "")
        }
        else{
            var todo = localStorage.getItem(hrCols.textContent);
            textarea.value = todo; 
        };

        if (hrColTxt === currentHour ) {
            textarea.setAttribute("class", "col-9  present description")
        }
        if ((hrColTxt) < currentHour) {
            textarea.setAttribute("class", "col-9  past description")
           
        }
        
        saveBtn.addEventListener("click", function (event) {
            event.preventDefault();
        
         var hour = event.target.parentNode.textContent;
         var textarea = event.target.previousSibling;
         var text = textarea.value;
         if (text == "") {
            alert("must add text to save")
          }
         localStorage.setItem(hour, text);

         });
    };
}
