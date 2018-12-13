const doc = document;

doc.addEventListener("DOMContentLoaded", function(){
  // the DOM is fully loaded
  console.log("Document ready!");

  fetch('json/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendPersons(json);
  });

  function appendPersons(persons){
    for (var i = 0; i < persons.length; i++) {
      var person = persons[i];
      console.log(person);
      doc.getElementById('gridPersons').innerHTML += `
        <article class="gridItem">
        <h4>${person.name}</h4>
          <p>${person.age} years</p>
        </article>
      `;
    }
  }


// DOMContentLoaded event listener end //
});
