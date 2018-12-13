var createAlertDialog = function() {
  var dialog = document.getElementById('my-alert-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('alert-dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};

var hideAlertDialog = function() {
  document
    .getElementById('my-alert-dialog')
    .hide();
};

var notify = function() {
  ons.notification.alert('This dialog was created with ons.notification');
};
