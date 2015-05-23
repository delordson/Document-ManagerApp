/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Document, {
        /// <field>
        /// Called when a new document is created.
        /// <br/>created(msls.application.Document entity)
        /// </field>
        created: [lightSwitchApplication.Document]
    });

    msls._addEntryPoints(lightSwitchApplication.DocumentType, {
        /// <field>
        /// Called when a new documentType is created.
        /// <br/>created(msls.application.DocumentType entity)
        /// </field>
        created: [lightSwitchApplication.DocumentType]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.DocumentVersion, {
        /// <field>
        /// Called when a new documentVersion is created.
        /// <br/>created(msls.application.DocumentVersion entity)
        /// </field>
        created: [lightSwitchApplication.DocumentVersion]
    });

    msls._addEntryPoints(lightSwitchApplication.DocumentVersionHolder, {
        /// <field>
        /// Called when a new documentVersionHolder is created.
        /// <br/>created(msls.application.DocumentVersionHolder entity)
        /// </field>
        created: [lightSwitchApplication.DocumentVersionHolder]
    });

    msls._addEntryPoints(lightSwitchApplication.DocumentVersionReview, {
        /// <field>
        /// Called when a new documentVersionReview is created.
        /// <br/>created(msls.application.DocumentVersionReview entity)
        /// </field>
        created: [lightSwitchApplication.DocumentVersionReview]
    });

    msls._addEntryPoints(lightSwitchApplication.DocumentVersionApproval, {
        /// <field>
        /// Called when a new documentVersionApproval is created.
        /// <br/>created(msls.application.DocumentVersionApproval entity)
        /// </field>
        created: [lightSwitchApplication.DocumentVersionApproval]
    });

    msls._addEntryPoints(lightSwitchApplication.ChangeRequest, {
        /// <field>
        /// Called when a new changeRequest is created.
        /// <br/>created(msls.application.ChangeRequest entity)
        /// </field>
        created: [lightSwitchApplication.ChangeRequest]
    });

    msls._addEntryPoints(lightSwitchApplication.ChangeRequestStatus, {
        /// <field>
        /// Called when a new changeRequestStatus is created.
        /// <br/>created(msls.application.ChangeRequestStatus entity)
        /// </field>
        created: [lightSwitchApplication.ChangeRequestStatus]
    });

}(msls.application));
