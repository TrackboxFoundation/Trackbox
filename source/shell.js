var shells = [
	{
		"displayName": "Trackbox",
		"packageName": "trackbox",
	},
	{
		"displayName": "OtherSkin",
		"packageName": "other-skin",
	}
];

// Loads a shell of a given name into the document body
tb.loadShell = {};
tb.loadShell.v1 = function (shellName) {
	var packageName = "";
	var shellPath = "";

	// Find package name from display name
	for (var name in shells) {
		if (shellName === shells[name].displayName) {
			packageName = shells[name].packageName;
			shellPath = "packages/" + packageName + "/" + packageName + ".html";
			break;
		}
	}

	// Fill document body with shell and call router
	tb.renderTemplate.v1(shellPath, function (shell) {
		$("body").html(shell);
		tb.router.v1();
	});
};