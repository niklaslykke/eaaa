"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // accessToken: 'YOUR_ACCESS_TOKEN',
  // userId: 'YOUR_USER_ID',
  let feed = new Instafeed({
    accessToken: '206887733.1677ed0.45fafbd23f3f44c6858898fd47e2fd61',
    userId: '206887733',
    get: 'user',
    limit: 50,
    mock: true,
    success: (response) => {
      console.log(response);
      appendImages(response.data);
    }
  });
  feed.run();

  let appendImages = (images) => {
    for (var i = 0; i < images.length; i++) {

      let image = images[i];

      if (image.type === "image") {

        document.querySelector('#myInstagramFeed').innerHTML += `
        <img src="${image.images.standard_resolution.url}">`;

      } else if (image.type === "video") {
        console.log(image);

        document.querySelector('#myInstagramFeed').innerHTML += `
        <video controls>
          <source src="${image.videos.standard_resolution.url}" type="video/mp4">
        </video>
        `;

      }

    }
  }

});