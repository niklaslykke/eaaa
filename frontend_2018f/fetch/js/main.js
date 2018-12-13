const doc = document;

doc.addEventListener("DOMContentLoaded", function(){
  // the DOM is fully loaded
  console.log("Document ready!");

  fetch('http://eaaa.cederdorff.com/cvrapi/eaaa.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
  });
});
