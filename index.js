import apn from "node-apn";

import tokens from "./data/devices.json";
import connect from "./lib/connect.js";
import same from "./lib/pushSameNotification.js";
import different from "./lib/pushDifferentNotifications.js";

connect();
same();
different();
