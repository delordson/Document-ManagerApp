/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditChangeRequestStatus.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditChangeRequestStatuses"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};