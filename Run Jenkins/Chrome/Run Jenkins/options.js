
chrome.storage.sync.get(['url', 'job', 'token'], function(items) {
    document.getElementById("url").value = items["url"];
    document.getElementById("job").value = items["job"];
    document.getElementById("token").value = items["token"];
});

function saveOptions() {
	var url = document.getElementById("url").value;
	var job = document.getElementById("job").value;
	var token = document.getElementById("token").value;
	var settings = {'url': url, 'job': job, 'token': token};
	chrome.storage.sync.set(settings, function() {
		console.log('Settings saved');
    });
}

document.getElementById("save_but").onclick = function() {
	self.saveOptions();
	self.close();
}
