var container = document.querySelector(".container");
var saveBtn = document.querySelector(".saveBtn");
var current = moment().hour();
var date = document.getElementById("currentDay");

date.textContent = moment().format("dddd, MMMM Do, YYYY");

timeOneDay();

function timeOneDay() {
  for (i = 0; i < 24; i++) {
    var hours = moment().startOf("day").add(i, "hours").format("H");
    var formattedTime = moment()
      .startOf("day")
      .add(i, "hours")
      .format("ha")
      .toString();
    var hrColTxt = formattedTime; // sets the value of hrColTxt to the string corresponding to the index value in the array being looped through
    var rowCon = document.createElement("div");
    var clrBtn = document.createElement("button");
    var hrCols = document.createElement("div"); //creates column for hour text
    var textarea = document.createElement("textarea"); //creates textarea element
    var saveBtn = document.createElement("button"); //creates save button
    var rowId;

    rowCon.setAttribute("id", hours);
    rowCon.setAttribute("class", "row time-block");
    rowId = rowCon.getAttribute("id");
    clrBtn.setAttribute("class", "col  clrBtn");
    hrCols.setAttribute("class", "col hour");
    textarea.setAttribute("class", "col-9  present description");
    saveBtn.setAttribute("class", "col  saveBtn ");

    clrBtn.textContent = "Clear";
    saveBtn.textContent = "Save";
    hrCols.textContent = hrColTxt;

    container.appendChild(rowCon);
    rowCon.appendChild(clrBtn);
    rowCon.appendChild(hrCols);
    rowCon.appendChild(textarea);
    rowCon.appendChild(saveBtn);

    if (parseInt(rowId) < current) {
      textarea.setAttribute("class", "col-9  past description");
    } else if (parseInt(rowCon.id) > current) {
      textarea.setAttribute("class", "col-9  future description");
    }

    saveBtn.addEventListener("click", function (event) {
      event.preventDefault();
      var textarea = event.target.previousSibling;
      var hour = textarea.previousSibling.textContent;
      var row = event.target.parentNode;
      console.log(row.id);
      var text = textarea.value;
      if (text == "") {
        alert("must add text to save");
      }
      localStorage.setItem(hour, text);
    });
  }
}
