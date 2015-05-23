/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditDocumentVersionHolder.created = function (screen) {

    var title;
    var version;

    title = screen.DocumentVersionHolder.DocumentVersion.Document.DocumentTitle;
    version = screen.DocumentVersionHolder.DocumentVersion.MajorVersionNumber + "." + screen.DocumentVersionHolder.DocumentVersion.MinorVersionNumber;

    screen.details.displayName = "Holder of: " + title + " v(" + version + ")";



    if (myapp.permissions["LightSwitchApplication:CanEditDocumentVersionHolders"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("DocumentReviewsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("DocumentReviewsTab").isReadOnly = true;
    }
};