var container = document.querySelector(".container");
var currentDay = document.getElementById("currentDay");
var currentHour = parseInt(moment().startOf("hour").format("H:mm"));
var time = [];
var saveBtn = document.querySelector(".saveBtn");
currentDay.textContent = moment().format("dddd, MMMM Do, YYYY");

timeOneDay();

function timeOneDay() { //generates strings of the indivdual hours based off of the start of the day and pushes them into an array
    for (i = 0; i < 19; i++) {
        var formattedTime = moment().startOf("day").add(i, "hours").format("H:mm");
        time.push(formattedTime);
    } makeBlx();
}

function renderLastEntry() {
    var textarea = localStorage.getItem(time[i], textarea);
    if (!textarea) {
        return;
    }
}

function makeBlx() {

    for (var i = 0; i < time.length - 1; i++) { //Loops through length of time array 
    
        var hrColTxt = time[i];// sets the value of hrColTxt to the string corresponding to the index value in the array being looped through
        var hrCols = document.createElement("div");//creates column that holds hours
        var textarea = document.createElement("textarea");//creates textarea element
        var saveBtn = document.createElement("button");//creates save button

        hrCols.textContent = hrColTxt;//sets the textcontent of hrCols div to index string corresponding to hrColTxt
        saveBtn.textContent = "Save";//sets starting text of button

        hrCols.setAttribute("class", "row justify-content-center ");
        textarea.setAttribute("class", "hour future col-8 ");
        saveBtn.setAttribute("class", "saveBtn ");

        container.appendChild(hrCols)
        hrCols.appendChild(textarea)
        hrCols.appendChild(saveBtn)

        if (parseInt(hrColTxt) === currentHour) {
            textarea.setAttribute("class", "hour present col-8")
        }
        if (parseInt(hrColTxt) < currentHour) {
            textarea.setAttribute("class", "hour past col-8")
        }

    };
}
// saveBtn.addEventListener("click", function (event) {
//     event.preventDefault();


//  var index = event.target.parentNode.children[i]
//  var hour = event.target.parentNode.children[hour - 2];
//  var textarea = event.target.parentNode.children[hour - 1];
//  var textarea = event.target.parentNode.children[i].textContent;
//  if (textarea === "") {
//     alert("must add text to save")
//   }
//  localStorage.setItem(hour, textarea);
//  renderLastEntry();
//  });
