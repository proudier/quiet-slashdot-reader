chrome.webNavigation.onCompleted.addListener(function(details) {
	console.log("Detected Slashdot page; injecting cleanup code");
	chrome.tabs.executeScript(details.tabId, {
		runAt: "document_end",
		allFrames: false,
		file: "jquery-1.11.3.min.js"
	});
	chrome.tabs.executeScript(details.tabId, {
		runAt: "document_end",
		allFrames: false,
		file: "injected.js"
	});
}, {url: [{hostEquals : 'slashdot.org'}]});