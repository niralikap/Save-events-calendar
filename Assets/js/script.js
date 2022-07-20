var display3El = $('.display-3');
var leadEl = $('.lead');
var currentDayEl = $('#day-display');
var eventNameEl = $('input[name="event-name-input"]');
var eventNameEl1 = $('input[name="event-name-input1"]');
var eventNameEl2 = $('input[name="event-name-input2"]');
var eventNameEl3 = $('input[name="event-name-input3"]');
var eventNameEl4 = $('input[name="event-name-input4"]');
var eventNameEl5 = $('input[name="event-name-input5"]');
var eventNameEl6 = $('input[name="event-name-input6"]');
var eventNameEl7 = $('input[name="event-name-input7"]');
var eventNameEl8 = $('input[name="event-name-input8"]');
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
//var eventDescEl1 = $("#eventDesc1");
var event2DescEl = $("#eventDesc2");
var event3DescEl = $("#eventDesc3");
var event4DescEl = $("#eventDesc4");
var event5DescEl = $("#eventDesc5");
var event6DescEl = $("#eventDesc6");
var event7DescEl = $("#eventDesc7");
var event8DescEl = $("#eventDesc8");
var event9DescEl = $("#eventDesc9");
var eventDisplayEl = $('#event-display');
var eventNameInputEl = $('#event-name-input');
var appendEventEl = $('#append-event');
var appendEventEl1 = $('#append-event1');
var appendEventEl2 = $('#append-event2');
var appendEventEl3 = $('#append-event3');
var appendEventEl4 = $('#append-event4');
var appendEventEl5 = $('#append-event5');
var appendEventEl6 = $('#append-event6');
var appendEventEl7 = $('#append-event7');
var appendEventEl8 = $('#append-event8');
var shoppingFormEl = $('#shopping-form');
var shoppingFormEl1 = $('#shopping-form1');
var shoppingFormEl2 = $('#shopping-form2');
var shoppingFormEl3 = $('#shopping-form3');
var shoppingFormEl4 = $('#shopping-form4');
var shoppingFormEl5 = $('#shopping-form5');
var shoppingFormEl6 = $('#shopping-form6');
var shoppingFormEl7 = $('#shopping-form7');
var shoppingFormEl8 = $('#shopping-form8');

renderLastEvent();
renderLastEvent1();
renderLastEvent2();
renderLastEvent3();
renderLastEvent4();
renderLastEvent5();
renderLastEvent6();
renderLastEvent7();
renderLastEvent8();



var dayWeek = moment().format("dddd,  MMMM Do")
currentDayEl.text(dayWeek);

//var today = moment();
//$("#1a").text(today.format("MMM Do, YYYY"));

var time = moment().format("HH A");
var time1ToCompare = moment(time1El.text(),["hA"]).format("HH A");
var time2ToCompare = moment(time2El.text(),["hA"]).format("HH A");
var time3ToCompare = moment(time3El.text(),["hA"]).format("HH A");
var time4ToCompare = moment(time4El.text(),["hA"]).format("HH A");
var time5ToCompare = moment(time5El.text(),["hA"]).format("HH A");
var time6ToCompare = moment(time6El.text(),["hA"]).format("HH A");
var time7ToCompare = moment(time7El.text(),["hA"]).format("HH A");
var time8ToCompare = moment(time8El.text(),["hA"]).format("HH A");
var time9ToCompare = moment(time9El.text(),["hA"]).format("HH A");



//timeEl = time.value;
console.log(time); 
console.log(time1El.text());
console.log(time1ToCompare == time);
console.log(time2ToCompare == time);
console.log(time3ToCompare == time);
console.log(time5ToCompare > time);
//console.log(time1ToCompare.isBefore(time));



function CompareTime1(time1ToCompare){
if(time1ToCompare == time){
  event1DescEl.css('background-color', '#ff6961');
}
else if (time1ToCompare < time) {
  event1DescEl.css('background-color', '#adadad');
}
else if (time1ToCompare > time){
  event1DescEl.css('background-color', '#65d486');
}
}

