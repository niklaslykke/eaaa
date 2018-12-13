const doc = document;

doc.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");

  fetch('json/data.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      console.log(json);

      for (var variable in json) {
        let data = json[variable];
        if (data['jcr:content']) {
          let title = data['jcr:content']['jcr:title'];
          console.log(`title: ${title}`);


        }
      }
    });
}
// DOMContentLoaded event listener end //
});