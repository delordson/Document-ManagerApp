/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditChangeRequest.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditChangeRequests"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};