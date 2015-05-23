/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseDocuments.created = function (screen) {
    var documentType;

    documentType = screen.DocumentType;
    screen.details.displayName = "Browse " + documentType;


    if (myapp.permissions["LightSwitchApplication:CanEditDocuments"]) {
        screen.findContentItem("AddDocument").isEnabled = true;
    }
    else {
        screen.findContentItem("AddDocument").isEnabled = false;
    }
};