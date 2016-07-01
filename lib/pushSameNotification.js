const apn = require("apn")

module.exports = function pushSameNotification(service, tokens) {

  console.log("Sending the same notification each of the devices.");

  // Getting a random token from our tokens array
  const token = tokens[Math.floor(Math.random() * tokens.length)];

  // Creating a notification
  const note = new apn.notification();

  // An alert message to display to the user
  note.alert = {
    "title" : "Remote Notification Ex.",
    "body" : "Remote Notification Ex.",
  };
  //A number to badge the app icon with
  note.badge = tokens.indexOf(token);
  // Expires 1 hour from now.
  note.expiry = Math.floor(Date.now() / 1000) + 3600;
  // A sound to play
  note.sound = "ping.aiff";

  // Sending the notification
  service.pushNotification(note, token);

};
