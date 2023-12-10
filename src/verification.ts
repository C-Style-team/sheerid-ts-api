import { SheerID } from "./base";
import {
  SheerIDErrorResponse,
  SheerIDOverrideEmailLoopResponse,
  SheerIDSuccessResponse,
  SheerIDVerificationStatusDetailsResponse,
} from "./types/response";
import {
  SheerIDErrorId,
  SheerIDMilitaryStatus,
  SheerIDSegment,
  SheerIDVerificationStep,
} from "./types/enum";
import { SheerIDRequest } from "./request";
import {
  SheerIDActiveMilitaryInfo,
  SheerIDAgeInfo,
  SheerIDDriverLicenseInfo,
  SheerIDEmployeeInfo,
  SheerIDFirstResponderInfo,
  SheerIDGeneralIdentityInfo,
  SheerIDInactiveMilitaryInfo,
  SheerIDLicensedProfessionalInfo,
  SheerIDLowIncomeInfo,
  SheerIDMarketplaceSubject,
  SheerIDMedicalProfessionalInfo,
  SheerIDMemberInfo,
  SheerIDMoverInfo,
  SheerIDSeniorInfo,
  SheerIDStudentInfo,
  SheerIDTeacherInfo,
} from "./types/info";
import { SheerIDOrganizationDetails } from "./types/common";

export class SheerIDVerification extends SheerID {
  verificationId: string | undefined;
  programId: string | undefined;
  trackingId: string | undefined;

  constructor(
    apiToken: string,
    verificationId: string | undefined,
    programId: string | undefined,
    trackingId: string | undefined,
  ) {
    super(apiToken);
    this.verificationId = verificationId;
    this.programId = programId;
    this.trackingId = trackingId;
  }

