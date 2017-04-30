// The Lounge - https://github.com/thelounge/lounge
"use strict";

self.addEventListener("push", function(event) {
	var payload = event.data ? event.data.text() : "Someone mentioned you on IRC";

	event.waitUntil(
		self.registration.showNotification("The Lounge", {
			icon: "img/touch-icon-192x192.png",
			body: payload,
		})
	);
});
