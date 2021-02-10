const cntr = document.querySelector(".container");
const current = moment().hour();
const date = document.getElementById("currentDay");
let keys = [];
date.textContent = moment().format("dddd, MMMM Do, YYYY");

timeOneDay();
function timeOneDay() {
  for (let i = 0; i < 24; i++) {
    const hrs = moment().startOf("day").add(i, "hours").format("H");
    let formattedTime = moment()
      .startOf("day")
      .add(i, "hours")
      .format("ha")
      .toString();

    keys.push(formattedTime);

    const row = document.createElement("div");
    const clrBtn = document.createElement("button");
    const hrCols = document.createElement("div"); //creates column for hour text
    const textarea = document.createElement("textarea"); //creates textarea element
    const saveBtn = document.createElement("button"); //creates save button

    row.setAttribute("id", hrs);
    row.setAttribute("class", "row time-block");

    clrBtn.setAttribute("class", "col  clrBtn");
    hrCols.setAttribute("class", "col hour");
    textarea.setAttribute("class", "col-9  present description");
    textarea.setAttribute("id", formattedTime);
    saveBtn.setAttribute("class", "col  saveBtn ");

    clrBtn.textContent = "Clear";
    saveBtn.textContent = "Save";
    hrCols.textContent = formattedTime;

    cntr.appendChild(row);
    row.appendChild(clrBtn);
    row.appendChild(hrCols);
    row.appendChild(textarea);
    row.appendChild(saveBtn);

    let rowId = row.getAttribute("id");
    if (parseInt(rowId) < current) {
      textarea.setAttribute("class", "col-9  past description");
    } else if (parseInt(rowId) > current) {
      textarea.setAttribute("class", "col-9  future description");
    }

    saveBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const textarea = event.target.previousSibling;
      console.log(textarea.id);
      const text = textarea.value;
      if (text === "") {
        alert("must add text to save");
      }
      localStorage.setItem(textarea.id, text);
      location.reload();
    });

    clrBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const textarea = event.target.parentNode.childNodes[2];
      console.log(textarea.id);
      const text = textarea.value;
      if (text === "") {
        alert("must add text to save");
      }
      localStorage.removeItem(textarea.id);
      location.reload();
    });
  }

  getLocal();
}

function getLocal() {
  for (let i = 0, len = keys.length; i < len; ++i) {
    let row = document.getElementById(keys[i]);
    row.textContent = localStorage.getItem(row.id);
  }
}
