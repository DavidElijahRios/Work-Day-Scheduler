//Criteria to meet:
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var present = document.querySelector(".time-block");
var past = document.querySelector(".time-block");
var future = document.querySelector(".time-block");


//Need a save Button Variable (need to still create button in html)
var saveBtn = $(".saveButton");


//need to use moment.js to display time on webpage
var today = moment().format("MMMM Do, YYYY");
$("#currentDay").text(today);


function timeblocks() {
//Variable to hold the current time
var currentHour = moment().hour();


//function for time block color changes
$(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("hour"));
    console.log(timeBlockHour)
    console.log(currentHour)
    // conditional to check past present or future
    if (currentHour === timeBlockHour) {
        $(this).addClass("present");
    } else if (currentHour < timeBlockHour) {  
        $(this).addClass("past");
    } else if (currentHour > timeBlockHour) {
        $(this).addClass("future");
    }
 })
};       

//need to create an event listener function for click event for saving a new item
saveBtn.on("click", function() {

    var slot = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    // With used variables the text from the event will save item into local storage
  localStorage.setItem(slot, description);
})

// This function will keep items persisted on webpage after refresh
function savedEvents() {

    $(".hour").each(function() {

    })
}

//Running functions

timeblocks();

