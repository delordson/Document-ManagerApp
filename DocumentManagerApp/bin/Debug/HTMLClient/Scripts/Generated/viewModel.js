/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditChangeRequest(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditChangeRequest screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ChangeRequest" type="msls.application.ChangeRequest">
        /// Gets or sets the changeRequest for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditChangeRequest.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditChangeRequest", parameters);
    }

    function AddEditChangeRequestStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditChangeRequestStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ChangeRequestStatus" type="msls.application.ChangeRequestStatus">
        /// Gets or sets the changeRequestStatus for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditChangeRequestStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditChangeRequestStatus", parameters);
    }

    function AddEditDocument(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditDocument screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Document" type="msls.application.Document">
        /// Gets or sets the document for this screen.
        /// </field>
        /// <field name="DocumentVersions" type="msls.VisualCollection" elementType="msls.application.DocumentVersion">
        /// Gets the documentVersions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditDocument.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditDocument", parameters);
    }

    function AddEditDocumentType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditDocumentType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DocumentType" type="msls.application.DocumentType">
        /// Gets or sets the documentType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditDocumentType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditDocumentType", parameters);
    }

    function AddEditDocumentVersion(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditDocumentVersion screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DocumentVersion" type="msls.application.DocumentVersion">
        /// Gets or sets the documentVersion for this screen.
        /// </field>
        /// <field name="DocumentVersionApprovals" type="msls.VisualCollection" elementType="msls.application.DocumentVersionApproval">
        /// Gets the documentVersionApprovals for this screen.
        /// </field>
        /// <field name="DocumentVersionHolders" type="msls.VisualCollection" elementType="msls.application.DocumentVersionHolder">
        /// Gets the documentVersionHolders for this screen.
        /// </field>
        /// <field name="ChangeRequests" type="msls.VisualCollection" elementType="msls.application.ChangeRequest">
        /// Gets the changeRequests for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditDocumentVersion.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditDocumentVersion", parameters);
    }

    function AddEditDocumentVersionApproval(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditDocumentVersionApproval screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DocumentVersionApproval" type="msls.application.DocumentVersionApproval">
        /// Gets or sets the documentVersionApproval for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditDocumentVersionApproval.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditDocumentVersionApproval", parameters);
    }

    function AddEditDocumentVersionHolder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditDocumentVersionHolder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DocumentVersionHolder" type="msls.application.DocumentVersionHolder">
        /// Gets or sets the documentVersionHolder for this screen.
        /// </field>
        /// <field name="DocumentVersionReviews" type="msls.VisualCollection" elementType="msls.application.DocumentVersionReview">
        /// Gets the documentVersionReviews for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditDocumentVersionHolder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditDocumentVersionHolder", parameters);
    }

    function AddEditDocumentVersionReview(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditDocumentVersionReview screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DocumentVersionReview" type="msls.application.DocumentVersionReview">
        /// Gets or sets the documentVersionReview for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditDocumentVersionReview.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditDocumentVersionReview", parameters);
    }

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddStoredDocument(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddStoredDocument screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DocumentVersion" type="msls.application.DocumentVersion">
        /// Gets or sets the documentVersion for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddStoredDocument.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddStoredDocument", parameters);
    }

    function BrowseChangeRequestStatuses(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseChangeRequestStatuses screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ChangeRequestStatuses" type="msls.VisualCollection" elementType="msls.application.ChangeRequestStatus">
        /// Gets the changeRequestStatuses for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseChangeRequestStatuses.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseChangeRequestStatuses", parameters);
    }

    function BrowseDocuments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseDocuments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Documents" type="msls.VisualCollection" elementType="msls.application.Document">
        /// Gets the documents for this screen.
        /// </field>
        /// <field name="DocumentTypeId" type="Number">
        /// Gets or sets the documentTypeId for this screen.
        /// </field>
        /// <field name="DocumentType" type="String">
        /// Gets or sets the documentType for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseDocuments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseDocuments", parameters);
    }

    function BrowseDocumentsByDocumentTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseDocumentsByDocumentTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DocumentTypes" type="msls.VisualCollection" elementType="msls.application.DocumentType">
        /// Gets the documentTypes for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseDocumentsByDocumentTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseDocumentsByDocumentTypes", parameters);
    }

    function BrowseDocumentTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseDocumentTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="DocumentTypes" type="msls.VisualCollection" elementType="msls.application.DocumentType">
        /// Gets the documentTypes for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseDocumentTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseDocumentTypes", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseMyAuthoredDocumentVersions(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyAuthoredDocumentVersions screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyAuthoredDocumentVersions" type="msls.VisualCollection" elementType="msls.application.DocumentVersion">
        /// Gets the myAuthoredDocumentVersions for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyAuthoredDocumentVersions.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyAuthoredDocumentVersions", parameters);
    }

    function BrowseMyDocumentReviews(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyDocumentReviews screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyDocumentReviews" type="msls.VisualCollection" elementType="msls.application.DocumentVersionReview">
        /// Gets the myDocumentReviews for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyDocumentReviews.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyDocumentReviews", parameters);
    }

    function BrowseMyDocumentVersionApprovals(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyDocumentVersionApprovals screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyDocumentVersionApprovals" type="msls.VisualCollection" elementType="msls.application.DocumentVersionApproval">
        /// Gets the myDocumentVersionApprovals for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyDocumentVersionApprovals.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyDocumentVersionApprovals", parameters);
    }

    function BrowseMyHeldDocumentVersions(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyHeldDocumentVersions screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyHeldDocumentVersions" type="msls.VisualCollection" elementType="msls.application.DocumentVersionHolder">
        /// Gets the myHeldDocumentVersions for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyHeldDocumentVersions.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyHeldDocumentVersions", parameters);
    }

    function BrowseMyOwnedDocuments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyOwnedDocuments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyOwnedDocuments" type="msls.VisualCollection" elementType="msls.application.Document">
        /// Gets the myOwnedDocuments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyOwnedDocuments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyOwnedDocuments", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    function MobileSettings(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileSettings screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileSettings.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileSettings", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditChangeRequest: $defineScreen(AddEditChangeRequest, [
            { name: "ChangeRequest", kind: "local", type: lightSwitchApplication.ChangeRequest }
        ], [
        ]),

        AddEditChangeRequestStatus: $defineScreen(AddEditChangeRequestStatus, [
            { name: "ChangeRequestStatus", kind: "local", type: lightSwitchApplication.ChangeRequestStatus }
        ], [
        ]),

        AddEditDocument: $defineScreen(AddEditDocument, [
            { name: "Document", kind: "local", type: lightSwitchApplication.Document },
            {
                name: "DocumentVersions", kind: "collection", elementType: lightSwitchApplication.DocumentVersion,
                getNavigationProperty: function () {
                    if (this.owner.Document) {
                        return this.owner.Document.details.properties.DocumentVersions;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Author");
                }
            }
        ], [
        ]),

        AddEditDocumentType: $defineScreen(AddEditDocumentType, [
            { name: "DocumentType", kind: "local", type: lightSwitchApplication.DocumentType }
        ], [
        ]),

        AddEditDocumentVersion: $defineScreen(AddEditDocumentVersion, [
            { name: "DocumentVersion", kind: "local", type: lightSwitchApplication.DocumentVersion },
            {
                name: "DocumentVersionApprovals", kind: "collection", elementType: lightSwitchApplication.DocumentVersionApproval,
                getNavigationProperty: function () {
                    if (this.owner.DocumentVersion) {
                        return this.owner.DocumentVersion.details.properties.DocumentVersionApprovals;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Approver");
                }
            },
            {
                name: "DocumentVersionHolders", kind: "collection", elementType: lightSwitchApplication.DocumentVersionHolder,
                getNavigationProperty: function () {
                    if (this.owner.DocumentVersion) {
                        return this.owner.DocumentVersion.details.properties.DocumentVersionHolders;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("CopyHolder");
                }
            },
            {
                name: "ChangeRequests", kind: "collection", elementType: lightSwitchApplication.ChangeRequest,
                getNavigationProperty: function () {
                    if (this.owner.DocumentVersion) {
                        return this.owner.DocumentVersion.details.properties.ChangeRequests;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("RaisedBy").expand("ChangeRequestStatus");
                }
            }
        ], [
            { name: "DownLoadDocument" },
            { name: "DownloadDocument_Tap" },
            { name: "DeleteDocument" }
        ]),

        AddEditDocumentVersionApproval: $defineScreen(AddEditDocumentVersionApproval, [
            { name: "DocumentVersionApproval", kind: "local", type: lightSwitchApplication.DocumentVersionApproval }
        ], [
        ]),

        AddEditDocumentVersionHolder: $defineScreen(AddEditDocumentVersionHolder, [
            { name: "DocumentVersionHolder", kind: "local", type: lightSwitchApplication.DocumentVersionHolder },
            {
                name: "DocumentVersionReviews", kind: "collection", elementType: lightSwitchApplication.DocumentVersionReview,
                getNavigationProperty: function () {
                    if (this.owner.DocumentVersionHolder) {
                        return this.owner.DocumentVersionHolder.details.properties.DocumentVersionReviews;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditDocumentVersionReview: $defineScreen(AddEditDocumentVersionReview, [
            { name: "DocumentVersionReview", kind: "local", type: lightSwitchApplication.DocumentVersionReview }
        ], [
        ]),

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee }
        ], [
        ]),

        AddStoredDocument: $defineScreen(AddStoredDocument, [
            { name: "DocumentVersion", kind: "local", type: lightSwitchApplication.DocumentVersion }
        ], [
        ]),

        BrowseChangeRequestStatuses: $defineScreen(BrowseChangeRequestStatuses, [
            {
                name: "ChangeRequestStatuses", kind: "collection", elementType: lightSwitchApplication.ChangeRequestStatus,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.ChangeRequestStatuses.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Status)") + "").orderBy("Status");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseDocuments: $defineScreen(BrowseDocuments, [
            {
                name: "Documents", kind: "collection", elementType: lightSwitchApplication.Document,
                createQuery: function (DocumentTypeId, Search) {
                    return this.dataWorkspace.ApplicationData.Documents.filter("" + ((DocumentTypeId === undefined || DocumentTypeId === null) ? "false" : "(DocumentType/Id eq " + $toODataString(DocumentTypeId, "Int32?") + ")") + " and (((" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentTitle)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Reference)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentOwner/FirstName)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentOwner/LastName)") + ")").orderBy("DocumentTitle").expand("DocumentOwner");
                }
            },
            { name: "DocumentTypeId", kind: "local", type: Number },
            { name: "DocumentType", kind: "local", type: String },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseDocumentsByDocumentTypes: $defineScreen(BrowseDocumentsByDocumentTypes, [
            {
                name: "DocumentTypes", kind: "collection", elementType: lightSwitchApplication.DocumentType,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.DocumentTypes.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentTypeCode)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentTypeDescription)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseDocumentTypes: $defineScreen(BrowseDocumentTypes, [
            {
                name: "DocumentTypes", kind: "collection", elementType: lightSwitchApplication.DocumentType,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.DocumentTypes.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentTypeCode)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentTypeDescription)") + "").orderBy("DocumentTypeCode");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Employees.filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", FirstName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", LastName)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", UserName)") + "").orderBy("LastName").thenBy("FirstName").thenBy("UserName");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyAuthoredDocumentVersions: $defineScreen(BrowseMyAuthoredDocumentVersions, [
            {
                name: "MyAuthoredDocumentVersions", kind: "collection", elementType: lightSwitchApplication.DocumentVersion,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.MyAuthoredDocumentVersions().filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Document/Reference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Document/DocumentTitle)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentStatus)") + "").expand("Document");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyDocumentReviews: $defineScreen(BrowseMyDocumentReviews, [
            {
                name: "MyDocumentReviews", kind: "collection", elementType: lightSwitchApplication.DocumentVersionReview,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.MyDocumentReviews().filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentVersionHolder/DocumentVersion/Document/Reference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentVersionHolder/DocumentVersion/Document/DocumentTitle)") + "").expand("DocumentVersionHolder").expand("DocumentVersionHolder.DocumentVersion").expand("DocumentVersionHolder.DocumentVersion.Document");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyDocumentVersionApprovals: $defineScreen(BrowseMyDocumentVersionApprovals, [
            {
                name: "MyDocumentVersionApprovals", kind: "collection", elementType: lightSwitchApplication.DocumentVersionApproval,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.MyDocumentVersionApprovals().filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentVersion/Document/Reference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentVersion/Document/DocumentTitle)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ApprovalStatus)") + "").expand("DocumentVersion").expand("DocumentVersion.Document");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyHeldDocumentVersions: $defineScreen(BrowseMyHeldDocumentVersions, [
            {
                name: "MyHeldDocumentVersions", kind: "collection", elementType: lightSwitchApplication.DocumentVersionHolder,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.MyHeldDocumentVersions().filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentVersion/Document/Reference)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", DocumentVersion/Document/DocumentTitle)") + "").expand("DocumentVersion").expand("DocumentVersion.Document");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyOwnedDocuments: $defineScreen(BrowseMyOwnedDocuments, [
            {
                name: "MyOwnedDocuments", kind: "collection", elementType: lightSwitchApplication.Document,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.MyOwnedDocuments().expand("DocumentType");
                }
            }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
            { name: "Blank" }
        ]),

        MobileHome: $defineScreen(MobileHome, [
        ], [
            { name: "Blank" }
        ]),

        MobileSettings: $defineScreen(MobileSettings, [
        ], [
            { name: "Blank" }
        ]),

        showAddEditChangeRequest: $defineShowScreen(function showAddEditChangeRequest(ChangeRequest, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditChangeRequest screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditChangeRequest", parameters, options);
        }),

        showAddEditChangeRequestStatus: $defineShowScreen(function showAddEditChangeRequestStatus(ChangeRequestStatus, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditChangeRequestStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditChangeRequestStatus", parameters, options);
        }),

        showAddEditDocument: $defineShowScreen(function showAddEditDocument(Document, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditDocument screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditDocument", parameters, options);
        }),

        showAddEditDocumentType: $defineShowScreen(function showAddEditDocumentType(DocumentType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditDocumentType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditDocumentType", parameters, options);
        }),

        showAddEditDocumentVersion: $defineShowScreen(function showAddEditDocumentVersion(DocumentVersion, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditDocumentVersion screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditDocumentVersion", parameters, options);
        }),

        showAddEditDocumentVersionApproval: $defineShowScreen(function showAddEditDocumentVersionApproval(DocumentVersionApproval, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditDocumentVersionApproval screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditDocumentVersionApproval", parameters, options);
        }),

        showAddEditDocumentVersionHolder: $defineShowScreen(function showAddEditDocumentVersionHolder(DocumentVersionHolder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditDocumentVersionHolder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditDocumentVersionHolder", parameters, options);
        }),

        showAddEditDocumentVersionReview: $defineShowScreen(function showAddEditDocumentVersionReview(DocumentVersionReview, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditDocumentVersionReview screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditDocumentVersionReview", parameters, options);
        }),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddStoredDocument: $defineShowScreen(function showAddStoredDocument(DocumentVersion, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddStoredDocument screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddStoredDocument", parameters, options);
        }),

        showBrowseChangeRequestStatuses: $defineShowScreen(function showBrowseChangeRequestStatuses(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseChangeRequestStatuses screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseChangeRequestStatuses", parameters, options);
        }),

        showBrowseDocuments: $defineShowScreen(function showBrowseDocuments(DocumentTypeId, DocumentType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseDocuments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("BrowseDocuments", parameters, options);
        }),

        showBrowseDocumentsByDocumentTypes: $defineShowScreen(function showBrowseDocumentsByDocumentTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseDocumentsByDocumentTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseDocumentsByDocumentTypes", parameters, options);
        }),

        showBrowseDocumentTypes: $defineShowScreen(function showBrowseDocumentTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseDocumentTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseDocumentTypes", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseMyAuthoredDocumentVersions: $defineShowScreen(function showBrowseMyAuthoredDocumentVersions(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyAuthoredDocumentVersions screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyAuthoredDocumentVersions", parameters, options);
        }),

        showBrowseMyDocumentReviews: $defineShowScreen(function showBrowseMyDocumentReviews(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyDocumentReviews screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyDocumentReviews", parameters, options);
        }),

        showBrowseMyDocumentVersionApprovals: $defineShowScreen(function showBrowseMyDocumentVersionApprovals(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyDocumentVersionApprovals screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyDocumentVersionApprovals", parameters, options);
        }),

        showBrowseMyHeldDocumentVersions: $defineShowScreen(function showBrowseMyHeldDocumentVersions(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyHeldDocumentVersions screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyHeldDocumentVersions", parameters, options);
        }),

        showBrowseMyOwnedDocuments: $defineShowScreen(function showBrowseMyOwnedDocuments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyOwnedDocuments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyOwnedDocuments", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        }),

        showMobileSettings: $defineShowScreen(function showMobileSettings(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileSettings screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileSettings", parameters, options);
        })

    });

}(msls.application));
