// Enables ES6 and then calls main.js
var v8 = require("v8");
v8.setFlagsFromString("--harmony_classes");
v8.setFlagsFromString("--harmony_object_literals");
v8.setFlagsFromString("--harmony_tostring");
require("./main.js");