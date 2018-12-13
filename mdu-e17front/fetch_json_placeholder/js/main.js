"use strict";
document.addEventListener("DOMContentLoaded", function(){
  // the DOM is fully loaded
  console.log("Document ready!");

  fetch('http://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);

    for (var i = 0; i < json.length; i++) {
      var post = json[i];
      document.querySelector("#postsGrid").innerHTML += post.title + "<br>";
    }
  });
});
