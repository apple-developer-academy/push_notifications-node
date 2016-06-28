const apn = require("apn")
      ,tokens = require("./data/devices.json")
      ,connect = require("./lib/connect.js")
      ,same = require("./lib/pushSameNotification.js")
      ,different = require("./lib/pushDifferentNotifications.js");

const service = new apn.connection({ production: false });

connect(service);
// same(service);
// different(service);
