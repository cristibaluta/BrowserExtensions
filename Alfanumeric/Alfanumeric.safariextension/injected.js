document.addEventListener("contextmenu", handleMessage, false);

function handleMessage(msgEvent) {
    var string = window.parent.getSelection() + '';
	// string = string.replace(/[\W_-]+/g, "_");
	string = string.replace(/\[(\w+)\]/g, "");
	string = string.replace(/[^a-zA-Z\d-]+/g, "_");
	string = string.replace(/_-_/g, "_");
	
    safari.self.tab.setContextMenuEventUserInfo(msgEvent, string);
}