function CompareTime2(time2ToCompare){
  if(time2ToCompare == time){
    event2DescEl.css('background-color', '#ff6961');
  }
  else if (time2ToCompare < time) {
    event2DescEl.css('background-color', '#adadad');
  }
  else if (time2ToCompare > time) {
    event2DescEl.css('background-color', '#65d486');
  }
  }

function CompareTime3(time3ToCompare){
    if(time3ToCompare == time){
      event3DescEl.css('background-color', '#ff6961');
    }
    else if (time3ToCompare < time) {
      event3DescEl.css('background-color', '#adadad');
    }
    else if (time3ToCompare > time){
      event3DescEl.css('background-color', '#65d486');
    }
}

function CompareTime4(time4ToCompare){
      if(time4ToCompare == time){
        event4DescEl.css('background-color', '#ff6961');
      }
      else if (time4ToCompare < time) {
        event4DescEl.css('background-color', '#adadad');
      }
      else if (time4ToCompare > time){
        event4DescEl.css('background-color', '#65d486');
      }
}

function CompareTime5(time5ToCompare){
  if(time5ToCompare == time){
    event5DescEl.css('background-color', '#ff6961');
  }
  else if (time5ToCompare < time) {
    event5DescEl.css('background-color', '#adadad');
  }
  else if (time5ToCompare > time){
    event5DescEl.css('background-color', '#65d486');
    //event5DescEl.addClass('table-success');
  }
}

function CompareTime6(time6ToCompare){
  if(time6ToCompare == time){
    event6DescEl.css('background-color', '#ff6961');
  }
  else if (time6ToCompare < time) {
    event6DescEl.css('background-color', '#adadad');
  }
  else if (time6ToCompare > time){
    event6DescEl.css('background-color', '#65d486');
  }
}

function CompareTime7(time7ToCompare){
  if(time7ToCompare == time){
    event7DescEl.css('background-color', '#ff6961');
  }
  else if (time7ToCompare < time) {
    event7DescEl.css('background-color', '#adadad');
  }
  else if (time7ToCompare > time){
    event7DescEl.css('background-color', '#65d486');
  }
}

function CompareTime8(time8ToCompare){
  if(time8ToCompare == time){
    event8DescEl.css('background-color', '#ff6961');
  }
  else if (time8ToCompare < time) {
    event8DescEl.css('background-color', '#adadad');
  }
  else if (time8ToCompare > time){
    event8DescEl.css('background-color', '#65d486');
  }
}

function CompareTime9(time9ToCompare){
  if(time9ToCompare == time){
    event9DescEl.css('background-color', '#ff6961');
  }
  else if (time9ToCompare < time) {
    event9DescEl.css('background-color', '#adadad');
  }
  else if (time9ToCompare > time){
    event9DescEl.css('background-color', '#65d486');
  }
}

CompareTime1(time1ToCompare);
CompareTime2(time2ToCompare);
CompareTime3(time3ToCompare);
CompareTime4(time4ToCompare);
CompareTime5(time5ToCompare);
CompareTime6(time6ToCompare);
CompareTime7(time7ToCompare);
CompareTime8(time8ToCompare);
CompareTime9(time9ToCompare);



function renderLastEvent() {
  var event = localStorage.getItem("event");
  if (!event) {
    return;
  }

  appendEventEl.textContent = event;
}

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  var event = document.querySelector("#event-name-input").value;
  // select form element by its `name` attribute and get its value
  var eventItem = $(eventNameEl).val();

  //eventNameInputEl.setAttribute("style", "display: none");
  // if there's nothing in the form entered, don't print to the page
  if (!eventItem) {
    console.log('No event added in the calendar!');
    return;
  }
  // print to the page
  appendEventEl.append('<li>' + eventItem + '</li>');

  //appendEventEl.setAttribute("style", "display: block");

  // clear the form input element
  $(eventNameEl).val(''); 
  localStorage.setItem("event", event);
  renderLastEvent();
 
}
// Create a submit event listener on the form element
shoppingFormEl.on('submit', handleFormSubmit);

