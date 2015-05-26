
function handleMessage(string) {
	// string = string.replace(/[\W_-]+/g, "_");
	string = string.replace(/\[(\w+)\]/g, "");
	string = string.replace(/[^a-zA-Z\d-]+/g, "_");
	string = string.replace(/_-_/g, "_");
	
	copyTextToClipboard(string);
}

function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  body.removeChild(copyFrom);
}

chrome.contextMenus.create({title: "Copy alfanumeric: %s",
                  		 contexts: ["selection"],
                          onclick: function(info, tab){ handleMessage(info.selectionText); }
});
