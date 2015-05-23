using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void MyHeldDocumentVersions_PreprocessQuery(ref IQueryable<DocumentVersionHolder> query)
        {
            query = from documentVersionHeld in query
                    where documentVersionHeld.CopyHolder.UserName == this.Application.User.Name
                    select documentVersionHeld;
        }

        partial void MyOwnedDocuments_PreprocessQuery(ref IQueryable<Document> query)
        {
            query = from document in query
                    where document.DocumentOwner.UserName == this.Application.User.Name
                    orderby document.DocumentTitle
                    orderby document.Reference
                    select document;
        }

        partial void MyAuthoredDocumentVersions_PreprocessQuery(ref IQueryable<DocumentVersion> query)
        {
            query = from documentVersion in query
                    where documentVersion.Author.UserName == this.Application.User.Name
                    select documentVersion;
        }

        partial void MyDocumentReviews_PreprocessQuery(ref IQueryable<DocumentVersionReview> query)
        {
            query = from documentReview in query
                    where documentReview.DocumentVersionHolder.CopyHolder.UserName == this.Application.User.Name
                    select documentReview;
        }

        partial void MyDocumentVersionApprovals_PreprocessQuery(ref IQueryable<DocumentVersionApproval> query)
        {
            query = from documentVersionApproval in query
                    where documentVersionApproval.Approver.UserName == this.Application.User.Name
                    select documentVersionApproval;
        }

        partial void DocumentVersionApprovals_Inserted(DocumentVersionApproval entity)
        {
            string subject = string.Format("{0} v{1}.{2} for Approval", entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber);

            string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following document has been assigned to you for approval:<br></br>Reference: {2}.<br></br>Title: {3}.<br></br>Version: {4}.{5}.<br></br></p></body></html>", entity.Approver.FirstName, entity.Approver.LastName, entity.DocumentVersion.Document.Reference, entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber);

            List<string> mailTos = new List<string>();

            mailTos.Add(entity.Approver.Email);

            SendEmail(mailTos, subject, message);
        }

        partial void DocumentVersionApprovals_Updated(DocumentVersionApproval entity)
        {
            if (entity.ApprovalStatusDate != null)
            {
                string subject = string.Format("{0} v{1}.{2} Approval Updated", entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber);

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following document has had its approval status updated by {6} {7}:<br></br>Reference: {2}.<br></br>Title: {3}.<br></br>Version: {4}.{5}.<br></br>Status: {8}.<br></br>Comment: {9}.<br></br></p></body></html>", entity.DocumentVersion.Author.FirstName, entity.DocumentVersion.Author.LastName, entity.DocumentVersion.Document.Reference, entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber, entity.Approver.FirstName, entity.Approver.LastName, entity.ApprovalStatus, entity.ApproverComments);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.DocumentVersion.Author.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void DocumentVersionHolders_Inserted(DocumentVersionHolder entity)
        {
            string subject = string.Format("{0} v{1}.{2} distributed to you", entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber);

            string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following document has been distributed to you. Please log in and acknowledge receipt:<br></br>Reference: {2}.<br></br>Title: {3}.<br></br>Version: {4}.{5}.<br></br></p></body></html>", entity.CopyHolder.FirstName, entity.CopyHolder.LastName, entity.DocumentVersion.Document.Reference, entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber);

            List<string> mailTos = new List<string>();

            mailTos.Add(entity.CopyHolder.Email);

            SendEmail(mailTos, subject, message);
        }

        partial void DocumentVersionHolders_Updated(DocumentVersionHolder entity)
        {
            if (entity.DateAcknowledged != null)
            {
                string subject = string.Format("{0} v{1}.{2} Acknowledged", entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber);

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following document distribution has been acknowledged by {6} {7}:<br></br>Reference: {2}.<br></br>Title: {3}.<br></br>Version: {4}.{5}.<br></br></p></body></html>", entity.DocumentVersion.Author.FirstName, entity.DocumentVersion.Author.LastName, entity.DocumentVersion.Document.Reference, entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber, entity.CopyHolder.FirstName, entity.CopyHolder.LastName);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.DocumentVersion.Author.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void ChangeRequests_Inserted(ChangeRequest entity)
        {
            string subject = string.Format("Change Requested to {0} v{1}.{2}", entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber);

            string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following a change request has been made against for following document. Please log in to review:<br></br>Reference: {2}.<br></br>Title: {3}.<br></br>Version: {4}.{5}.<br></br>Change Reference: {6}.<br></br>Change Title: {7}.<br></br>Change Description: {8}.<br></br></p>Date raised: {9}.<br></br>Target Date: {10}.<br></br></body></html>", entity.DocumentVersion.Author.FirstName, entity.DocumentVersion.Author.LastName, entity.DocumentVersion.Document.Reference, entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber, entity.Reference, entity.ChangeRequestTitle, entity.ChangeRequestDescription, entity.DateRaised, entity.TargetClosureDate);

            List<string> mailTos = new List<string>();

            mailTos.Add(entity.DocumentVersion.Author.Email);

            SendEmail(mailTos, subject, message);
        }

        partial void ChangeRequests_Updated(ChangeRequest entity)
        {
            if(entity.DateClosed != null)
            {
                string subject = string.Format("Change Requested to {0} v{1}.{2}", entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber);

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following a change request has been reviewed:<br></br>Reference: {2}.<br></br>Title: {3}.<br></br>Version: {4}.{5}.<br></br>Change Reference: {6}.<br></br>Change Title: {7}.<br></br>Change Description: {8}.<br></br></p>Date raised: {9}.<br></br>Date Closed: {10}.<br></br>Status: {11}.<br></br></body></html>", entity.RaisedBy.FirstName, entity.RaisedBy.LastName, entity.DocumentVersion.Document.Reference, entity.DocumentVersion.Document.DocumentTitle, entity.DocumentVersion.MajorVersionNumber, entity.DocumentVersion.MinorVersionNumber, entity.Reference, entity.ChangeRequestTitle, entity.ChangeRequestDescription, entity.DateRaised, entity.DateClosed, entity.ChangeRequestStatus.Status);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.RaisedBy.Email);

                SendEmail(mailTos, subject, message);
            }
        }


        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }

        partial void ChangeRequests_Validate(ChangeRequest entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.TargetClosureDate != null & entity.DateRaised != null)
            {
                if (entity.TargetClosureDate < entity.DateRaised)
                {
                    results.AddEntityError("The target closure date cannot be before the date raised");
                }
            }

            if (entity.DateClosed != null & entity.DateRaised != null)
            {
                if (entity.DateClosed < entity.DateRaised)
                {
                    results.AddEntityError("The date closed cannot be before the date raised");
                }
            }
        }

        partial void ChangeRequests_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequests);
        }

        partial void ChangeRequests_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequests);
        }

        partial void ChangeRequests_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequests);
        }

        partial void ChangeRequestStatuses_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequestStatuses);
        }

        partial void ChangeRequestStatuses_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequestStatuses);
        }

        partial void ChangeRequestStatuses_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequestStatuses);
        }

        partial void Documents_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocuments);
        }

        partial void Documents_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocuments);
        }

        partial void Documents_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocuments);
        }

        partial void DocumentTypes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentTypes);
        }

        partial void DocumentTypes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentTypes);
        }

        partial void DocumentTypes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentTypes);
        }

        partial void DocumentVersionApprovals_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersionApprovals);
        }

        partial void DocumentVersionApprovals_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersionApprovals);
        }

        partial void DocumentVersionApprovals_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersionApprovals);
        }

        partial void DocumentVersionHolders_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersionHolders);
        }

        partial void DocumentVersionHolders_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersionHolders);
        }

        partial void DocumentVersionHolders_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersionHolders);
        }

        partial void DocumentVersionReviews_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersionReviews);
        }

        partial void DocumentVersionReviews_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersionReviews);
        }

        partial void DocumentVersionReviews_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersionReviews);
        }

        partial void DocumentVersions_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersions);
        }

        partial void DocumentVersions_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersions);
        }

        partial void DocumentVersions_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditDocumentVersions);
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }
    }
}
