"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");
  document.addEventListener('prechange', function(event) {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  });
});