function renderLastEvent1() {
  var event = localStorage.getItem("event");
  if (!event) {
    return;
  }

  appendEventEl1.textContent = event;
}

function handleFormSubmit1(event) {
  event.preventDefault();
  var event = document.querySelector("#event-name-input1").value;
  // select form element by its `name` attribute and get its value
  var eventItem1 = $(eventNameEl1).val();

  //eventNameInputEl.setAttribute("style", "display: none");
  // if there's nothing in the form entered, don't print to the page
  if (!eventItem1) {
    console.log('No event added in the calendar!');
    return;
  }
  // print to the page
  appendEventEl1.append('<li>' + eventItem1 + '</li>');

  //appendEventEl.setAttribute("style", "display: block");

  // clear the form input element
  $(eventNameEl1).val(''); 
  localStorage.setItem("event", event);
  renderLastEvent1();
 
}
// Create a submit event listener on the form element
shoppingFormEl1.on('submit', handleFormSubmit1);

function renderLastEvent2() {
  var event = localStorage.getItem("event");
  if (!event) {
    return;
  }

  appendEventEl2.textContent = event;
}

function handleFormSubmit2(event) {
  event.preventDefault();
  var event = document.querySelector("#event-name-input2").value;
  // select form element by its `name` attribute and get its value
  var eventItem2 = $(eventNameEl2).val();

  //eventNameInputEl.setAttribute("style", "display: none");
  // if there's nothing in the form entered, don't print to the page
  if (!eventItem2) {
    console.log('No event added in the calendar!');
    return;
  }
  // print to the page
  appendEventEl2.append('<li>' + eventItem2 + '</li>');

  //appendEventEl.setAttribute("style", "display: block");

  // clear the form input element
  $(eventNameEl2).val(''); 
  localStorage.setItem("event", event);
  renderLastEvent2();
}

// Create a submit event listener on the form element
shoppingFormEl2.on('submit', handleFormSubmit2);

function renderLastEvent3() {
  var event = localStorage.getItem("event");
  if (!event) {
    return;
  }

  appendEventEl3.textContent = event;
}

function handleFormSubmit3(event) {
  event.preventDefault();
  var event = document.querySelector("#event-name-input3").value;
  // select form element by its `name` attribute and get its value
  var eventItem3 = $(eventNameEl3).val();

  //eventNameInputEl.setAttribute("style", "display: none");
  // if there's nothing in the form entered, don't print to the page
  if (!eventItem3) {
    console.log('No event added in the calendar!');
    return;
  }
  // print to the page
  appendEventEl3.append('<li>' + eventItem3 + '</li>');

  //appendEventEl.setAttribute("style", "display: block");

  // clear the form input element
  $(eventNameEl3).val(''); 
  localStorage.setItem("event", event);
  renderLastEvent3();
}

// Create a submit event listener on the form element
shoppingFormEl3.on('submit', handleFormSubmit3);

function renderLastEvent4() {
  var event = localStorage.getItem("event");
  if (!event) {
    return;
  }

  appendEventEl4.textContent = event;
}

function handleFormSubmit4(event) {
  event.preventDefault();
  var event = document.querySelector("#event-name-input4").value;
  // select form element by its `name` attribute and get its value
  var eventItem4 = $(eventNameEl4).val();

  //eventNameInputEl.setAttribute("style", "display: none");
  // if there's nothing in the form entered, don't print to the page
  if (!eventItem4) {
    console.log('No event added in the calendar!');
    return;
  }
  // print to the page
  appendEventEl4.append('<li>' + eventItem4 + '</li>');

  //appendEventEl.setAttribute("style", "display: block");

  // clear the form input element
  $(eventNameEl4).val(''); 
  localStorage.setItem("event", event);
  renderLastEvent4();
}

