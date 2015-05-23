/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddStoredDocument.created = function (screen) {

    myapp.AddStoredDocument.DocumentVersion_StoredDocument_render = function (element, contentItem) {
        createDocumentUploader(element, contentItem);

        contentItem.dataBind("value.DocumentVersion.StoredDocument", function (newValue) {
            var labelLength = 11;
            screen.DocumentVersion.DocumentName = element.innerText.substring(element.innerText.indexOf("File Name: ") + labelLength);
        });

    }; 
};
