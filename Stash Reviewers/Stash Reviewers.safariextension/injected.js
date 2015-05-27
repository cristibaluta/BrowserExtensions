document.addEventListener("contextmenu", handleMessage, false);
safari.self.addEventListener("message", copyPaste, false);

function handleMessage(msgEvent) {
    var string = document.activeElement;
    safari.self.tab.setContextMenuEventUserInfo(msgEvent, "");
}

function copyPaste(m) {
	if (m.name == "copyReviewers") {
		copyReviewers();
	} else if (m.name == "pasteReviewers") {
		pasteReviewers(m.message);
	}
}

function copyReviewers() {
	alert(document.activeElement.value);
	safari.self.tab.dispatchMessage("copyReviewers", document.activeElement.value);
	// safari.extension.settings.reviewers = document.activeElement.value;
	// alert(safari.extension.settings.reviewers);
}

function pasteReviewers(rev) {
	
	// var reviewers = '<ul class="select2-choices">  <li class="select2-search-choice">    <div><div class="avatar-with-name" title="Calin Bodnar"><span class="aui-avatar aui-avatar-xsmall user-avatar" data-username="calin.bodnar@fortech.ro"><span class="aui-avatar-inner"><img src="https://secure.gravatar.com/avatar/9225214a89f5f7db8192c443a4b7d106.jpg?s=32&amp;d=mm" alt="Calin Bodnar"></span></span>Calin Bodnar</div></div>    <a href="#" onclick="return false;" class="select2-search-choice-close" tabindex="-1"></a></li><li class="select2-search-choice">    <div><div class="avatar-with-name" title="Anand Singh"><span class="aui-avatar aui-avatar-xsmall user-avatar" data-username="anand.singh@fortech.ro"><span class="aui-avatar-inner"><img src="https://secure.gravatar.com/avatar/25036d3db68a066e9feb3bc3e7043e1f.jpg?s=32&amp;d=mm" alt="Anand Singh"></span></span>Anand Singh</div></div>    <a href="#" onclick="return false;" class="select2-search-choice-close" tabindex="-1"></a></li><li class="select2-search-choice">    <div><div class="avatar-with-name" title="adrian pop"><span class="aui-avatar aui-avatar-xsmall user-avatar" data-username="apop"><span class="aui-avatar-inner"><img src="/stash/users/apop/avatar.png?s=32" alt="adrian pop"></span></span>adrian pop</div></div>    <a href="#" onclick="return false;" class="select2-search-choice-close" tabindex="-1"></a></li><li class="select2-search-choice">    <div><div class="avatar-with-name" title="raul hahn"><span class="aui-avatar aui-avatar-xsmall user-avatar" data-username="rhahn"><span class="aui-avatar-inner"><img src="/stash/users/rhahn/avatar.png?s=32" alt="raul hahn"></span></span>raul hahn</div></div>    <a href="#" onclick="return false;" class="select2-search-choice-close" tabindex="-1"></a></li><li class="select2-search-choice">    <div><div class="avatar-with-name" title="Bogdan Bolchis"><span class="aui-avatar aui-avatar-xsmall user-avatar" data-username="BBolchis"><span class="aui-avatar-inner"><img src="/stash/users/bbolchis/avatar.png?s=32" alt="Bogdan Bolchis"></span></span>Bogdan Bolchis</div></div>    <a href="#" onclick="return false;" class="select2-search-choice-close" tabindex="-1"></a></li><li class="select2-search-choice">    <div><div class="avatar-with-name" title="Bogdan Sturza"><span class="aui-avatar aui-avatar-xsmall user-avatar" data-username="BSturza"><span class="aui-avatar-inner"><img src="/stash/users/bsturza/avatar.png?s=32" alt="Bogdan Sturza"></span></span>Bogdan Sturza</div></div>    <a href="#" onclick="return false;" class="select2-search-choice-close" tabindex="-1"></a></li><li class="select2-search-field">    <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" id="s2id_autogen1" style="width: 10px;">  </li></ul>';
	// if (document.getElementById("s2id_reviewers") != null) {
	// 	document.getElementById("s2id_reviewers").innerHTML = rev;
	// }
	if (document.activeElement != null) {
		// document.activeElement.innerHTML = rev;
		document.activeElement.value = rev;
	}
}