// Create a submit event listener on the form element
shoppingFormEl4.on('submit', handleFormSubmit4);

function renderLastEvent5() {
  var event = localStorage.getItem("event");
  if (!event) {
    return;
  }

  appendEventEl5.textContent = event;
}

function handleFormSubmit5(event) {
  event.preventDefault();
  var event = document.querySelector("#event-name-input5").value;
  // select form element by its `name` attribute and get its value
  var eventItem5 = $(eventNameEl5).val();

  //eventNameInputEl.setAttribute("style", "display: none");
  // if there's nothing in the form entered, don't print to the page
  if (!eventItem5) {
    console.log('No event added in the calendar!');
    return;
  }
  // print to the page
  appendEventEl5.append('<li>' + eventItem5 + '</li>');

  //appendEventEl.setAttribute("style", "display: block");

  // clear the form input element
  $(eventNameEl5).val(''); 
  localStorage.setItem("event", event);
  renderLastEvent5();
}
// Create a submit event listener on the form element
shoppingFormEl5.on('submit', handleFormSubmit5);

function renderLastEvent6() {
  var event = localStorage.getItem("event");
  if (!event) {
    return;
  }

  appendEventEl6.textContent = event;
}

function handleFormSubmit6(event) {
  event.preventDefault();
  var event = document.querySelector("#event-name-input6").value;
  // select form element by its `name` attribute and get its value
  var eventItem6 = $(eventNameEl6).val();

  //eventNameInputEl.setAttribute("style", "display: none");
  // if there's nothing in the form entered, don't print to the page
  if (!eventItem6) {
    console.log('No event added in the calendar!');
    return;
  }
  // print to the page
  appendEventEl6.append('<li>' + eventItem6 + '</li>');

  //appendEventEl.setAttribute("style", "display: block");

  // clear the form input element
  $(eventNameEl6).val(''); 
  localStorage.setItem("event", event);
  renderLastEvent6();
}

// Create a submit event listener on the form element
shoppingFormEl6.on('submit', handleFormSubmit6);

function renderLastEvent7() {
  var event = localStorage.getItem("event");
  if (!event) {
    return;
  }

  appendEventEl7.textContent = event;
}

function handleFormSubmit7(event) {
  event.preventDefault();
  var event = document.querySelector("#event-name-input7").value;
  // select form element by its `name` attribute and get its value
  var eventItem7 = $(eventNameEl7).val();

  //eventNameInputEl.setAttribute("style", "display: none");
  // if there's nothing in the form entered, don't print to the page
  if (!eventItem7) {
    console.log('No event added in the calendar!');
    return;
  }
  // print to the page
  appendEventEl7.append('<li>' + eventItem7 + '</li>');

  //appendEventEl.setAttribute("style", "display: block");

  // clear the form input element
  $(eventNameEl7).val(''); 
  localStorage.setItem("event", event);
  renderLastEvent7();
}
// Create a submit event listener on the form element
shoppingFormEl7.on('submit', handleFormSubmit7);

function renderLastEvent8() {
  var event = localStorage.getItem("event");
  if (!event) {
    return;
  }

  appendEventEl8.textContent = event;
}

function handleFormSubmit8(event) {
  event.preventDefault();
  var event = document.querySelector("#event-name-input8").value;
  // select form element by its `name` attribute and get its value
  var eventItem8 = $(eventNameEl8).val();

  //eventNameInputEl.setAttribute("style", "display: none");
  // if there's nothing in the form entered, don't print to the page
  if (!eventItem8) {
    console.log('No event added in the calendar!');
    return;
  }
  // print to the page
  appendEventEl8.append('<li>' + eventItem8 + '</li>');

  //appendEventEl.setAttribute("style", "display: block");

  // clear the form input element
  $(eventNameEl8).val(''); 
  localStorage.setItem("event", event);
  renderLastEvent8();
}
// Create a submit event listener on the form element
shoppingFormEl8.on('submit', handleFormSubmit8);
