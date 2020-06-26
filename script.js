var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do, YYYY");
var container = document.querySelector(".container");
//var hoursPerDay = 25;
var time = [];
var futureTime = [];
var currentHour = parseInt(moment().startOf("hour").format("hA"));
var button = document.querySelector(".saveBtn");
timeOneDay();
function timeOneDay() {
    for (i = 9; i < 19; i++) {
        var formattedTime = moment().startOf("day").add(i, "hours").format("hA");
        time.push(formattedTime);
        // console.log(formattedTime)
        // console.log(time)
    }
    makeTextblocks();
}
function renderLastEntry() {
    var textarea = localStorage.getItem(time[i], textarea);
    if (!textarea) {
        return;
    }
}
function makeTextblocks() {
    console.log(time)
    for (var i = 0; i < time.length - 1; i++) {
        var textBlock = time[i];
        var textarea = document.createElement("textarea");
        var newDiv = document.createElement("div");
        var button = document.createElement("button");
        newDiv.textContent = textBlock;
        button.textContent = "Save";
        newDiv.setAttribute("class", "hour text-center pt-3 col-2");
        textarea.setAttribute("class", "hour future textarea col-8 ");
        textarea.setAttribute("id", "textarea");
        textarea.querySelector("#textarea")
        button.setAttribute("class", "saveBtn i:hover col-2");
        container.appendChild(newDiv)
        container.appendChild(textarea)
        container.appendChild(button)
        if (parseInt(textBlock) === currentHour) {
            textarea.setAttribute("class", "hour present textarea col-8 ")
        }
        if (parseInt(textBlock) < currentHour) {
            textarea.setAttribute("class", "hour past textarea col-8 ")
        }
        button.addEventListener("click", function (event) {
            event.preventDefault();
            var index = event.target.parentNode.children.indexOf(event.target)
            var hour = event.target.parentNode.children[hour-2];
            var textarea = event.target.parentNode.children[hour-1];
            //var textarea = event.target.parentNode.children[i].textContent;
            if (textarea === "") {
                alert("must add text to save")
            }
            localStorage.setItem(hour, textarea);
            renderLastEntry();
        })
    };
}