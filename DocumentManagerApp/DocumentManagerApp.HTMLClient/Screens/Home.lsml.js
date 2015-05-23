/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Home.AllDocuments_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Documents.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.Settings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Settings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};

myapp.Home.HeldDocuments_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MyDocuments.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.OwnedDocuments_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/OwnedDocuments.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.AuthoredDocuments_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/AuthoredDocuments.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.MyReviews_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Review.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.MyApprovals_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Approvals.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.created = function (screen) {
    // Write code here.
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};
myapp.Home.DocumnetTypes_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Documents.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ChangeRequestStatuses_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/RequestStatuses.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.Employees_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Employees.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};