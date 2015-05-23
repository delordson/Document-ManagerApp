/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditDocument.created = function (screen) {
    var title;

    if (screen.Document.DocumentTitle !== undefined) {
        title = screen.Document.DocumentTitle;
        screen.details.displayName = "Edit " + title;
    }
    else {
        screen.details.displayName = "Add New Document";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditDocuments"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("DocumentVersionsListTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("DocumentVersionsListTab").isReadOnly = true;
    }
};