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

    if (screen.DocumentVersion.StoredDocument !== null) {
        screen.findContentItem("ShowAddStoredDocument").isEnabled = false;
        screen.findContentItem("DownloadDocument").isEnabled = true;
        screen.findContentItem("DeleteDocument").isEnabled = true;
    }
    else {
        screen.findContentItem("ShowAddStoredDocument").isEnabled = true;
        screen.findContentItem("DownloadDocument").isEnabled = false;
        screen.findContentItem("DeleteDocument").isEnabled = false;
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
myapp.AddEditDocumentVersion.DownloadDocument_Tap_execute = function (screen) {
    var documentVersionId = screen.DocumentVersion.Id;
    var downloadUrl = "../DownloadDocument.aspx?Id=" + documentVersionId;

    window.open(downloadUrl);
};
myapp.AddEditDocumentVersion.DeleteDocument_execute = function (screen) {
    screen.DocumentVersion.DocumentName = null;
    screen.DocumentVersion.StoredDocument = null;

    screen.findContentItem("ShowAddStoredDocument").isEnabled = true;
    screen.findContentItem("DownloadDocument").isEnabled = false;
    screen.findContentItem("DeleteDocument").isEnabled = false;
};