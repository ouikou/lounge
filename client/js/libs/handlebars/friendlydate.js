"use strict";

const moment = require("moment");

module.exports = function(time) {
	// See http://momentjs.com/docs/#/displaying/calendar-time/
	return moment(time).calendar(null, {
		sameDay: "[Today]",
		lastDay: "[Yesterday]",
		lastWeek: "MMMM DD, YYYY",
		sameElse: "MMMM DD, YYYY"
	});
};
