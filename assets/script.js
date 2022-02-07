var timeArray = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"]
var tasks = $("textarea");
var saveBtn = $(".saveBtn")
var displayTime = function() {
    var time = moment().format('LL');
    $("#currentDay").html(time)
}

$(document).ready(function() {
    displayTime();
});

$("h4").each(function(index) {
    $(this).text(timeArray[index]);
}) 

$("textarea").each(function(index) {

    // add 8 hours due to difference between index number and hour
    if (index + 8 < moment().hours()) {
        $(this).addClass("past")
    }
    else if (index + 8 === moment().hours()) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }

        var loadTask = localStorage.getItem($(this).data("hour"));
        $(this).text(loadTask);
})

var saveTasks = function(event) {
    event.preventDefault();
    localStorage.setItem($(this).siblings("h4").attr("id"), $(this).siblings("textarea").val());
}

saveBtn.on("click", saveTasks)