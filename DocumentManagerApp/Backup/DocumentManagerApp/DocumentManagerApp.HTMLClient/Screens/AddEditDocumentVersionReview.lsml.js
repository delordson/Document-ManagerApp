/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditDocumentVersionReview.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditDocumentVersionReviews"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};