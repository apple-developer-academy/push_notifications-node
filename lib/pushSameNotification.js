export default function pushSameNotification() {

  console.log("Sending the same notification each of the devices.");
  const note = new apn.notification();
  note.setAlertText("Hello, BEPiD!");
  note.badge = 1;

  service.pushNotification(note, tokens);

};
