"use strict";
exports.__esModule = true;
var moment_1 = require("moment");
var getTimeDuration = function (time) {
    var createdAt = moment_1["default"](time);
    var now = moment_1["default"]();
    var duration = moment_1["default"].duration(now.diff(createdAt));
    if (duration.asSeconds() < 60) {
        return Math.floor(duration.asSeconds()) + "s";
    }
    else if (duration.asMinutes() < 60) {
        return Math.floor(duration.asMinutes()) + "m";
    }
    else if (duration.asHours() < 24) {
        return Math.floor(duration.asHours()) + "h";
    }
    else if (duration.asDays() < 30) {
        return Math.floor(duration.asDays()) + "d";
    }
    else if (duration.asMonths() < 12) {
        return Math.floor(duration.asMonths()) + "mo";
    }
    else {
        return Math.floor(duration.asYears()) + "y";
    }
};
exports["default"] = getTimeDuration;
