var display3El = $('.display-3');
var leadEl = $('.lead');
var currentDayEl = $('#day-display');
var eventNameEl = $('input[name="enter-event"]');
var eventColor = $('.form-input');
var timeEl = $('#time-hh');
var time1El = $('#time-h1');
var time2El = $('#time-h2');
var time3El = $('#time-h3');
var time4El = $('#time-h4');
var time5El = $('#time-h5');
var time6El = $('#time-h6');
var time7El = $('#time-h7');
var time8El = $('#time-h8');
var time9El = $('#time-h9');
var event1DescEl = $('#eventDesc1');
var saveEventEl = $('#save');
var eventsListEl = $('#events-list');
var eventDescEl = $(".eventDesc");
var eventDisplayEl = $('#event-display');
var eventNameInputEl = $('#event-name-input');


// handle displaying the time
/*function displayTime() {
    var rightNow = moment().format('DDD, MMM DD');
    currentDayEl.text(rightNow);
  }*/

var dayWeek = moment().format("dddd,  MMMM Do")
currentDayEl.text(dayWeek);

//var today = moment();
//$("#1a").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh A");
var time1ToCompare = moment(time1El.text(),["hA"]).format("hh A");
var time2ToCompare = moment(time2El.text(),["hA"]).format("hh A");
var time3ToCompare = moment(time3El.text(),["hA"]).format("hh A");
var time4ToCompare = moment(time4El.text(),["hA"]).format("hh A");
var time5ToCompare = moment(time5El.text(),["hA"]).format("hh A");
var time6ToCompare = moment(time6El.text(),["hA"]).format("hh A");
var time7ToCompare = moment(time7El.text(),["hA"]).format("hh A");
var time8ToCompare = moment(time8El.text(),["hA"]).format("hh A");
var time9ToCompare = moment(time9El.text(),["hA"]).format("hh A");
//timeEl = time.value;
console.log(time); 
console.log(time1El.text());
console.log(time1ToCompare == time);
console.log(time2ToCompare == time);
console.log(time3ToCompare == time);
console.log(eventDescEl);
//console.log(time1ToCompare.isBefore(time));
function CompareTime(time1ToCompare){
if(time1ToCompare == time){
  event1DescEl.css('background-color', 'red');
}
else if (time1ToCompare < time) {
  event1DescEl.css('background-color', 'grey');
}
else if (time1ToCompare > time){
  event1DescEl.css('background-color', 'green');
}
}

/*function CompareTime(time2ToCompare){
  if(time2ToCompare == time){
    eventDescEl.css('background-color', 'red');
  }
  else if (time2ToCompare.isBefore(time)) {
    eventDescEl.css('background-color', 'grey');
  }
  else if (time2ToCompare.isAfter(time)){
    eventDescEl.css('background-color', 'green');
  }
  }

function CompareTime(time3ToCompare){
    if(time3ToCompare == time){
      eventDescEl.css('background-color', 'red');
    }
    else if (time1ToCompare.isBefore(time)) {
      eventDescEl.css('background-color', 'grey');
    }
    else if (time1ToCompare.isAfter(time)){
      eventDescEl.css('background-color', 'green');
    }
}

function CompareTime(time4ToCompare){
      if(time4ToCompare == time){
        eventDescEl.css('background-color', 'red');
      }
      else if (time1ToCompare.isBefore(time)) {
        eventDescEl.css('background-color', 'grey');
      }
      else if (time1ToCompare.isAfter(time)){
        eventDescEl.css('background-color', 'green');
      }
}

CompareTime(time1ToCompare);
CompareTime(time2ToCompare);
CompareTime(time3ToCompare);
CompareTime(time4ToCompare);
*/

/*function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log('Enter Event:', eventNameEl.val());

}

// Submit event on the form


var printSkills = function (name) {
  var listEl = $('<li>');
  var listDetail = name;
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(eventsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var eventInput = eventNameEl.val();

  printSkills(eventInput);

};
*/
function printEventData(event) {
  var eventRowEl = $('<tr>');

  var eventNameTdEl = $('<td>').addClass('p-2').text(event);

  eventRowEl.append(
    eventNameTdEl
  );


  eventtDisplayEl.append(eventRowEl);
}

function handleEventSubmit(event) {
  event.preventDefault();

  var eventName = eventNameInputEl.val().trim();

  printEventData(eventName);

}

saveEventEl.on('Save', handleEventSubmit);