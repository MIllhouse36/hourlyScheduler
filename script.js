var container = document.querySelector(".container");
var date = document.getElementById("currentDay");
// var currentHour = (moment().startOf("hour").format("ha"));
var saveBtn = document.querySelector(".saveBtn");
date.textContent = moment().format("dddd, MMMM Do, YYYY");
var current = (moment().hour())

timeOneDay();
// idfortime();

function timeOneDay() { //generates strings of the indivdual hours based off of the start of the day and pushes them into an array
    for (i = 0; i < 24; i++) {
        var hours = moment().startOf("day").add(i, "hours").format("H")
        // console.log(hours)
        var formattedTime = moment().startOf("day").add(i, "hours").format("ha").toString();
        // console.log(formattedTime)
        // time.push(formattedTime);
        var hrColTxt = formattedTime;// sets the value of hrColTxt to the string corresponding to the index value in the array being looped through
    
        var rowCon = document.createElement("div");
        rowCon.setAttribute("class", "row time-block")
        rowCon.setAttribute("id", hours)
       
        var hrCols = document.createElement("div");//creates column for hour text
        hrCols.setAttribute("class", "col hour");

        var textarea = document.createElement("textarea");//creates textarea element
        textarea.setAttribute("class", "col-9  present description");
        
        var saveBtn = document.createElement("button");//creates save button
        saveBtn.textContent = "Save";
        saveBtn.setAttribute("class", "col  saveBtn ");

        var clrBtn = document.createElement("button");
        clrBtn.textContent = "Clear";
        clrBtn.setAttribute("class", "col  clrBtn" )

        container.appendChild(rowCon);
        rowCon.appendChild(clrBtn);
        rowCon.appendChild(hrCols);
        rowCon.appendChild(textarea);
        rowCon.appendChild(saveBtn);

        hrCols.textContent = hrColTxt;
        console.log(hrColTxt);
        console.log(rowCon.id);        

        if (parseInt(rowCon.id) < current) {
            textarea.setAttribute("class", "col-9  past description")
        }

        else if (parseInt(rowCon.id) > current) {
            textarea.setAttribute("class", "col-9  future description")
           
        }

        saveBtn.addEventListener("click", function (event) {
            event.preventDefault();
            var textarea = event.target.previousSibling;
            var hour = textarea.previousSibling.textContent;
            var row = event.target.parentNode;
            // console.log(row.id)
         var text = textarea.value;
         if (text == "") {
            alert("must add text to save")
          }
         localStorage.setItem(hour, text);

         });
        
    } 
  
}


