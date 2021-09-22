//                    Date Display                //
$("#DP-Date-display").text(moment().format('dddd MMMM Do YYYY'));

//                     Time Display               //
setInterval(clocktime, 1000);
function clocktime() {
   var day = new Date();
   var hour = day.getHours();
   var mins = day.getMinutes();
   var sec = day.getSeconds();
   var format = "";

   if(hour == 0 || hour < 12){
    format = "AM";
   } 
   else {
    hour = hour - 12;
    format = "PM";
   }

   hour = (hour < 10) ? "0" + hour : hour;
   mins = (mins < 10) ? "0" + mins : mins;
   sec = (sec < 10) ? "0" + sec : sec;
   
   var timeoutput = hour + ":" + mins + ":" + sec + " " + format;

   document.getElementById("DP-clock").textContent = timeoutput;
};

clocktime();

//               save content button            //
$(".saveBtn").on("click", saveevent);

function saveevent() {
    var timeslot = $(this).parent().attr("id");
    var content = $(this).siblings(".form-control").val();
    localStorage.setItem(timeslot, content);
};

$("#9 .form-control").val(localStorage.getItem("9"));
$("#10 .form-control").val(localStorage.getItem("10"));
$("#11 .form-control").val(localStorage.getItem("11"));
$("#12 .form-control").val(localStorage.getItem("12"));
$("#13 .form-control").val(localStorage.getItem("13"));
$("#14 .form-control").val(localStorage.getItem("14"));
$("#15 .form-control").val(localStorage.getItem("15"));
$("#16 .form-control").val(localStorage.getItem("16"));
$("#17 .form-control").val(localStorage.getItem("17"));

//           Event status indicator             //
function statusindicator() {
    var current = moment().hour();
    var hourslot = $(this).parent().attr("id");
    hourslot = parseInt(hourslot);

    $(".time-block").each(
        function () {
            if (current == hourslot) {
                $(".form-control").siblings().siblings().addClass("present");
            } else if (current < hourslot){
                $(".form-control").siblings().siblings().addClass("future");
            } else {
                $(".form-control").siblings().siblings().addClass("past");
            }
        }
    )

}

statusindicator();

//               Clear button              //
$(".clearbtn").on("click", NewDP);

function NewDP () {
    localStorage.clear();
    location.reload();
}