/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditDocumentType.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditDocumentTypes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};