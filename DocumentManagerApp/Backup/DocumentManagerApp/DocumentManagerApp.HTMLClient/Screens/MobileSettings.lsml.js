/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MobileSettings.DocumentTypes_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileDocuments.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '150px',
        'height': '150px'
    });
};
myapp.MobileSettings.ChangeStatus_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileRequestStatuses.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '150px',
        'height': '150px'
    });
};
myapp.MobileSettings.Employees_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileEmployees.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '150px',
        'height': '150px'
    });
};