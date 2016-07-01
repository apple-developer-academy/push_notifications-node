const apn = require("apn")

module.exports = function pushDifferentNotifications(service, tokens) {

  console.log("Sending a different notification to each of the %d devices", tokens.length);

  // Let's perform our sending function once per array element (device tokens)
  tokens.forEach((token, i) => {

    // Creating a notification
    const note = new apn.notification();

    // An alert message to display to the user
    note.alert = {
      "title" : "Remote Notification Ex.: #${i}",
      "body" : "Remote Notification Ex.: #${i}",
    };
    //A number to badge the app icon with
    note.badge = i;
    // Expires 1 hour from now.
    note.expiry = Math.floor(Date.now() / 1000) + 3600;
    // A sound to play
    note.sound = "ping.aiff";

    // Sending the notification
    service.pushNotification(note, token);

  });
};
