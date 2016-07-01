const apn = require("apn")

module.exports = function connect(service) {

  // Logging errors

  service.on("connected", () => {
      console.log("Connected");
  });

  service.on("transmitted", (notification, device) => {
      console.log(`Notification transmitted to: ${device.token.toString("hex")}`);
  });

  service.on("transmissionError", (errCode, notification, device) => {
      console.error(`Notification caused error: ${errCode} for device `, device, notification);
      if (errCode === 8) {
          console.log("A error code of 8 indicates that the device token is invalid. Não consegue né, Moisés?");
      }
  });

  service.on("timeout", () => {
      console.log("Connection Timeout");
  });

  service.on("disconnected", () => {
      console.log("Disconnected from APNS");
  });

  service.on("socketError", console.error);

};
