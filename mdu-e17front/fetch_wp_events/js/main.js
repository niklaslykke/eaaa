"use strict";
$(function() {
  fetch('http://events.cederdorff.com/wp-json/tribe/events/v1/events')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendEvents(json.events);
    });

  function appendEvents(events) {
    console.log(events);

    for (var i = 0; i < events.length; i++) {
      let event = events[i];
      event.start = event.start_date;
      event.end = event.end_date;
    }
    $('#calendar').fullCalendar({
      events: events
    });
  }
});