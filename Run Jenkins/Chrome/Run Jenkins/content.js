var ereg = /https:\/\/bitbucket.mobility-media.de\/projects\/BUI\/repos\/([a-zA-Z]+)\/pull-requests\/([0-9]+)\//g;
var bitbucketUrl = window.location.href;
var matches = bitbucketUrl.match(ereg).length;

if (matches > 0) {
	var wrapper = document.createElement("button");
	wrapper.style.position = "absolute";
	wrapper.style.top = '150px';
	wrapper.style.right = '20px';
	wrapper.style.width = "100px";
	wrapper.style.height = "30px";
	wrapper.innerHTML = "Test build";
	wrapper.style.color = "white";
	wrapper.style.fontSize = "medium";
	wrapper.style.backgroundColor = 'rgba(200, 25, 25, 1.0)';
	wrapper.style.borderStyle = 'none';
	wrapper.style.borderRadius = "5px";
	wrapper.cursor = "hand";
	document.body.appendChild ( wrapper );

	wrapper.addEventListener("click", function() {
	
		var branchNameDiv = document.getElementsByClassName("branch-name");
		var branchName = branchNameDiv[0].innerHTML;
		var bitbucketUrl = window.location.href;
	
		chrome.storage.sync.get(['url', 'job', 'token'], function(items) {
		
			console.log(items);
		
		    var url = items["url"];
		    var job = items["job"];
		    var token = items["token"];
			var params = "job="+job+"&token="+token+"&bitbucket_url="+bitbucketUrl+"&branch_name="+branchName;
		
			var http = new XMLHttpRequest();
			http.open("GET", url+"?"+params, true);
			http.onreadystatechange = function() {
			    if (http.readyState == 4) {
					if (http.status == 404) {
						alert("Can't call this url "+url+"?"+params);
					} else if (http.status == 201) {
						alert("Jenkins will start testing this branch: "+branchName);
					}
			    }
			}
			http.send(null);
	    });
	
	}, false);
}
