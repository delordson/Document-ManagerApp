/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseChangeRequestStatuses.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditChangeRequestStatuses"]) {
        screen.findContentItem("AddChangeRequestStatus").isEnabled = true;
    }
    else {
        screen.findContentItem("AddChangeRequestStatus").isEnabled = false;
    }
};