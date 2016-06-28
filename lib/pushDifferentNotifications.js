export default function pushDifferentNotifications() {

  console.log("Sending a different notification to each of the %d devices", tokens.length);

  tokens.forEach((token, i) => {

      const note = new apn.notification();
      note.setAlertText(`Hello, BEPiD! You are number: ${i}`);
      note.badge = i;

      service.pushNotification(note, token);
  });
};
