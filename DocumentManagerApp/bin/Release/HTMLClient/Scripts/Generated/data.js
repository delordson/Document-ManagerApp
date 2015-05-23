/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Document(entitySet) {
        /// <summary>
        /// Represents the Document entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this document.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this document.
        /// </field>
        /// <field name="DocumentTitle" type="String">
        /// Gets or sets the documentTitle for this document.
        /// </field>
        /// <field name="Reference" type="String">
        /// Gets or sets the reference for this document.
        /// </field>
        /// <field name="InUse" type="Boolean">
        /// Gets or sets the inUse for this document.
        /// </field>
        /// <field name="DocumentType" type="msls.application.DocumentType">
        /// Gets or sets the documentType for this document.
        /// </field>
        /// <field name="DocumentOwner" type="msls.application.Employee">
        /// Gets or sets the documentOwner for this document.
        /// </field>
        /// <field name="DocumentVersions" type="msls.EntityCollection" elementType="msls.application.DocumentVersion">
        /// Gets the documentVersions for this document.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this document.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this document.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this document.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this document.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this document.
        /// </field>
        /// <field name="details" type="msls.application.Document.Details">
        /// Gets the details for this document.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function DocumentType(entitySet) {
        /// <summary>
        /// Represents the DocumentType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this documentType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this documentType.
        /// </field>
        /// <field name="DocumentTypeCode" type="String">
        /// Gets or sets the documentTypeCode for this documentType.
        /// </field>
        /// <field name="DocumentTypeDescription" type="String">
        /// Gets or sets the documentTypeDescription for this documentType.
        /// </field>
        /// <field name="Documents" type="msls.EntityCollection" elementType="msls.application.Document">
        /// Gets the documents for this documentType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this documentType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this documentType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this documentType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this documentType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this documentType.
        /// </field>
        /// <field name="details" type="msls.application.DocumentType.Details">
        /// Gets the details for this documentType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// This is the user name of the 
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="Documents" type="msls.EntityCollection" elementType="msls.application.Document">
        /// Gets the documents for this employee.
        /// </field>
        /// <field name="DocumentVersions" type="msls.EntityCollection" elementType="msls.application.DocumentVersion">
        /// Gets the documentVersions for this employee.
        /// </field>
        /// <field name="DocumentVersionHolders" type="msls.EntityCollection" elementType="msls.application.DocumentVersionHolder">
        /// Gets the documentVersionHolders for this employee.
        /// </field>
        /// <field name="DocumentVersionApprovals" type="msls.EntityCollection" elementType="msls.application.DocumentVersionApproval">
        /// Gets the documentVersionApprovals for this employee.
        /// </field>
        /// <field name="ChangeRequests" type="msls.EntityCollection" elementType="msls.application.ChangeRequest">
        /// Gets the changeRequests for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function DocumentVersion(entitySet) {
        /// <summary>
        /// Represents the DocumentVersion entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this documentVersion.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this documentVersion.
        /// </field>
        /// <field name="Document" type="msls.application.Document">
        /// Gets or sets the document for this documentVersion.
        /// </field>
        /// <field name="Author" type="msls.application.Employee">
        /// Gets or sets the author for this documentVersion.
        /// </field>
        /// <field name="MajorVersionNumber" type="Number">
        /// Gets or sets the majorVersionNumber for this documentVersion.
        /// </field>
        /// <field name="MinorVersionNumber" type="Number">
        /// Gets or sets the minorVersionNumber for this documentVersion.
        /// </field>
        /// <field name="Changes" type="String">
        /// Gets or sets the changes for this documentVersion.
        /// </field>
        /// <field name="EffectiveDate" type="Date">
        /// Gets or sets the effectiveDate for this documentVersion.
        /// </field>
        /// <field name="DocumentStatus" type="String">
        /// Gets or sets the documentStatus for this documentVersion.
        /// </field>
        /// <field name="DocumentVersionApprovals" type="msls.EntityCollection" elementType="msls.application.DocumentVersionApproval">
        /// Gets the documentVersionApprovals for this documentVersion.
        /// </field>
        /// <field name="DocumentVersionHolders" type="msls.EntityCollection" elementType="msls.application.DocumentVersionHolder">
        /// Gets the documentVersionHolders for this documentVersion.
        /// </field>
        /// <field name="ChangeRequests" type="msls.EntityCollection" elementType="msls.application.ChangeRequest">
        /// Gets the changeRequests for this documentVersion.
        /// </field>
        /// <field name="DocumentName" type="String">
        /// Gets or sets the documentName for this documentVersion.
        /// </field>
        /// <field name="StoredDocument" type="String">
        /// Gets or sets the storedDocument for this documentVersion.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this documentVersion.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this documentVersion.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this documentVersion.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this documentVersion.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this documentVersion.
        /// </field>
        /// <field name="details" type="msls.application.DocumentVersion.Details">
        /// Gets the details for this documentVersion.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function DocumentVersionHolder(entitySet) {
        /// <summary>
        /// Represents the DocumentVersionHolder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this documentVersionHolder.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this documentVersionHolder.
        /// </field>
        /// <field name="DateDistributedTo" type="Date">
        /// Gets or sets the dateDistributedTo for this documentVersionHolder.
        /// </field>
        /// <field name="DateAcknowledged" type="Date">
        /// Gets or sets the dateAcknowledged for this documentVersionHolder.
        /// </field>
        /// <field name="DocumentVersion" type="msls.application.DocumentVersion">
        /// Gets or sets the documentVersion for this documentVersionHolder.
        /// </field>
        /// <field name="CopyHolder" type="msls.application.Employee">
        /// Gets or sets the copyHolder for this documentVersionHolder.
        /// </field>
        /// <field name="DocumentVersionReviews" type="msls.EntityCollection" elementType="msls.application.DocumentVersionReview">
        /// Gets the documentVersionReviews for this documentVersionHolder.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this documentVersionHolder.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this documentVersionHolder.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this documentVersionHolder.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this documentVersionHolder.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this documentVersionHolder.
        /// </field>
        /// <field name="details" type="msls.application.DocumentVersionHolder.Details">
        /// Gets the details for this documentVersionHolder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function DocumentVersionReview(entitySet) {
        /// <summary>
        /// Represents the DocumentVersionReview entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this documentVersionReview.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this documentVersionReview.
        /// </field>
        /// <field name="DateDue" type="Date">
        /// Gets or sets the dateDue for this documentVersionReview.
        /// </field>
        /// <field name="DateCompleted" type="Date">
        /// Gets or sets the dateCompleted for this documentVersionReview.
        /// </field>
        /// <field name="Outcome" type="String">
        /// Gets or sets the outcome for this documentVersionReview.
        /// </field>
        /// <field name="DocumentVersionHolder" type="msls.application.DocumentVersionHolder">
        /// Gets or sets the documentVersionHolder for this documentVersionReview.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this documentVersionReview.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this documentVersionReview.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this documentVersionReview.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this documentVersionReview.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this documentVersionReview.
        /// </field>
        /// <field name="details" type="msls.application.DocumentVersionReview.Details">
        /// Gets the details for this documentVersionReview.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function DocumentVersionApproval(entitySet) {
        /// <summary>
        /// Represents the DocumentVersionApproval entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this documentVersionApproval.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this documentVersionApproval.
        /// </field>
        /// <field name="DocumentVersion" type="msls.application.DocumentVersion">
        /// Gets or sets the documentVersion for this documentVersionApproval.
        /// </field>
        /// <field name="Approver" type="msls.application.Employee">
        /// Gets or sets the approver for this documentVersionApproval.
        /// </field>
        /// <field name="ApprovalStatus" type="String">
        /// Gets or sets the approvalStatus for this documentVersionApproval.
        /// </field>
        /// <field name="ApprovalStatusDate" type="Date">
        /// Gets or sets the approvalStatusDate for this documentVersionApproval.
        /// </field>
        /// <field name="ApproverComments" type="String">
        /// Gets or sets the approverComments for this documentVersionApproval.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this documentVersionApproval.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this documentVersionApproval.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this documentVersionApproval.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this documentVersionApproval.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this documentVersionApproval.
        /// </field>
        /// <field name="details" type="msls.application.DocumentVersionApproval.Details">
        /// Gets the details for this documentVersionApproval.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ChangeRequest(entitySet) {
        /// <summary>
        /// Represents the ChangeRequest entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this changeRequest.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this changeRequest.
        /// </field>
        /// <field name="Reference" type="String">
        /// Gets or sets the reference for this changeRequest.
        /// </field>
        /// <field name="ChangeRequestTitle" type="String">
        /// Gets or sets the changeRequestTitle for this changeRequest.
        /// </field>
        /// <field name="ChangeRequestDescription" type="String">
        /// Gets or sets the changeRequestDescription for this changeRequest.
        /// </field>
        /// <field name="RaisedBy" type="msls.application.Employee">
        /// Gets or sets the raisedBy for this changeRequest.
        /// </field>
        /// <field name="DateRaised" type="Date">
        /// Gets or sets the dateRaised for this changeRequest.
        /// </field>
        /// <field name="TargetClosureDate" type="Date">
        /// Gets or sets the targetClosureDate for this changeRequest.
        /// </field>
        /// <field name="ChangeRequestStatus" type="msls.application.ChangeRequestStatus">
        /// Gets or sets the changeRequestStatus for this changeRequest.
        /// </field>
        /// <field name="DateClosed" type="Date">
        /// Gets or sets the dateClosed for this changeRequest.
        /// </field>
        /// <field name="DocumentVersion" type="msls.application.DocumentVersion">
        /// Gets or sets the documentVersion for this changeRequest.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this changeRequest.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this changeRequest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this changeRequest.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this changeRequest.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this changeRequest.
        /// </field>
        /// <field name="details" type="msls.application.ChangeRequest.Details">
        /// Gets the details for this changeRequest.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ChangeRequestStatus(entitySet) {
        /// <summary>
        /// Represents the ChangeRequestStatus entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this changeRequestStatus.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this changeRequestStatus.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this changeRequestStatus.
        /// </field>
        /// <field name="ChangeRequests" type="msls.EntityCollection" elementType="msls.application.ChangeRequest">
        /// Gets the changeRequests for this changeRequestStatus.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this changeRequestStatus.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this changeRequestStatus.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this changeRequestStatus.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this changeRequestStatus.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this changeRequestStatus.
        /// </field>
        /// <field name="details" type="msls.application.ChangeRequestStatus.Details">
        /// Gets the details for this changeRequestStatus.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Documents" type="msls.EntitySet">
        /// Gets the Documents entity set.
        /// </field>
        /// <field name="DocumentTypes" type="msls.EntitySet">
        /// Gets the DocumentTypes entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="DocumentVersions" type="msls.EntitySet">
        /// Gets the DocumentVersions entity set.
        /// </field>
        /// <field name="DocumentVersionHolders" type="msls.EntitySet">
        /// Gets the DocumentVersionHolders entity set.
        /// </field>
        /// <field name="DocumentVersionReviews" type="msls.EntitySet">
        /// Gets the DocumentVersionReviews entity set.
        /// </field>
        /// <field name="DocumentVersionApprovals" type="msls.EntitySet">
        /// Gets the DocumentVersionApprovals entity set.
        /// </field>
        /// <field name="ChangeRequests" type="msls.EntitySet">
        /// Gets the ChangeRequests entity set.
        /// </field>
        /// <field name="ChangeRequestStatuses" type="msls.EntitySet">
        /// Gets the ChangeRequestStatuses entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Document: $defineEntity(Document, [
            { name: "Id", type: Number },
            { name: "DocumentTitle", type: String },
            { name: "Reference", type: String },
            { name: "InUse", type: Boolean },
            { name: "DocumentType", kind: "reference", type: DocumentType },
            { name: "DocumentOwner", kind: "reference", type: Employee },
            { name: "DocumentVersions", kind: "collection", elementType: DocumentVersion },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        DocumentType: $defineEntity(DocumentType, [
            { name: "Id", type: Number },
            { name: "DocumentTypeCode", type: String },
            { name: "DocumentTypeDescription", type: String },
            { name: "Documents", kind: "collection", elementType: Document },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "UserName", type: String },
            { name: "Email", type: String },
            { name: "Current", type: Boolean },
            { name: "Documents", kind: "collection", elementType: Document },
            { name: "DocumentVersions", kind: "collection", elementType: DocumentVersion },
            { name: "DocumentVersionHolders", kind: "collection", elementType: DocumentVersionHolder },
            { name: "DocumentVersionApprovals", kind: "collection", elementType: DocumentVersionApproval },
            { name: "ChangeRequests", kind: "collection", elementType: ChangeRequest },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        DocumentVersion: $defineEntity(DocumentVersion, [
            { name: "Id", type: Number },
            { name: "Document", kind: "reference", type: Document },
            { name: "Author", kind: "reference", type: Employee },
            { name: "MajorVersionNumber", type: Number },
            { name: "MinorVersionNumber", type: Number },
            { name: "Changes", type: String },
            { name: "EffectiveDate", type: Date },
            { name: "DocumentStatus", type: String },
            { name: "DocumentVersionApprovals", kind: "collection", elementType: DocumentVersionApproval },
            { name: "DocumentVersionHolders", kind: "collection", elementType: DocumentVersionHolder },
            { name: "ChangeRequests", kind: "collection", elementType: ChangeRequest },
            { name: "DocumentName", type: String },
            { name: "StoredDocument", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        DocumentVersionHolder: $defineEntity(DocumentVersionHolder, [
            { name: "Id", type: Number },
            { name: "DateDistributedTo", type: Date },
            { name: "DateAcknowledged", type: Date },
            { name: "DocumentVersion", kind: "reference", type: DocumentVersion },
            { name: "CopyHolder", kind: "reference", type: Employee },
            { name: "DocumentVersionReviews", kind: "collection", elementType: DocumentVersionReview },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        DocumentVersionReview: $defineEntity(DocumentVersionReview, [
            { name: "Id", type: Number },
            { name: "DateDue", type: Date },
            { name: "DateCompleted", type: Date },
            { name: "Outcome", type: String },
            { name: "DocumentVersionHolder", kind: "reference", type: DocumentVersionHolder },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        DocumentVersionApproval: $defineEntity(DocumentVersionApproval, [
            { name: "Id", type: Number },
            { name: "DocumentVersion", kind: "reference", type: DocumentVersion },
            { name: "Approver", kind: "reference", type: Employee },
            { name: "ApprovalStatus", type: String },
            { name: "ApprovalStatusDate", type: Date },
            { name: "ApproverComments", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ChangeRequest: $defineEntity(ChangeRequest, [
            { name: "Id", type: Number },
            { name: "Reference", type: String },
            { name: "ChangeRequestTitle", type: String },
            { name: "ChangeRequestDescription", type: String },
            { name: "RaisedBy", kind: "reference", type: Employee },
            { name: "DateRaised", type: Date },
            { name: "TargetClosureDate", type: Date },
            { name: "ChangeRequestStatus", kind: "reference", type: ChangeRequestStatus },
            { name: "DateClosed", type: Date },
            { name: "DocumentVersion", kind: "reference", type: DocumentVersion },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ChangeRequestStatus: $defineEntity(ChangeRequestStatus, [
            { name: "Id", type: Number },
            { name: "Status", type: String },
            { name: "ChangeRequests", kind: "collection", elementType: ChangeRequest },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Documents", elementType: Document },
            { name: "DocumentTypes", elementType: DocumentType },
            { name: "Employees", elementType: Employee },
            { name: "DocumentVersions", elementType: DocumentVersion },
            { name: "DocumentVersionHolders", elementType: DocumentVersionHolder },
            { name: "DocumentVersionReviews", elementType: DocumentVersionReview },
            { name: "DocumentVersionApprovals", elementType: DocumentVersionApproval },
            { name: "ChangeRequests", elementType: ChangeRequest },
            { name: "ChangeRequestStatuses", elementType: ChangeRequestStatus }
        ], [
            {
                name: "Documents_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Documents },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Documents(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "DocumentTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.DocumentTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/DocumentTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "DocumentVersions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.DocumentVersions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/DocumentVersions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "DocumentVersionHolders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.DocumentVersionHolders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/DocumentVersionHolders(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "DocumentVersionReviews_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.DocumentVersionReviews },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/DocumentVersionReviews(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "DocumentVersionApprovals_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.DocumentVersionApprovals },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/DocumentVersionApprovals(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ChangeRequests_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ChangeRequests },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ChangeRequests(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ChangeRequestStatuses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ChangeRequestStatuses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ChangeRequestStatuses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MyHeldDocumentVersions", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.DocumentVersionHolders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyHeldDocumentVersions()",
                        {
                        });
                }
            },
            {
                name: "MyOwnedDocuments", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Documents },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyOwnedDocuments()",
                        {
                        });
                }
            },
            {
                name: "MyAuthoredDocumentVersions", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.DocumentVersions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyAuthoredDocumentVersions()",
                        {
                        });
                }
            },
            {
                name: "MyDocumentReviews", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.DocumentVersionReviews },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyDocumentReviews()",
                        {
                        });
                }
            },
            {
                name: "MyDocumentVersionApprovals", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.DocumentVersionApprovals },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyDocumentVersionApprovals()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
