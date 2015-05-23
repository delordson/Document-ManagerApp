/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseDocumentTypes.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditDocumentTypes"]) {
        screen.findContentItem("AddDocumentType").isEnabled = true;
    }
    else {
        screen.findContentItem("AddDocumentType").isEnabled = false;
    }
};