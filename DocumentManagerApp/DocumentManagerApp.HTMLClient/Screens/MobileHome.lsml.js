/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MobileHome.AllDocuments_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileDocuments.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.OwnedDocuments_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileOwnedDocuments.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.AuthoredDocuments_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileAuthoredDocuments.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.HeldDocuments_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileMyDocuments.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.MyReviews_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileReview.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.Settings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileSettings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.MyApprovals_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileApprovals.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.created = function (screen) {
    // Write code here.
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};