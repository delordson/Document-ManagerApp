/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditDocumentVersion.created = function (screen) {
    var title;
    var version;

    title = screen.DocumentVersion.Document.DocumentTitle;

    if (screen.DocumentVersion.MajorVersionNumber !== undefined) {
        version = screen.DocumentVersion.MajorVersionNumber + "." + screen.DocumentVersion.MinorVersionNumber;
        screen.details.displayName = title + " v(" + version + ")";
    }
    else {
        screen.details.displayName = title + " v(NEW)";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditDocumentVersionHolders"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("ApprovalsTab").isReadOnly = false;
        screen.findContentItem("VersonHoldersTab").isReadOnly = false;
        screen.findContentItem("ChangeRequestsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("ApprovalsTab").isReadOnly = true;
        screen.findContentItem("VersonHoldersTab").isReadOnly = true;
        screen.findContentItem("ChangeRequestsTab").isReadOnly = true;
    }
};
