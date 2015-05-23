/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditDocumentVersionApproval.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditDocumentVersionApprovals"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};