  // Submit student data against program
  public submitStudentDataByProgramId(info: SheerIDStudentInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectStudentPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit active military data against program
  public submitActiveMilitaryDataByProgramId(info: SheerIDActiveMilitaryInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectActiveMilitaryPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit inactive military data against program
  public submitInactiveMilitaryDataByProgramId(
    info: SheerIDInactiveMilitaryInfo,
  ) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectInactiveMilitaryPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit teacher data against program
  public submitTeacherDataByProgramId(info: SheerIDTeacherInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectTeacherPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit senior data against program
  public submitSeniorDataByProgramId(info: SheerIDSeniorInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectSeniorPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit age data against program
  public submitAgeDataByProgramId(info: SheerIDAgeInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectAgePersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit first responder data against program
  public submitFirstResponderDataByProgramId(info: SheerIDFirstResponderInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectFirstResponderPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit licensed professional data against program
  public submitLicensedProfessionalDataByProgramId(
    info: SheerIDLicensedProfessionalInfo,
  ) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectLicensedProfessionalPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit mover data against program
  public submitMoverDataByProgramId(info: SheerIDMoverInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectMoverPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit medical professional data against program
  public submitMedicalProfessionalDataByProgramId(
    info: SheerIDMedicalProfessionalInfo,
  ) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectMedicalProfessionalPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit driver license data against program
  public submitDriverLicenseDataByProgramId(info: SheerIDDriverLicenseInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectDriverLicensePersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit general identity data against program
  public submitGeneralIdentityDataByProgramId(
    info: SheerIDGeneralIdentityInfo,
  ) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectGeneralIdentityPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit employee data against program
  public submitEmployeeDataByProgramId(info: SheerIDEmployeeInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectEmployeePersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit member data against program
  public submitMemberDataByProgramId(info: SheerIDMemberInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectMemberPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit low income personal data against program
  public submitLowIncomeDataByProgramId(info: SheerIDLowIncomeInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/step/collectLowIncomePersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Get verification status
  public getStatus() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}`)
      .method("GET")
      .send();
  }

  // Get verification status by Tracking ID
  public getStatusByTrackingId() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/program/${this.programId}/trackingId/${this.trackingId}`,
      )
      .method("GET")
      .send();
  }

  // Get the 10 most recent verification statuses by Tracking ID
  public getStatusesByTrackingId(): Promise<
    Array<SheerIDSuccessResponse | SheerIDErrorResponse>
  > {
    return new SheerIDRequest<
      Array<SheerIDSuccessResponse | SheerIDErrorResponse>
    >()
      .endpoint(
        `/verification/program/${this.programId}/trackingId/${this.trackingId}/history`,
      )
      .method("GET")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .send();
  }

  // Get verification details
  public getStatusDetails(): Promise<
    SheerIDVerificationStatusDetailsResponse | SheerIDErrorResponse
  > {
    return new SheerIDRequest<
      SheerIDVerificationStatusDetailsResponse | SheerIDErrorResponse
    >()
      .endpoint(`/verification/${this.verificationId}/details`)
      .method("GET")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .send();
  }

  // Get verification metadata
  public getMetadata() {
    return new SheerIDRequest<
      { [key: string]: string } | SheerIDErrorResponse
    >()
      .endpoint(`/verification/${this.verificationId}/metadata`)
      .method("GET")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .send();
  }

  // Replace verification metadata
  public replaceMetadata(schema: { [key: string]: string }) {
    return new SheerIDRequest<
      { [key: string]: string } | SheerIDErrorResponse
    >()
      .endpoint(`/verification/${this.verificationId}/metadata`)
      .method("PUT")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .set("body", schema)
      .send();
  }

  // Refire the most recent webhook notifications for the verification request
  public refireWebhooks() {
    return new SheerIDRequest<{ [key: string]: string }>()
      .endpoint(`/verification/${this.verificationId}/refireWebhooks`)
      .method("POST")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .send();
  }

  // Add a label to a verification request.
  public addLabelToRequest(
    label: "suspectedFraud" | "confirmedFraud",
    comment: string,
  ) {
    return new SheerIDRequest<{} | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/label/${label}`)
      .method("POST")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .set("body", { comment: comment })
      .send();
  }

  public getBarcodeImage(rewardKey: string, symbology: string) {
    return new SheerIDRequest<string /*binary image*/ | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/barcode`)
      .method("GET")
      .set("body", {
        rewardKey: rewardKey,
        symbology: symbology,
      })
      .send();
  }

  public purgePersonData() {
    return new SheerIDRequest<{} | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/purgePersonData`)
      .method("POST")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .send();
  }

  public resetLimits() {
    return new SheerIDRequest<{} | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/resetVerificationLimits`)
      .method("POST")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .send();
  }

  public start(
    installPageUrl: string | undefined,
    metadata: { [key: string]: string } | undefined,
  ) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification`)
      .method("POST")
      .set("body", {
        programId: this.programId,
        trackingId: this.trackingId,
        installPageUrl: installPageUrl,
        metadata: metadata,
      })
      .send();
  }

  public expire() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/expire`)
      .method("POST")
      .send();
  }

  // Submit student data
  public submitStudentData(info: SheerIDStudentInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectStudentPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit military status
  public submitMilitaryStatus(status: SheerIDMilitaryStatus) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectMilitaryStatus`,
      )
      .method("POST")
      .set("body", { status: status })
      .send();
  }

  // Submit active military data
  public submitActiveMilitaryData(info: SheerIDActiveMilitaryInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectActiveMilitaryPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit inactive military data
  public submitInactiveMilitaryData(info: SheerIDInactiveMilitaryInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectInactiveMilitaryPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit Social Security Number
  public submitSocialSecurityNumber(socialSecurityNumber: string) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectSocialSecurityNumber`,
      )
      .method("POST")
      .set("body", {
        socialSecurityNumber: socialSecurityNumber,
      })
      .send();
  }

  public skipSubmissionSocialSecurityNumber() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectSocialSecurityNumber`,
      )
      .method("DELETE")
      .send();
  }

  // Submit teacher data
  public submitTeacherData(info: SheerIDTeacherInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/{this.verificationId}/step/collectTeacherPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit senior data
  public submitSeniorData(info: SheerIDSeniorInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectSeniorPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit age data
  public submitAgeData(info: SheerIDAgeInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectAgePersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit first responder data
  public submitFirstResponderData(info: SheerIDFirstResponderInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectFirstResponderPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit licensed professional data
  public submitLicensedProfessionalData(info: SheerIDLicensedProfessionalInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectLicensedProfessionalPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit mover data
  public submitMoverData(info: SheerIDMoverInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectMoverPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit medical professional data
  public submitMedicalProfessionalData(info: SheerIDMedicalProfessionalInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectMedicalProfessionalPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit driver license data
  public submitDriverLicenseData(info: SheerIDDriverLicenseInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectDriverLicensePersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit general identity data
  public submitGeneralIdentityData(info: SheerIDGeneralIdentityInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectGeneralIdentityPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit employee data
  public submitEmployeeData(info: SheerIDEmployeeInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectEmployeePersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit member data
  public submitMemberData(info: SheerIDMemberInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectMemberPersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Submit low income personal data
  public submitLowIncomeData(info: SheerIDLowIncomeInfo) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectLowIncomePersonalInfo`,
      )
      .method("POST")
      .set("body", info)
      .send();
  }

  // Start SSO process
  public startSSOProcess() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/sso`)
      .method("GET")
      .send();
  }

  // Cancel SSO process
  public cancelSSOProcess() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/sso`)
      .method("DELETE")
      .send();
  }

  // Submit email loop response
  public submitEmailLoop(emailToken?: string, deviceFingerprintHash?: string) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/emailLoop`)
      .method("POST")
      .set("body", {
        emailToken: emailToken,
        deviceFingerprintHash: deviceFingerprintHash,
      })
      .send();
  }

  // Cancel email loop verification
  public cancelEmailLoop() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/emailLoop`)
      .method("DELETE")
      .send();
  }

  // Cancel email loop verification
  public retryEmailLoop() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/emailLoop/retry`)
      .method("GET")
      .send();
  }

  // Retrieve email loop token
  public getEmailLoopToken(refreshToken?: boolean) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/emailLoop/retrieveToken`,
      )
      .method("POST")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .set("body", {
        refreshToken: refreshToken,
      })
      .send();
  }

  // Resume email loop
  public resumeEmailLoop(emailAddress?: string) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/emailLoop/resume`)
      .method("POST")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .set("body", {
        emailAddress: emailAddress,
      })
      .send();
  }

  // Allow user to submit an alternate email address
  public overrideEmailLoopAddress(emailAddress?: string) {
    return new SheerIDRequest<
      SheerIDOverrideEmailLoopResponse | SheerIDErrorResponse
    >()
      .endpoint(
        `/verification/${this.verificationId}/step/emailLoop/emailAddressOverride`,
      )
      .method("POST")
      .set("body", {
        emailAddress: emailAddress,
      })
      .send();
  }

  // Submit SMS Code
  public submitSMSCode(smsCode: string, deviceFingerprintHash?: string) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/smsLoop`)
      .method("POST")
      .set("body", {
        smsCode: smsCode,
        deviceFingerprintHash: deviceFingerprintHash,
      })
      .send();
  }

  // Retry SMS Code
  public retrySMSCode() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/smsLoop/retry`)
      .method("GET")
      .send();
  }

  // Upload documents
  public uploadDocuments(file: string) {
    const formData = new FormData();
    formData.append("file", file);

    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/docUpload`)
      .method("POST")
      .set("body", formData)
      .send();
  }

  // Cancel document upload
  public cancelDocumentUpload() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/docUpload`)
      .method("DELETE")
      .send();
  }

  // Mark uploading documents as completed
  public markCompleteDocumentUpload() {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/completeDocUpload`)
      .method("POST")
      .send();
  }

  // Modify the result of a verification via overriding
  public overrideResult(overrideCode: string) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/${this.verificationId}/step/resultOverride`)
      .method("POST")
      .set("body", {
        overrideCode: overrideCode,
      })
      .send();
  }

  // Initiate Marketplace verification
  public initiateMarketplace(
    programId: string,
    trackingId: string,
    subject: SheerIDMarketplaceSubject,
  ) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(`/verification/marketplace`)
      .method("POST")
      .set("body", {
        programId: programId,
        trackingId: trackingId,
        subject: subject,
      })
      .send();
  }

  // Submit marketplace verification data
  public submitMarketplaceData(verificationToken: string) {
    return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
      .endpoint(
        `/verification/${this.verificationId}/step/collectMarketplaceToken`,
      )
      .method("POST")
      .set("body", {
        verificationToken: verificationToken,
      })
      .send();
  }

  // Get organization details
  public getOrganizationDetails(): Promise<
    SheerIDOrganizationDetails | SheerIDErrorResponse
  > {
    return new SheerIDRequest<
      SheerIDOrganizationDetails | SheerIDErrorResponse
    >()
      .endpoint(`/organization/${this.verificationId}`)
      .method("GET")
      .set("headers", { Authorization: `Bearer ${this.apiToken}` })
      .send();
  }
}
