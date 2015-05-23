/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditChangeRequest.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeRequest
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: lightSwitchApplication.AddEditChangeRequest
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: lightSwitchApplication.ChangeRequest
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequest
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        ChangeRequestTitle: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestTitle",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        ChangeRequestDescription: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequest
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        RaisedBy: {
            _$class: msls.ContentItem,
            _$name: "RaisedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RaisedBy",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        TargetClosureDate: {
            _$class: msls.ContentItem,
            _$name: "TargetClosureDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        ChangeRequestStatus: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "ChangeRequestStatus",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequestStatus,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        DateClosed: {
            _$class: msls.ContentItem,
            _$name: "DateClosed",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeRequest
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditChangeRequest, {
        /// <field>
        /// Called when a new AddEditChangeRequest screen is created.
        /// <br/>created(msls.application.AddEditChangeRequest screen)
        /// </field>
        created: [lightSwitchApplication.AddEditChangeRequest],
        /// <field>
        /// Called before changes on an active AddEditChangeRequest screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditChangeRequest screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditChangeRequest],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("left"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("Reference"); }],
        /// <field>
        /// Called after the ChangeRequestTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeRequestTitle"); }],
        /// <field>
        /// Called after the ChangeRequestDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeRequestDescription"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("right"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the RaisedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RaisedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RaisedBy"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the TargetClosureDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetClosureDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("TargetClosureDate"); }],
        /// <field>
        /// Called after the ChangeRequestStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeRequestStatus"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the DateClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateClosed_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("DateClosed"); }]
    });

    lightSwitchApplication.AddEditChangeRequestStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeRequestStatus
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeRequestStatus,
            data: lightSwitchApplication.AddEditChangeRequestStatus,
            value: lightSwitchApplication.AddEditChangeRequestStatus
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditChangeRequestStatus,
            data: lightSwitchApplication.AddEditChangeRequestStatus,
            value: lightSwitchApplication.AddEditChangeRequestStatus
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeRequestStatus,
            data: lightSwitchApplication.AddEditChangeRequestStatus,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeRequestStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditChangeRequestStatus, {
        /// <field>
        /// Called when a new AddEditChangeRequestStatus screen is created.
        /// <br/>created(msls.application.AddEditChangeRequestStatus screen)
        /// </field>
        created: [lightSwitchApplication.AddEditChangeRequestStatus],
        /// <field>
        /// Called before changes on an active AddEditChangeRequestStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditChangeRequestStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditChangeRequestStatus],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequestStatus().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequestStatus().findContentItem("left"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequestStatus().findContentItem("Status"); }]
    });

    lightSwitchApplication.AddEditDocument.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocument
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.AddEditDocument
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.Document
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Document,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Document,
            value: Boolean
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.AddEditDocument
        },
        DocumentTitle: {
            _$class: msls.ContentItem,
            _$name: "DocumentTitle",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: String
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.AddEditDocument
        },
        DocumentType: {
            _$class: msls.ContentItem,
            _$name: "DocumentType",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.DocumentType
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "DocumentType",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.DocumentType,
            value: lightSwitchApplication.DocumentType
        },
        DocumentOwner: {
            _$class: msls.ContentItem,
            _$name: "DocumentOwner",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "DocumentOwner",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DocumentVersionsListTab: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionsListTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: lightSwitchApplication.AddEditDocument
        },
        DocumentVersions: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersions",
            _$parentName: "DocumentVersionsListTab",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.AddEditDocument,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditDocument,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentVersion
                }
            }
        },
        DocumentVersionsTemplate: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionsTemplate",
            _$parentName: "DocumentVersions",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.DocumentVersion,
            value: lightSwitchApplication.DocumentVersion
        },
        VersionNumber: {
            _$class: msls.ContentItem,
            _$name: "VersionNumber",
            _$parentName: "DocumentVersionsTemplate",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.DocumentVersion,
            value: lightSwitchApplication.DocumentVersion
        },
        MajorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "MajorVersionNumber",
            _$parentName: "VersionNumber",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.DocumentVersion,
            value: Number
        },
        MinorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "MinorVersionNumber",
            _$parentName: "VersionNumber",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.DocumentVersion,
            value: Number
        },
        Author: {
            _$class: msls.ContentItem,
            _$name: "Author",
            _$parentName: "DocumentVersionsTemplate",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.DocumentVersion,
            value: lightSwitchApplication.Employee
        },
        FirstName1: {
            _$class: msls.ContentItem,
            _$name: "FirstName1",
            _$parentName: "Author",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName1: {
            _$class: msls.ContentItem,
            _$name: "LastName1",
            _$parentName: "Author",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.Employee,
            value: String
        },
        EffectiveDate: {
            _$class: msls.ContentItem,
            _$name: "EffectiveDate",
            _$parentName: "DocumentVersionsTemplate",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.DocumentVersion,
            value: Date
        },
        DocumentStatus: {
            _$class: msls.ContentItem,
            _$name: "DocumentStatus",
            _$parentName: "DocumentVersionsTemplate",
            screen: lightSwitchApplication.AddEditDocument,
            data: lightSwitchApplication.DocumentVersion,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocument
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditDocument, {
        /// <field>
        /// Called when a new AddEditDocument screen is created.
        /// <br/>created(msls.application.AddEditDocument screen)
        /// </field>
        created: [lightSwitchApplication.AddEditDocument],
        /// <field>
        /// Called before changes on an active AddEditDocument screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditDocument screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditDocument],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("columns"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Reference"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("InUse"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Group"); }],
        /// <field>
        /// Called after the DocumentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DocumentTitle"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Group1"); }],
        /// <field>
        /// Called after the DocumentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentType_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DocumentType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentOwner content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentOwner_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DocumentOwner"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the DocumentVersionsListTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionsListTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DocumentVersionsListTab"); }],
        /// <field>
        /// Called after the DocumentVersions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersions_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DocumentVersions"); }],
        /// <field>
        /// Called after the DocumentVersionsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DocumentVersionsTemplate"); }],
        /// <field>
        /// Called after the VersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VersionNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("VersionNumber"); }],
        /// <field>
        /// Called after the MajorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MajorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("MajorVersionNumber"); }],
        /// <field>
        /// Called after the MinorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MinorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("MinorVersionNumber"); }],
        /// <field>
        /// Called after the Author content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Author_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("Author"); }],
        /// <field>
        /// Called after the FirstName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("FirstName1"); }],
        /// <field>
        /// Called after the LastName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("LastName1"); }],
        /// <field>
        /// Called after the EffectiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EffectiveDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("EffectiveDate"); }],
        /// <field>
        /// Called after the DocumentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocument().findContentItem("DocumentStatus"); }]
    });

    lightSwitchApplication.AddEditDocumentType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentType
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocumentType,
            data: lightSwitchApplication.AddEditDocumentType,
            value: lightSwitchApplication.AddEditDocumentType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditDocumentType,
            data: lightSwitchApplication.AddEditDocumentType,
            value: lightSwitchApplication.DocumentType
        },
        DocumentTypeCode: {
            _$class: msls.ContentItem,
            _$name: "DocumentTypeCode",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentType,
            data: lightSwitchApplication.DocumentType,
            value: String
        },
        DocumentTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "DocumentTypeDescription",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentType,
            data: lightSwitchApplication.DocumentType,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditDocumentType, {
        /// <field>
        /// Called when a new AddEditDocumentType screen is created.
        /// <br/>created(msls.application.AddEditDocumentType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditDocumentType],
        /// <field>
        /// Called before changes on an active AddEditDocumentType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditDocumentType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditDocumentType],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentType().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentType().findContentItem("columns"); }],
        /// <field>
        /// Called after the DocumentTypeCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTypeCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentType().findContentItem("DocumentTypeCode"); }],
        /// <field>
        /// Called after the DocumentTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentType().findContentItem("DocumentTypeDescription"); }]
    });

    lightSwitchApplication.AddEditDocumentVersion.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentVersion
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.AddEditDocumentVersion,
            value: lightSwitchApplication.AddEditDocumentVersion
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.AddEditDocumentVersion,
            value: lightSwitchApplication.DocumentVersion
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersion,
            value: lightSwitchApplication.DocumentVersion
        },
        Author: {
            _$class: msls.ContentItem,
            _$name: "Author",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersion,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Author",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName2: {
            _$class: msls.ContentItem,
            _$name: "FirstName2",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName2: {
            _$class: msls.ContentItem,
            _$name: "LastName2",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DocumentStatus: {
            _$class: msls.ContentItem,
            _$name: "DocumentStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersion,
            value: String
        },
        MajorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "MajorVersionNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersion,
            value: Number
        },
        MinorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "MinorVersionNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersion,
            value: Number
        },
        EffectiveDate: {
            _$class: msls.ContentItem,
            _$name: "EffectiveDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersion,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersion,
            value: lightSwitchApplication.DocumentVersion
        },
        Changes: {
            _$class: msls.ContentItem,
            _$name: "Changes",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersion,
            value: String
        },
        DocumentName: {
            _$class: msls.ContentItem,
            _$name: "DocumentName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersion,
            value: String
        },
        ShowAddStoredDocument: {
            _$class: msls.ContentItem,
            _$name: "ShowAddStoredDocument",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDocumentVersion
        },
        DownloadDocument: {
            _$class: msls.ContentItem,
            _$name: "DownloadDocument",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDocumentVersion
        },
        DeleteDocument: {
            _$class: msls.ContentItem,
            _$name: "DeleteDocument",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDocumentVersion
        },
        ApprovalsTab: {
            _$class: msls.ContentItem,
            _$name: "ApprovalsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.AddEditDocumentVersion,
            value: lightSwitchApplication.AddEditDocumentVersion
        },
        DocumentVersionApprovals: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionApprovals",
            _$parentName: "ApprovalsTab",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.AddEditDocumentVersion,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditDocumentVersion,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentVersionApproval
                }
            }
        },
        DocumentVersionApprovalsTemplate: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionApprovalsTemplate",
            _$parentName: "DocumentVersionApprovals",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: lightSwitchApplication.DocumentVersionApproval
        },
        Approver: {
            _$class: msls.ContentItem,
            _$name: "Approver",
            _$parentName: "DocumentVersionApprovalsTemplate",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: lightSwitchApplication.Employee
        },
        LastName1: {
            _$class: msls.ContentItem,
            _$name: "LastName1",
            _$parentName: "Approver",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName1: {
            _$class: msls.ContentItem,
            _$name: "FirstName1",
            _$parentName: "Approver",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.Employee,
            value: String
        },
        ApprovalStatus: {
            _$class: msls.ContentItem,
            _$name: "ApprovalStatus",
            _$parentName: "DocumentVersionApprovalsTemplate",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: String
        },
        ApprovalStatusDate: {
            _$class: msls.ContentItem,
            _$name: "ApprovalStatusDate",
            _$parentName: "DocumentVersionApprovalsTemplate",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: Date
        },
        VersonHoldersTab: {
            _$class: msls.ContentItem,
            _$name: "VersonHoldersTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.AddEditDocumentVersion,
            value: lightSwitchApplication.AddEditDocumentVersion
        },
        DocumentVersionHolders: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionHolders",
            _$parentName: "VersonHoldersTab",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.AddEditDocumentVersion,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditDocumentVersion,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentVersionHolder
                }
            }
        },
        DocumentVersionHoldersTemplate: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionHoldersTemplate",
            _$parentName: "DocumentVersionHolders",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: lightSwitchApplication.DocumentVersionHolder
        },
        CopyHolder: {
            _$class: msls.ContentItem,
            _$name: "CopyHolder",
            _$parentName: "DocumentVersionHoldersTemplate",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "CopyHolder",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "CopyHolder",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateDistributedTo: {
            _$class: msls.ContentItem,
            _$name: "DateDistributedTo",
            _$parentName: "DocumentVersionHoldersTemplate",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: Date
        },
        DateAcknowledged: {
            _$class: msls.ContentItem,
            _$name: "DateAcknowledged",
            _$parentName: "DocumentVersionHoldersTemplate",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: Date
        },
        ChangeRequestsTab: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.AddEditDocumentVersion,
            value: lightSwitchApplication.AddEditDocumentVersion
        },
        ChangeRequests1: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequests1",
            _$parentName: "ChangeRequestsTab",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.AddEditDocumentVersion,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditDocumentVersion,
                _$entry: {
                    elementType: lightSwitchApplication.ChangeRequest
                }
            }
        },
        ChangeRequests1Template: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequests1Template",
            _$parentName: "ChangeRequests1",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequest
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "ChangeRequests1Template",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        ChangeRequestTitle: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestTitle",
            _$parentName: "ChangeRequests1Template",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        RaisedBy: {
            _$class: msls.ContentItem,
            _$name: "RaisedBy",
            _$parentName: "ChangeRequests1Template",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.Employee
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "ChangeRequests1Template",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        TargetClosureDate: {
            _$class: msls.ContentItem,
            _$name: "TargetClosureDate",
            _$parentName: "ChangeRequests1Template",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        ChangeRequestStatus: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatus",
            _$parentName: "ChangeRequests1Template",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        DateClosed: {
            _$class: msls.ContentItem,
            _$name: "DateClosed",
            _$parentName: "ChangeRequests1Template",
            screen: lightSwitchApplication.AddEditDocumentVersion,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentVersion
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditDocumentVersion, {
        /// <field>
        /// Called when a new AddEditDocumentVersion screen is created.
        /// <br/>created(msls.application.AddEditDocumentVersion screen)
        /// </field>
        created: [lightSwitchApplication.AddEditDocumentVersion],
        /// <field>
        /// Called before changes on an active AddEditDocumentVersion screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditDocumentVersion screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditDocumentVersion],
        /// <field>
        /// Called to determine if the DownLoadDocument method can be executed.
        /// <br/>canExecute(msls.application.AddEditDocumentVersion screen)
        /// </field>
        DownLoadDocument_canExecute: [lightSwitchApplication.AddEditDocumentVersion],
        /// <field>
        /// Called to execute the DownLoadDocument method.
        /// <br/>execute(msls.application.AddEditDocumentVersion screen)
        /// </field>
        DownLoadDocument_execute: [lightSwitchApplication.AddEditDocumentVersion],
        /// <field>
        /// Called to determine if the DownloadDocument_Tap method can be executed.
        /// <br/>canExecute(msls.application.AddEditDocumentVersion screen)
        /// </field>
        DownloadDocument_Tap_canExecute: [lightSwitchApplication.AddEditDocumentVersion],
        /// <field>
        /// Called to execute the DownloadDocument_Tap method.
        /// <br/>execute(msls.application.AddEditDocumentVersion screen)
        /// </field>
        DownloadDocument_Tap_execute: [lightSwitchApplication.AddEditDocumentVersion],
        /// <field>
        /// Called to determine if the DeleteDocument method can be executed.
        /// <br/>canExecute(msls.application.AddEditDocumentVersion screen)
        /// </field>
        DeleteDocument_canExecute: [lightSwitchApplication.AddEditDocumentVersion],
        /// <field>
        /// Called to execute the DeleteDocument method.
        /// <br/>execute(msls.application.AddEditDocumentVersion screen)
        /// </field>
        DeleteDocument_execute: [lightSwitchApplication.AddEditDocumentVersion],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("left"); }],
        /// <field>
        /// Called after the Author content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Author_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("Author"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the FirstName2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName2_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("FirstName2"); }],
        /// <field>
        /// Called after the LastName2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName2_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("LastName2"); }],
        /// <field>
        /// Called after the DocumentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DocumentStatus"); }],
        /// <field>
        /// Called after the MajorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MajorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("MajorVersionNumber"); }],
        /// <field>
        /// Called after the MinorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MinorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("MinorVersionNumber"); }],
        /// <field>
        /// Called after the EffectiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EffectiveDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("EffectiveDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("right"); }],
        /// <field>
        /// Called after the Changes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Changes_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("Changes"); }],
        /// <field>
        /// Called after the DocumentName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DocumentName"); }],
        /// <field>
        /// Called after the ShowAddStoredDocument content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowAddStoredDocument_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("ShowAddStoredDocument"); }],
        /// <field>
        /// Called after the DownloadDocument content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DownloadDocument_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DownloadDocument"); }],
        /// <field>
        /// Called after the DeleteDocument content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DeleteDocument_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DeleteDocument"); }],
        /// <field>
        /// Called after the ApprovalsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovalsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("ApprovalsTab"); }],
        /// <field>
        /// Called after the DocumentVersionApprovals content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionApprovals_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DocumentVersionApprovals"); }],
        /// <field>
        /// Called after the DocumentVersionApprovalsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionApprovalsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DocumentVersionApprovalsTemplate"); }],
        /// <field>
        /// Called after the Approver content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approver_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("Approver"); }],
        /// <field>
        /// Called after the LastName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("LastName1"); }],
        /// <field>
        /// Called after the FirstName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("FirstName1"); }],
        /// <field>
        /// Called after the ApprovalStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovalStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("ApprovalStatus"); }],
        /// <field>
        /// Called after the ApprovalStatusDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovalStatusDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("ApprovalStatusDate"); }],
        /// <field>
        /// Called after the VersonHoldersTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VersonHoldersTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("VersonHoldersTab"); }],
        /// <field>
        /// Called after the DocumentVersionHolders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionHolders_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DocumentVersionHolders"); }],
        /// <field>
        /// Called after the DocumentVersionHoldersTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionHoldersTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DocumentVersionHoldersTemplate"); }],
        /// <field>
        /// Called after the CopyHolder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CopyHolder_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("CopyHolder"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the DateDistributedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDistributedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DateDistributedTo"); }],
        /// <field>
        /// Called after the DateAcknowledged content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAcknowledged_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DateAcknowledged"); }],
        /// <field>
        /// Called after the ChangeRequestsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("ChangeRequestsTab"); }],
        /// <field>
        /// Called after the ChangeRequests1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequests1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("ChangeRequests1"); }],
        /// <field>
        /// Called after the ChangeRequests1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequests1Template_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("ChangeRequests1Template"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("Reference"); }],
        /// <field>
        /// Called after the ChangeRequestTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("ChangeRequestTitle"); }],
        /// <field>
        /// Called after the RaisedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RaisedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("RaisedBy"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the TargetClosureDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetClosureDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("TargetClosureDate"); }],
        /// <field>
        /// Called after the ChangeRequestStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("ChangeRequestStatus"); }],
        /// <field>
        /// Called after the DateClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateClosed_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersion().findContentItem("DateClosed"); }]
    });

    lightSwitchApplication.AddEditDocumentVersionApproval.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.AddEditDocumentVersionApproval,
            value: lightSwitchApplication.AddEditDocumentVersionApproval
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.AddEditDocumentVersionApproval,
            value: lightSwitchApplication.DocumentVersionApproval
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: lightSwitchApplication.DocumentVersionApproval
        },
        Approver: {
            _$class: msls.ContentItem,
            _$name: "Approver",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Approver",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.Employee,
            value: String
        },
        ApprovalStatus: {
            _$class: msls.ContentItem,
            _$name: "ApprovalStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: String
        },
        ApprovalStatusDate: {
            _$class: msls.ContentItem,
            _$name: "ApprovalStatusDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: Date
        },
        ApproverComments: {
            _$class: msls.ContentItem,
            _$name: "ApproverComments",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: lightSwitchApplication.DocumentVersionApproval
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentVersionApproval
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditDocumentVersionApproval, {
        /// <field>
        /// Called when a new AddEditDocumentVersionApproval screen is created.
        /// <br/>created(msls.application.AddEditDocumentVersionApproval screen)
        /// </field>
        created: [lightSwitchApplication.AddEditDocumentVersionApproval],
        /// <field>
        /// Called before changes on an active AddEditDocumentVersionApproval screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditDocumentVersionApproval screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditDocumentVersionApproval],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("left"); }],
        /// <field>
        /// Called after the Approver content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approver_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("Approver"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the ApprovalStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovalStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("ApprovalStatus"); }],
        /// <field>
        /// Called after the ApprovalStatusDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovalStatusDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("ApprovalStatusDate"); }],
        /// <field>
        /// Called after the ApproverComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApproverComments_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("ApproverComments"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionApproval().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditDocumentVersionHolder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.AddEditDocumentVersionHolder,
            value: lightSwitchApplication.AddEditDocumentVersionHolder
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.AddEditDocumentVersionHolder,
            value: lightSwitchApplication.DocumentVersionHolder
        },
        CopyHolder: {
            _$class: msls.ContentItem,
            _$name: "CopyHolder",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "CopyHolder",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateDistributedTo: {
            _$class: msls.ContentItem,
            _$name: "DateDistributedTo",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: Date
        },
        DateAcknowledged: {
            _$class: msls.ContentItem,
            _$name: "DateAcknowledged",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: Date
        },
        DocumentReviewsTab: {
            _$class: msls.ContentItem,
            _$name: "DocumentReviewsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.AddEditDocumentVersionHolder,
            value: lightSwitchApplication.AddEditDocumentVersionHolder
        },
        DocumentVersionReviews: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionReviews",
            _$parentName: "DocumentReviewsTab",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.AddEditDocumentVersionHolder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditDocumentVersionHolder,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentVersionReview
                }
            }
        },
        DocumentVersionReviewsTemplate: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionReviewsTemplate",
            _$parentName: "DocumentVersionReviews",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.DocumentVersionReview,
            value: lightSwitchApplication.DocumentVersionReview
        },
        DateDue: {
            _$class: msls.ContentItem,
            _$name: "DateDue",
            _$parentName: "DocumentVersionReviewsTemplate",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.DocumentVersionReview,
            value: Date
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "DocumentVersionReviewsTemplate",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.DocumentVersionReview,
            value: Date
        },
        Outcome: {
            _$class: msls.ContentItem,
            _$name: "Outcome",
            _$parentName: "DocumentVersionReviewsTemplate",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder,
            data: lightSwitchApplication.DocumentVersionReview,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentVersionHolder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditDocumentVersionHolder, {
        /// <field>
        /// Called when a new AddEditDocumentVersionHolder screen is created.
        /// <br/>created(msls.application.AddEditDocumentVersionHolder screen)
        /// </field>
        created: [lightSwitchApplication.AddEditDocumentVersionHolder],
        /// <field>
        /// Called before changes on an active AddEditDocumentVersionHolder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditDocumentVersionHolder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditDocumentVersionHolder],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("columns"); }],
        /// <field>
        /// Called after the CopyHolder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CopyHolder_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("CopyHolder"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the DateDistributedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDistributedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("DateDistributedTo"); }],
        /// <field>
        /// Called after the DateAcknowledged content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAcknowledged_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("DateAcknowledged"); }],
        /// <field>
        /// Called after the DocumentReviewsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentReviewsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("DocumentReviewsTab"); }],
        /// <field>
        /// Called after the DocumentVersionReviews content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionReviews_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("DocumentVersionReviews"); }],
        /// <field>
        /// Called after the DocumentVersionReviewsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionReviewsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("DocumentVersionReviewsTemplate"); }],
        /// <field>
        /// Called after the DateDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDue_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("DateDue"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("DateCompleted"); }],
        /// <field>
        /// Called after the Outcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Outcome_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionHolder().findContentItem("Outcome"); }]
    });

    lightSwitchApplication.AddEditDocumentVersionReview.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentVersionReview
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDocumentVersionReview,
            data: lightSwitchApplication.AddEditDocumentVersionReview,
            value: lightSwitchApplication.AddEditDocumentVersionReview
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditDocumentVersionReview,
            data: lightSwitchApplication.AddEditDocumentVersionReview,
            value: lightSwitchApplication.DocumentVersionReview
        },
        DateDue: {
            _$class: msls.ContentItem,
            _$name: "DateDue",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersionReview,
            data: lightSwitchApplication.DocumentVersionReview,
            value: Date
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersionReview,
            data: lightSwitchApplication.DocumentVersionReview,
            value: Date
        },
        Outcome: {
            _$class: msls.ContentItem,
            _$name: "Outcome",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDocumentVersionReview,
            data: lightSwitchApplication.DocumentVersionReview,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDocumentVersionReview
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditDocumentVersionReview, {
        /// <field>
        /// Called when a new AddEditDocumentVersionReview screen is created.
        /// <br/>created(msls.application.AddEditDocumentVersionReview screen)
        /// </field>
        created: [lightSwitchApplication.AddEditDocumentVersionReview],
        /// <field>
        /// Called before changes on an active AddEditDocumentVersionReview screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditDocumentVersionReview screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditDocumentVersionReview],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionReview().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionReview().findContentItem("columns"); }],
        /// <field>
        /// Called after the DateDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDue_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionReview().findContentItem("DateDue"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionReview().findContentItem("DateCompleted"); }],
        /// <field>
        /// Called after the Outcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Outcome_postRender: [$element, function () { return new lightSwitchApplication.AddEditDocumentVersionReview().findContentItem("Outcome"); }]
    });

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.Employee
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("left"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("right"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Email"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Group"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Current"); }]
    });

    lightSwitchApplication.AddStoredDocument.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddStoredDocument
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddStoredDocument,
            data: lightSwitchApplication.AddStoredDocument,
            value: lightSwitchApplication.AddStoredDocument
        },
        DocumentVersion_StoredDocument: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion_StoredDocument",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddStoredDocument,
            data: lightSwitchApplication.AddStoredDocument,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddStoredDocument
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddStoredDocument, {
        /// <field>
        /// Called when a new AddStoredDocument screen is created.
        /// <br/>created(msls.application.AddStoredDocument screen)
        /// </field>
        created: [lightSwitchApplication.AddStoredDocument],
        /// <field>
        /// Called before changes on an active AddStoredDocument screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddStoredDocument screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddStoredDocument],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddStoredDocument().findContentItem("Details"); }],
        /// <field>
        /// Called to render the DocumentVersion_StoredDocument content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_StoredDocument_render: [$element, function () { return new lightSwitchApplication.AddStoredDocument().findContentItem("DocumentVersion_StoredDocument"); }]
    });

    lightSwitchApplication.BrowseChangeRequestStatuses.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses
        },
        ChangeRequestStatusList: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatusList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses,
            data: lightSwitchApplication.BrowseChangeRequestStatuses,
            value: lightSwitchApplication.BrowseChangeRequestStatuses
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ChangeRequestStatusList",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses,
            data: lightSwitchApplication.BrowseChangeRequestStatuses,
            value: String
        },
        ChangeRequestStatus: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatus",
            _$parentName: "ChangeRequestStatusList",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses,
            data: lightSwitchApplication.BrowseChangeRequestStatuses,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseChangeRequestStatuses,
                _$entry: {
                    elementType: lightSwitchApplication.ChangeRequestStatus
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ChangeRequestStatus",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses,
            data: lightSwitchApplication.ChangeRequestStatus,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseChangeRequestStatuses, {
        /// <field>
        /// Called when a new BrowseChangeRequestStatuses screen is created.
        /// <br/>created(msls.application.BrowseChangeRequestStatuses screen)
        /// </field>
        created: [lightSwitchApplication.BrowseChangeRequestStatuses],
        /// <field>
        /// Called before changes on an active BrowseChangeRequestStatuses screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseChangeRequestStatuses screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseChangeRequestStatuses],
        /// <field>
        /// Called after the ChangeRequestStatusList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatusList_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequestStatuses().findContentItem("ChangeRequestStatusList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequestStatuses().findContentItem("Search"); }],
        /// <field>
        /// Called after the ChangeRequestStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequestStatuses().findContentItem("ChangeRequestStatus"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequestStatuses().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseDocuments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDocuments
        },
        DocumentList: {
            _$class: msls.ContentItem,
            _$name: "DocumentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.BrowseDocuments,
            value: lightSwitchApplication.BrowseDocuments
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "DocumentList",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.BrowseDocuments,
            value: String
        },
        Document: {
            _$class: msls.ContentItem,
            _$name: "Document",
            _$parentName: "DocumentList",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.BrowseDocuments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseDocuments,
                _$entry: {
                    elementType: lightSwitchApplication.Document
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Document",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Document
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Document,
            value: String
        },
        DocumentTitle: {
            _$class: msls.ContentItem,
            _$name: "DocumentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Document,
            value: String
        },
        DocumentOwner: {
            _$class: msls.ContentItem,
            _$name: "DocumentOwner",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "DocumentOwner",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "DocumentOwner",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Employee,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocuments,
            data: lightSwitchApplication.Document,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDocuments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseDocuments, {
        /// <field>
        /// Called when a new BrowseDocuments screen is created.
        /// <br/>created(msls.application.BrowseDocuments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseDocuments],
        /// <field>
        /// Called before changes on an active BrowseDocuments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseDocuments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseDocuments],
        /// <field>
        /// Called after the DocumentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("DocumentList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("Search"); }],
        /// <field>
        /// Called after the Document content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Document_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("Document"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("Reference"); }],
        /// <field>
        /// Called after the DocumentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("DocumentTitle"); }],
        /// <field>
        /// Called after the DocumentOwner content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentOwner_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("DocumentOwner"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("LastName"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocuments().findContentItem("InUse"); }]
    });

    lightSwitchApplication.BrowseDocumentsByDocumentTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDocumentsByDocumentTypes
        },
        DocumentTypeList: {
            _$class: msls.ContentItem,
            _$name: "DocumentTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
            data: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
            value: lightSwitchApplication.BrowseDocumentsByDocumentTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "DocumentTypeList",
            screen: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
            data: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
            value: String
        },
        DocumentType: {
            _$class: msls.ContentItem,
            _$name: "DocumentType",
            _$parentName: "DocumentTypeList",
            screen: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
            data: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "DocumentType",
            screen: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
            data: lightSwitchApplication.DocumentType,
            value: lightSwitchApplication.DocumentType
        },
        DocumentTypeCode: {
            _$class: msls.ContentItem,
            _$name: "DocumentTypeCode",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
            data: lightSwitchApplication.DocumentType,
            value: String
        },
        DocumentTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "DocumentTypeDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocumentsByDocumentTypes,
            data: lightSwitchApplication.DocumentType,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDocumentsByDocumentTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseDocumentsByDocumentTypes, {
        /// <field>
        /// Called when a new BrowseDocumentsByDocumentTypes screen is created.
        /// <br/>created(msls.application.BrowseDocumentsByDocumentTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseDocumentsByDocumentTypes],
        /// <field>
        /// Called before changes on an active BrowseDocumentsByDocumentTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseDocumentsByDocumentTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseDocumentsByDocumentTypes],
        /// <field>
        /// Called after the DocumentTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentsByDocumentTypes().findContentItem("DocumentTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentsByDocumentTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the DocumentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentType_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentsByDocumentTypes().findContentItem("DocumentType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentsByDocumentTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentTypeCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTypeCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentsByDocumentTypes().findContentItem("DocumentTypeCode"); }],
        /// <field>
        /// Called after the DocumentTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentsByDocumentTypes().findContentItem("DocumentTypeDescription"); }]
    });

    lightSwitchApplication.BrowseDocumentTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDocumentTypes
        },
        DocumentTypeList: {
            _$class: msls.ContentItem,
            _$name: "DocumentTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseDocumentTypes,
            data: lightSwitchApplication.BrowseDocumentTypes,
            value: lightSwitchApplication.BrowseDocumentTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "DocumentTypeList",
            screen: lightSwitchApplication.BrowseDocumentTypes,
            data: lightSwitchApplication.BrowseDocumentTypes,
            value: String
        },
        DocumentType: {
            _$class: msls.ContentItem,
            _$name: "DocumentType",
            _$parentName: "DocumentTypeList",
            screen: lightSwitchApplication.BrowseDocumentTypes,
            data: lightSwitchApplication.BrowseDocumentTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseDocumentTypes,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "DocumentType",
            screen: lightSwitchApplication.BrowseDocumentTypes,
            data: lightSwitchApplication.DocumentType,
            value: lightSwitchApplication.DocumentType
        },
        DocumentTypeCode: {
            _$class: msls.ContentItem,
            _$name: "DocumentTypeCode",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocumentTypes,
            data: lightSwitchApplication.DocumentType,
            value: String
        },
        DocumentTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "DocumentTypeDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseDocumentTypes,
            data: lightSwitchApplication.DocumentType,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDocumentTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseDocumentTypes, {
        /// <field>
        /// Called when a new BrowseDocumentTypes screen is created.
        /// <br/>created(msls.application.BrowseDocumentTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseDocumentTypes],
        /// <field>
        /// Called before changes on an active BrowseDocumentTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseDocumentTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseDocumentTypes],
        /// <field>
        /// Called after the DocumentTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentTypes().findContentItem("DocumentTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the DocumentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentType_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentTypes().findContentItem("DocumentType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentTypeCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTypeCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentTypes().findContentItem("DocumentTypeCode"); }],
        /// <field>
        /// Called after the DocumentTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseDocumentTypes().findContentItem("DocumentTypeDescription"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Current"); }]
    });

    lightSwitchApplication.BrowseMyAuthoredDocumentVersions.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions
        },
        DocumentVersionList: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            value: lightSwitchApplication.BrowseMyAuthoredDocumentVersions
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "DocumentVersionList",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            value: String
        },
        DocumentVersion: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion",
            _$parentName: "DocumentVersionList",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentVersion
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "DocumentVersion",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.DocumentVersion,
            value: lightSwitchApplication.DocumentVersion
        },
        Document_Reference: {
            _$class: msls.ContentItem,
            _$name: "Document_Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.DocumentVersion,
            value: String
        },
        Document_DocumentTitle: {
            _$class: msls.ContentItem,
            _$name: "Document_DocumentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.DocumentVersion,
            value: String
        },
        MajorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "MajorVersionNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.DocumentVersion,
            value: Number
        },
        MinorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "MinorVersionNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.DocumentVersion,
            value: Number
        },
        EffectiveDate: {
            _$class: msls.ContentItem,
            _$name: "EffectiveDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.DocumentVersion,
            value: Date
        },
        DocumentStatus: {
            _$class: msls.ContentItem,
            _$name: "DocumentStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions,
            data: lightSwitchApplication.DocumentVersion,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyAuthoredDocumentVersions
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyAuthoredDocumentVersions, {
        /// <field>
        /// Called when a new BrowseMyAuthoredDocumentVersions screen is created.
        /// <br/>created(msls.application.BrowseMyAuthoredDocumentVersions screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyAuthoredDocumentVersions],
        /// <field>
        /// Called before changes on an active BrowseMyAuthoredDocumentVersions screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyAuthoredDocumentVersions screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyAuthoredDocumentVersions],
        /// <field>
        /// Called after the DocumentVersionList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("DocumentVersionList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("Search"); }],
        /// <field>
        /// Called after the DocumentVersion content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("DocumentVersion"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Document_Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Document_Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("Document_Reference"); }],
        /// <field>
        /// Called after the Document_DocumentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Document_DocumentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("Document_DocumentTitle"); }],
        /// <field>
        /// Called after the MajorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MajorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("MajorVersionNumber"); }],
        /// <field>
        /// Called after the MinorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MinorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("MinorVersionNumber"); }],
        /// <field>
        /// Called after the EffectiveDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EffectiveDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("EffectiveDate"); }],
        /// <field>
        /// Called after the DocumentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuthoredDocumentVersions().findContentItem("DocumentStatus"); }]
    });

    lightSwitchApplication.BrowseMyDocumentReviews.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyDocumentReviews
        },
        DocumentVersionReviewList: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionReviewList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.BrowseMyDocumentReviews,
            value: lightSwitchApplication.BrowseMyDocumentReviews
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "DocumentVersionReviewList",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.BrowseMyDocumentReviews,
            value: String
        },
        DocumentVersionReview: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionReview",
            _$parentName: "DocumentVersionReviewList",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.BrowseMyDocumentReviews,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyDocumentReviews,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentVersionReview
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "DocumentVersionReview",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.DocumentVersionReview,
            value: lightSwitchApplication.DocumentVersionReview
        },
        DocumentVersionHolder_DocumentVersion_Document_Reference: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionHolder_DocumentVersion_Document_Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.DocumentVersionReview,
            value: String
        },
        DocumentVersionHolder_DocumentVersion_Document_DocumentTitle: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionHolder_DocumentVersion_Document_DocumentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.DocumentVersionReview,
            value: String
        },
        DocumentVersionHolder_DocumentVersion_MajorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionHolder_DocumentVersion_MajorVersionNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.DocumentVersionReview,
            value: Number
        },
        DocumentVersionHolder_DocumentVersion_MinorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionHolder_DocumentVersion_MinorVersionNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.DocumentVersionReview,
            value: Number
        },
        DateDue: {
            _$class: msls.ContentItem,
            _$name: "DateDue",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.DocumentVersionReview,
            value: Date
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentReviews,
            data: lightSwitchApplication.DocumentVersionReview,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyDocumentReviews
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyDocumentReviews, {
        /// <field>
        /// Called when a new BrowseMyDocumentReviews screen is created.
        /// <br/>created(msls.application.BrowseMyDocumentReviews screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyDocumentReviews],
        /// <field>
        /// Called before changes on an active BrowseMyDocumentReviews screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyDocumentReviews screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyDocumentReviews],
        /// <field>
        /// Called after the DocumentVersionReviewList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionReviewList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("DocumentVersionReviewList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("Search"); }],
        /// <field>
        /// Called after the DocumentVersionReview content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionReview_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("DocumentVersionReview"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentVersionHolder_DocumentVersion_Document_Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionHolder_DocumentVersion_Document_Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("DocumentVersionHolder_DocumentVersion_Document_Reference"); }],
        /// <field>
        /// Called after the DocumentVersionHolder_DocumentVersion_Document_DocumentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionHolder_DocumentVersion_Document_DocumentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("DocumentVersionHolder_DocumentVersion_Document_DocumentTitle"); }],
        /// <field>
        /// Called after the DocumentVersionHolder_DocumentVersion_MajorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionHolder_DocumentVersion_MajorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("DocumentVersionHolder_DocumentVersion_MajorVersionNumber"); }],
        /// <field>
        /// Called after the DocumentVersionHolder_DocumentVersion_MinorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionHolder_DocumentVersion_MinorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("DocumentVersionHolder_DocumentVersion_MinorVersionNumber"); }],
        /// <field>
        /// Called after the DateDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDue_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("DateDue"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentReviews().findContentItem("DateCompleted"); }]
    });

    lightSwitchApplication.BrowseMyDocumentVersionApprovals.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals
        },
        DocumentVersionApprovalList: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionApprovalList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            value: lightSwitchApplication.BrowseMyDocumentVersionApprovals
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "DocumentVersionApprovalList",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            value: String
        },
        DocumentVersionApproval: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionApproval",
            _$parentName: "DocumentVersionApprovalList",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentVersionApproval
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "DocumentVersionApproval",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: lightSwitchApplication.DocumentVersionApproval
        },
        DocumentVersion_Document_Reference: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion_Document_Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: String
        },
        DocumentVersion_Document_DocumentTitle: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion_Document_DocumentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: String
        },
        DocumentVersion_MajorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion_MajorVersionNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: Number
        },
        DocumentVersion_MinorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion_MinorVersionNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: Number
        },
        ApprovalStatus: {
            _$class: msls.ContentItem,
            _$name: "ApprovalStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: String
        },
        ApprovalStatusDate: {
            _$class: msls.ContentItem,
            _$name: "ApprovalStatusDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals,
            data: lightSwitchApplication.DocumentVersionApproval,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyDocumentVersionApprovals
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyDocumentVersionApprovals, {
        /// <field>
        /// Called when a new BrowseMyDocumentVersionApprovals screen is created.
        /// <br/>created(msls.application.BrowseMyDocumentVersionApprovals screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyDocumentVersionApprovals],
        /// <field>
        /// Called before changes on an active BrowseMyDocumentVersionApprovals screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyDocumentVersionApprovals screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyDocumentVersionApprovals],
        /// <field>
        /// Called after the DocumentVersionApprovalList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionApprovalList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("DocumentVersionApprovalList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("Search"); }],
        /// <field>
        /// Called after the DocumentVersionApproval content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionApproval_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("DocumentVersionApproval"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentVersion_Document_Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_Document_Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("DocumentVersion_Document_Reference"); }],
        /// <field>
        /// Called after the DocumentVersion_Document_DocumentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_Document_DocumentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("DocumentVersion_Document_DocumentTitle"); }],
        /// <field>
        /// Called after the DocumentVersion_MajorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_MajorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("DocumentVersion_MajorVersionNumber"); }],
        /// <field>
        /// Called after the DocumentVersion_MinorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_MinorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("DocumentVersion_MinorVersionNumber"); }],
        /// <field>
        /// Called after the ApprovalStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovalStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("ApprovalStatus"); }],
        /// <field>
        /// Called after the ApprovalStatusDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovalStatusDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyDocumentVersionApprovals().findContentItem("ApprovalStatusDate"); }]
    });

    lightSwitchApplication.BrowseMyHeldDocumentVersions.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions
        },
        DocumentVersionHolderList: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionHolderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            value: lightSwitchApplication.BrowseMyHeldDocumentVersions
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "DocumentVersionHolderList",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            value: String
        },
        DocumentVersionHolder: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersionHolder",
            _$parentName: "DocumentVersionHolderList",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
                _$entry: {
                    elementType: lightSwitchApplication.DocumentVersionHolder
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "DocumentVersionHolder",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: lightSwitchApplication.DocumentVersionHolder
        },
        DocumentVersion_Document_Reference: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion_Document_Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: String
        },
        DocumentVersion_Document_DocumentTitle: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion_Document_DocumentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: String
        },
        DocumentVersion_MajorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion_MajorVersionNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: Number
        },
        DocumentVersion_MinorVersionNumber: {
            _$class: msls.ContentItem,
            _$name: "DocumentVersion_MinorVersionNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: Number
        },
        DateDistributedTo: {
            _$class: msls.ContentItem,
            _$name: "DateDistributedTo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: Date
        },
        DateAcknowledged: {
            _$class: msls.ContentItem,
            _$name: "DateAcknowledged",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions,
            data: lightSwitchApplication.DocumentVersionHolder,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyHeldDocumentVersions
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyHeldDocumentVersions, {
        /// <field>
        /// Called when a new BrowseMyHeldDocumentVersions screen is created.
        /// <br/>created(msls.application.BrowseMyHeldDocumentVersions screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyHeldDocumentVersions],
        /// <field>
        /// Called before changes on an active BrowseMyHeldDocumentVersions screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyHeldDocumentVersions screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyHeldDocumentVersions],
        /// <field>
        /// Called after the DocumentVersionHolderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionHolderList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("DocumentVersionHolderList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("Search"); }],
        /// <field>
        /// Called after the DocumentVersionHolder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersionHolder_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("DocumentVersionHolder"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentVersion_Document_Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_Document_Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("DocumentVersion_Document_Reference"); }],
        /// <field>
        /// Called after the DocumentVersion_Document_DocumentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_Document_DocumentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("DocumentVersion_Document_DocumentTitle"); }],
        /// <field>
        /// Called after the DocumentVersion_MajorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_MajorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("DocumentVersion_MajorVersionNumber"); }],
        /// <field>
        /// Called after the DocumentVersion_MinorVersionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentVersion_MinorVersionNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("DocumentVersion_MinorVersionNumber"); }],
        /// <field>
        /// Called after the DateDistributedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDistributedTo_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("DateDistributedTo"); }],
        /// <field>
        /// Called after the DateAcknowledged content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAcknowledged_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyHeldDocumentVersions().findContentItem("DateAcknowledged"); }]
    });

    lightSwitchApplication.BrowseMyOwnedDocuments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments
        },
        DocumentList: {
            _$class: msls.ContentItem,
            _$name: "DocumentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments,
            data: lightSwitchApplication.BrowseMyOwnedDocuments,
            value: lightSwitchApplication.BrowseMyOwnedDocuments
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "DocumentList",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments,
            data: lightSwitchApplication.BrowseMyOwnedDocuments,
            value: String
        },
        Document: {
            _$class: msls.ContentItem,
            _$name: "Document",
            _$parentName: "DocumentList",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments,
            data: lightSwitchApplication.BrowseMyOwnedDocuments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyOwnedDocuments,
                _$entry: {
                    elementType: lightSwitchApplication.Document
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Document",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.Document
        },
        DocumentType: {
            _$class: msls.ContentItem,
            _$name: "DocumentType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments,
            data: lightSwitchApplication.Document,
            value: lightSwitchApplication.DocumentType
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments,
            data: lightSwitchApplication.Document,
            value: String
        },
        DocumentTitle: {
            _$class: msls.ContentItem,
            _$name: "DocumentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments,
            data: lightSwitchApplication.Document,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments,
            data: lightSwitchApplication.Document,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyOwnedDocuments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyOwnedDocuments, {
        /// <field>
        /// Called when a new BrowseMyOwnedDocuments screen is created.
        /// <br/>created(msls.application.BrowseMyOwnedDocuments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyOwnedDocuments],
        /// <field>
        /// Called before changes on an active BrowseMyOwnedDocuments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyOwnedDocuments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyOwnedDocuments],
        /// <field>
        /// Called after the DocumentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyOwnedDocuments().findContentItem("DocumentList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyOwnedDocuments().findContentItem("Search"); }],
        /// <field>
        /// Called after the Document content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Document_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyOwnedDocuments().findContentItem("Document"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyOwnedDocuments().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DocumentType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentType_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyOwnedDocuments().findContentItem("DocumentType"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyOwnedDocuments().findContentItem("Reference"); }],
        /// <field>
        /// Called after the DocumentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyOwnedDocuments().findContentItem("DocumentTitle"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyOwnedDocuments().findContentItem("InUse"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        AllDocuments: {
            _$class: msls.ContentItem,
            _$name: "AllDocuments",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home
        },
        OwnedDocuments: {
            _$class: msls.ContentItem,
            _$name: "OwnedDocuments",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home
        },
        AuthoredDocuments: {
            _$class: msls.ContentItem,
            _$name: "AuthoredDocuments",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home
        },
        HeldDocuments: {
            _$class: msls.ContentItem,
            _$name: "HeldDocuments",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home
        },
        MyApprovals: {
            _$class: msls.ContentItem,
            _$name: "MyApprovals",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home
        },
        MyReviews: {
            _$class: msls.ContentItem,
            _$name: "MyReviews",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home
        },
        GroupSettings: {
            _$class: msls.ContentItem,
            _$name: "GroupSettings",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        DocumnetTypes: {
            _$class: msls.ContentItem,
            _$name: "DocumnetTypes",
            _$parentName: "GroupSettings",
            screen: lightSwitchApplication.Home
        },
        ChangeRequestStatuses: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatuses",
            _$parentName: "GroupSettings",
            screen: lightSwitchApplication.Home
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "GroupSettings",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the Blank method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        Blank_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the Blank method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        Blank_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Menu"); }],
        /// <field>
        /// Called after the AllDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllDocuments_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("AllDocuments"); }],
        /// <field>
        /// Called after the OwnedDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OwnedDocuments_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("OwnedDocuments"); }],
        /// <field>
        /// Called after the AuthoredDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuthoredDocuments_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("AuthoredDocuments"); }],
        /// <field>
        /// Called after the HeldDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeldDocuments_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("HeldDocuments"); }],
        /// <field>
        /// Called after the MyApprovals content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyApprovals_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyApprovals"); }],
        /// <field>
        /// Called after the MyReviews content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyReviews_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyReviews"); }],
        /// <field>
        /// Called after the GroupSettings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GroupSettings_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("GroupSettings"); }],
        /// <field>
        /// Called after the DocumnetTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumnetTypes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("DocumnetTypes"); }],
        /// <field>
        /// Called after the ChangeRequestStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatuses_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ChangeRequestStatuses"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Employees"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        AllDocuments: {
            _$class: msls.ContentItem,
            _$name: "AllDocuments",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        OwnedDocuments: {
            _$class: msls.ContentItem,
            _$name: "OwnedDocuments",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        AuthoredDocuments: {
            _$class: msls.ContentItem,
            _$name: "AuthoredDocuments",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        HeldDocuments: {
            _$class: msls.ContentItem,
            _$name: "HeldDocuments",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        MyApprovals: {
            _$class: msls.ContentItem,
            _$name: "MyApprovals",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        MyReviews: {
            _$class: msls.ContentItem,
            _$name: "MyReviews",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to determine if the Blank method can be executed.
        /// <br/>canExecute(msls.application.MobileHome screen)
        /// </field>
        Blank_canExecute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to execute the Blank method.
        /// <br/>execute(msls.application.MobileHome screen)
        /// </field>
        Blank_execute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Group"); }],
        /// <field>
        /// Called after the AllDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllDocuments_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("AllDocuments"); }],
        /// <field>
        /// Called after the OwnedDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OwnedDocuments_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("OwnedDocuments"); }],
        /// <field>
        /// Called after the AuthoredDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuthoredDocuments_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("AuthoredDocuments"); }],
        /// <field>
        /// Called after the HeldDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeldDocuments_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("HeldDocuments"); }],
        /// <field>
        /// Called after the MyApprovals content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyApprovals_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyApprovals"); }],
        /// <field>
        /// Called after the MyReviews content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyReviews_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyReviews"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Settings"); }]
    });

    lightSwitchApplication.MobileSettings.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileSettings
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileSettings,
            data: lightSwitchApplication.MobileSettings,
            value: lightSwitchApplication.MobileSettings
        },
        DocumentTypes: {
            _$class: msls.ContentItem,
            _$name: "DocumentTypes",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        ChangeStatus: {
            _$class: msls.ContentItem,
            _$name: "ChangeStatus",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileSettings
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileSettings, {
        /// <field>
        /// Called when a new MobileSettings screen is created.
        /// <br/>created(msls.application.MobileSettings screen)
        /// </field>
        created: [lightSwitchApplication.MobileSettings],
        /// <field>
        /// Called before changes on an active MobileSettings screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileSettings screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileSettings],
        /// <field>
        /// Called to determine if the Blank method can be executed.
        /// <br/>canExecute(msls.application.MobileSettings screen)
        /// </field>
        Blank_canExecute: [lightSwitchApplication.MobileSettings],
        /// <field>
        /// Called to execute the Blank method.
        /// <br/>execute(msls.application.MobileSettings screen)
        /// </field>
        Blank_execute: [lightSwitchApplication.MobileSettings],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("Group"); }],
        /// <field>
        /// Called after the DocumentTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentTypes_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("DocumentTypes"); }],
        /// <field>
        /// Called after the ChangeStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeStatus_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("ChangeStatus"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("Employees"); }]
    });

}(msls.application));