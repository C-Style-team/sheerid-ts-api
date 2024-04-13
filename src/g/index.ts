import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

type PendingResponse = {
  verificationId: string;
  statusUrl: string;
  awaitingStep?: VerificationStep | undefined;
  maxReviewTime?: ReviewTime | undefined;
  estimatedReviewTime?: EstimatedReviewTime | undefined;
  currentStep: VerificationStep;
  errorIds?: Array<ErrorId> | undefined;
  segment?: Segment | undefined;
  subsegment?: SubSegment | undefined;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
  lastResponse?: VerificationResponse | undefined;
};
type VerificationStep =
  | "collectStudentPersonalInfo"
  | "collectActiveMilitaryPersonalInfo"
  | "collectInactiveMilitaryPersonalInfo"
  | "collectTeacherPersonalInfo"
  | "collectSeniorPersonalInfo"
  | "collectAgePersonalInfo"
  | "collectFirstResponderPersonalInfo"
  | "collectMedicalProfessionalPersonalInfo"
  | "collectEmployeePersonalInfo"
  | "collectLicensedProfessionalInfo"
  | "collectMoverPersonalInfo"
  | "collectLowIncomePersonalInfo"
  | "collectMilitaryStatus"
  | "collectMarketplaceToken"
  | "collectSocialSecurityNumber"
  | "collectIdentifier"
  | "completeAuthentication"
  | "docUpload"
  | "sso"
  | "success"
  | "error"
  | "pending"
  | "emailLoop"
  | "smsLoop"
  | "consolation"
  | "override";
type ReviewTime = "2_MIN" | "20_MIN" | "2_HRS" | "24_HRS" | "2_DAY" | "3_DAY";
type EstimatedReviewTime =
  | "A_FEW_MINUTES"
  | "A_HALF_HOUR"
  | "A_FEW_HOURS"
  | "A_FEW_DAYS";
type ErrorId =
  | "internalServerError"
  | "noProgram"
  | "invalidProgram"
  | "expiredProgram"
  | "inactiveProgram"
  | "expiredVerification"
  | "noVerification"
  | "noOrganization"
  | "invalidRequest"
  | "verificationLimitExceeded"
  | "apiRateLimitExceeded"
  | "docReviewLimitExceeded"
  | "noRemainingRewardCodes"
  | "unknownError"
  | "invalidApiToken"
  | "simulatedError"
  | "invalidDocUploadToken"
  | "notFound"
  | "unauthorizedAccountStatus"
  | "unauthorizedDomain"
  | "unauthorizedIpAddress"
  | "unauthorizedRequest"
  | "unauthorizedUser"
  | "reverificationDailyLimitExceeded"
  | "invalidVerificationToken"
  | "expiredVerificationToken"
  | "notApproved"
  | "maxSMSCodeLimitExceeded"
  | "fraudRulesReject"
  | "invalidStep"
  | "invalidOrganization"
  | "invalidFirstName"
  | "invalidLastName"
  | "invalidEmail"
  | "invalidPhoneNumber"
  | "invalidBirthDate"
  | "invalidAddress1"
  | "invalidCity"
  | "invalidState"
  | "invalidPostalCode"
  | "invalidMilitaryStatus"
  | "invalidFirstResponderStatus"
  | "invalidMedicalProfessionalStatus"
  | "invalidSocialSecurityNumber"
  | "invalidOverrideCode"
  | "underagePerson"
  | "outsideAgePerson"
  | "futureBirthDate"
  | "invalidDischargeDate"
  | "dischargeDateBeforeBirthDate"
  | "unsupportedDocMimeType"
  | "invalidFileSizeMax"
  | "invalidFileSizeEmpty"
  | "invalidNumberOfFiles"
  | "maxMetadataValuesExceeded"
  | "maxMetadataLengthExceeded"
  | "invalidSMSCode"
  | "expiredSMSCode"
  | "incorrectSMSCodeAttemptLimitExceeded"
  | "incorrectVerificationOverrideCodeAttemptLimitExceeded"
  | "invalidEmailLoopToken"
  | "expiredEmailLoopToken";
type Segment =
  | "student"
  | "teacher"
  | "military"
  | "senior"
  | "age"
  | "firstResponder"
  | "medical"
  | "employment"
  | "marketplace"
  | "member"
  | "licensedProfessional"
  | "recentMover"
  | "other";
type SubSegment =
  | "activeDuty"
  | "veteran"
  | "retiree"
  | "reservist"
  | "militaryFamily"
  | "goldStarFamily"
  | "police"
  | "fireFighter"
  | "searchAndRescue"
  | "emt"
  | "employee"
  | "homeBuyer"
  | "otherMover"
  | "facultyHighSchool"
  | "facultyUniversity"
  | "facultyPostSecondary"
  | "facultyK12"
  | "fullAndPartTimeUniversity"
  | "collegeBound"
  | "highSchool"
  | "postSecondary"
  | "nurse"
  | "doctor"
  | "otherHealthWorker"
  | "dentist"
  | "pharmacist"
  | "generalContractor"
  | "snapBenefits"
  | "otherGovernmentAssistance"
  | "architect"
  | "interiorDesigner"
  | "librarian"
  | "childCareWorker"
  | "veterinarian"
  | "licensedRealEstateAgent"
  | "licensedCosmetologist";
type ValidLocale = string;
type ValidCountryCode = string;
type SuccessResponse = {
  verificationId: string;
  rewardCode: string;
  rewardData?: {} | undefined;
  redirectUrl: string | null;
  currentStep: VerificationStep;
  errorIds?: Array<ErrorId> | undefined;
  segment?: Segment | undefined;
  subSegment?: SubSegment | undefined;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
  consumerInfoState?: ConsumerInfoState | undefined;
};
type ConsumerInfoState =
  | "consumerNotFound"
  | "consumerFoundNewFieldsAvailable"
  | "consumerFoundNotActionable";
type NewVerificationResponse = {
  verificationId: string;
  currentStep: VerificationStep;
  submissionUrl: string;
  errorIds?: Array<ErrorId> | undefined;
  segment?: Segment | undefined;
  subsegment?: SubSegment | undefined;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
};
type NewAgeVerificationResponse = NewVerificationResponse;
type NewMilitaryVerificationResponse = NewVerificationResponse;
type NewFirstResponderVerificationResponse = NewVerificationResponse;
type NewMedicalProfessionalVerificationResponse = NewVerificationResponse;
type NewEmploymentVerificationResponse = NewVerificationResponse;
type NewMarketplaceVerificationResponse = NewVerificationResponse;
type DocumentReviewResponse = {
  verificationId: string;
  currentStep: VerificationStep;
  submissionUrl: string;
  errorIds?: Array<ErrorId> | undefined;
  rejectionReasons?: Array<RejectionReason> | undefined;
  maxReviewTime?: ReviewTime | undefined;
  estimatedReviewTime?: EstimatedReviewTime | undefined;
  segment: Segment;
  subsegment?: SubSegment | undefined;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
  documents?:
    | Array<{
        documentId: string;
        status: DocumentUploadStatus;
        mimeType: string;
        fileSize: number;
        uploadUrl?: string | undefined;
        errors?: Array<DocumentUploadError> | undefined;
      }>
    | undefined;
};
type RejectionReason =
  | "CUSTOM_VALUE_OTHER"
  | "DOCUMENT_DATE_OTHER"
  | "DOCUMENT_EXPIRED"
  | "DOCUMENT_LIKELY_FRAUD"
  | "DOCUMENT_PASSWORD_PROTECTED"
  | "DOCUMENT_STATUS_OTHER"
  | "DOCUMENT_TOO_FUTURE"
  | "DOCUMENT_UNSUPPORTED"
  | "DOCUMENT_UNREADABLE"
  | "DOCUMENT_VALID_OTHER"
  | "INELIGIBLE_JOB_TITLE"
  | "INSUFFICIENT_CUSTOM_VALUE"
  | "INSUFFICIENT_DOCUMENT_DATE"
  | "INSUFFICIENT_STATUS"
  | "MISMATCH_BIRTHDATE"
  | "MISMATCH_CUSTOM_VALUE"
  | "MISMATCH_PERSON_FIRST_NAME"
  | "MISMATCH_PERSON_LAST_NAME"
  | "MISMATCH_ORGANIZATION_COUNTRY"
  | "MISMATCH_ORGANIZATION_NAME"
  | "MISMATCH_STATUS"
  | "MISSING_CUSTOM_VALUE"
  | "MISSING_DOCUMENT_DATE"
  | "MISSING_INFORMATION_BIRTHDATE"
  | "MISSING_INFORMATION_ORGANIZATION_NAME"
  | "MISSING_PERSON_FIRST_NAME"
  | "MISSING_PERSON_LAST_NAME"
  | "ORGANIZATION_NAME_OTHER"
  | "OUT_OF_RANGE_BIRTHDATE"
  | "PERSON_BIRTHDATE_OTHER"
  | "PERSON_FIRST_NAME_OTHER"
  | "PERSON_LAST_NAME_OTHER"
  | "DOCUMENT_HANDWRITTEN"
  | "DOCUMENT_OUTDATED"
  | "DOCUMENT_OUTDATED_FACULTY"
  | "INELIGIBLE_ORGANIZATION"
  | "INELIGIBLE_PERSON_HIGH_SCHOOL_STUDENT"
  | "MISSING_INFORMATION"
  | "MISSING_INFORMATION_AFFILIATION_US_ARMED_FORCES"
  | "MISSING_INFORMATION_PERSON_NAME"
  | "MISSING_INFORMATION_UNIVERSITY_ENROLLMENT"
  | "MISSING_OR_MISMATCH_JOB_TITLE"
  | "MISMATCH_COMPANY_NAME_OR_ADDRESS"
  | "MISMATCH_PERSON_NAME"
  | "MISMATCH_ORGANIZATION"
  | "OTHER_CONTACT_US"
  | "PAYSTUB_OUTDATED_LAST_30_DAYS"
  | "MISSING_EBT_CARD_NUMBER"
  | "MISMATCH_EBT_CARD_NUMBER"
  | "INSUFFICIENT_EBT_CARD_NUMBER"
  | "EBT_CARD_NUMBER_OTHER";
type DocumentUploadStatus = "PENDING" | "FINISHED" | "ERROR";
type DocumentUploadError =
  | "ZERO_SIZE"
  | "TOO_LARGE"
  | "UNSUPPORTED_TYPE"
  | "UNKNOWN";
type ErrorResponse = {
  verificationId: string;
  errorIds: Array<ErrorId>;
  currentStep: VerificationStep;
  segment?: Segment | undefined;
  subsegment?: SubSegment | undefined;
  systemErrorMessage: string;
  redirectUrl: string;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
  consolationRewardCode?: string | undefined;
};
type SsoResponse = {
  verificationId: string;
  loginUrl: string;
  cancelUrl: string;
  currentStep: VerificationStep;
  errorIds?: Array<ErrorId> | undefined;
  segment?: Segment | undefined;
  subsegment?: SubSegment | undefined;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
};
type SMSLoopResponse = {
  verificationId: string;
  retryUrl: string;
  submissionUrl: string;
  currentStep: VerificationStep;
  errorIds?: Array<ErrorId> | undefined;
  segment?: Segment | undefined;
  subsegment?: SubSegment | undefined;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
};
type CancellableResponse = {
  verificationId: string;
  currentStep: VerificationStep;
  submissionUrl: string;
  errorIds?: Array<ErrorId> | undefined;
  segment?: Segment | undefined;
  subsegment?: SubSegment | undefined;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
  cancelUrl: string;
};
type EmailLoopResponse = {
  verificationId: string;
  currentStep: VerificationStep;
  errorIds?: Array<ErrorId> | undefined;
  segment?: Segment | undefined;
  subsegment?: SubSegment | undefined;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
  submissionUrl: string;
  cancelUrl?: string | undefined;
  canResendEmailLoop?: boolean | undefined;
};
type ConsolationResponse = {
  verificationId: string;
  currentStep: VerificationStep;
  segment?: Segment | undefined;
  subSegment?: SubSegment | undefined;
  redirectUrl: string;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  consolationRewardCode: string;
  created?: number | undefined;
  updated?: number | undefined;
};
type OverrideResponse = {
  verificationId: string;
  currentStep: VerificationStep;
  segment?: Segment | undefined;
  subSegment?: SubSegment | undefined;
  submissionUrl: string;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
};
type NewCollectIdentifierResponse = NewVerificationResponse;
type CompleteAuthenticationResponse = {
  verificationId: string;
  currentStep: VerificationStep;
  errorIds?: Array<ErrorId> | undefined;
  segment?: Segment | undefined;
  subsegment?: SubSegment | undefined;
  locale?: ValidLocale | undefined;
  country?: ValidCountryCode | undefined;
  created?: number | undefined;
  updated?: number | undefined;
  submissionUrl: string;
  cancelUrl?: string | undefined;
};
type VerificationResponse =
  | SuccessResponse
  | NewVerificationResponse
  | NewAgeVerificationResponse
  | NewMilitaryVerificationResponse
  | NewFirstResponderVerificationResponse
  | NewMedicalProfessionalVerificationResponse
  | NewEmploymentVerificationResponse
  | NewMarketplaceVerificationResponse
  | DocumentReviewResponse
  | PendingResponse
  | ErrorResponse
  | SsoResponse
  | SMSLoopResponse
  | CancellableResponse
  | EmailLoopResponse
  | ConsolationResponse
  | OverrideResponse
  | NewCollectIdentifierResponse
  | CompleteAuthenticationResponse;

const BuildInformationResponseMessage = z
  .object({
    sheeridVersion: z.string(),
    sheeridGitCommit: z.string(),
    puppetGitCommit: z.string(),
    buildTimestamp: z.string(),
  })
  .partial()
  .passthrough();
const ValidEmail = z.string();
const ValidBirthDate = z.string();
const OrganizationRemoteSource = z.enum(["EMPLOYER", "PLACE"]);
const Organization = z
  .object({
    name: z.string(),
    id: z.number().int(),
    idExtended: z.string().optional(),
    source: OrganizationRemoteSource.optional(),
  })
  .passthrough();
const IPV4Address = z.string();
const IPAddress = z.string();
const ValidPhoneNumber = z.string();
const ValidLocale = z.string();
const PersonalInfoMetadata = z.record(z.string().max(10000));
const Student = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate,
    organization: Organization,
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const VerificationStep = z.enum([
  "collectStudentPersonalInfo",
  "collectActiveMilitaryPersonalInfo",
  "collectInactiveMilitaryPersonalInfo",
  "collectTeacherPersonalInfo",
  "collectSeniorPersonalInfo",
  "collectAgePersonalInfo",
  "collectFirstResponderPersonalInfo",
  "collectMedicalProfessionalPersonalInfo",
  "collectEmployeePersonalInfo",
  "collectLicensedProfessionalInfo",
  "collectMoverPersonalInfo",
  "collectLowIncomePersonalInfo",
  "collectMilitaryStatus",
  "collectMarketplaceToken",
  "collectSocialSecurityNumber",
  "collectIdentifier",
  "completeAuthentication",
  "docUpload",
  "sso",
  "success",
  "error",
  "pending",
  "emailLoop",
  "smsLoop",
  "consolation",
  "override",
]);
const ErrorId = z.enum([
  "internalServerError",
  "noProgram",
  "invalidProgram",
  "expiredProgram",
  "inactiveProgram",
  "expiredVerification",
  "noVerification",
  "noOrganization",
  "invalidRequest",
  "verificationLimitExceeded",
  "apiRateLimitExceeded",
  "docReviewLimitExceeded",
  "noRemainingRewardCodes",
  "unknownError",
  "invalidApiToken",
  "simulatedError",
  "invalidDocUploadToken",
  "notFound",
  "unauthorizedAccountStatus",
  "unauthorizedDomain",
  "unauthorizedIpAddress",
  "unauthorizedRequest",
  "unauthorizedUser",
  "reverificationDailyLimitExceeded",
  "invalidVerificationToken",
  "expiredVerificationToken",
  "notApproved",
  "maxSMSCodeLimitExceeded",
  "fraudRulesReject",
  "invalidStep",
  "invalidOrganization",
  "invalidFirstName",
  "invalidLastName",
  "invalidEmail",
  "invalidPhoneNumber",
  "invalidBirthDate",
  "invalidAddress1",
  "invalidCity",
  "invalidState",
  "invalidPostalCode",
  "invalidMilitaryStatus",
  "invalidFirstResponderStatus",
  "invalidMedicalProfessionalStatus",
  "invalidSocialSecurityNumber",
  "invalidOverrideCode",
  "underagePerson",
  "outsideAgePerson",
  "futureBirthDate",
  "invalidDischargeDate",
  "dischargeDateBeforeBirthDate",
  "unsupportedDocMimeType",
  "invalidFileSizeMax",
  "invalidFileSizeEmpty",
  "invalidNumberOfFiles",
  "maxMetadataValuesExceeded",
  "maxMetadataLengthExceeded",
  "invalidSMSCode",
  "expiredSMSCode",
  "incorrectSMSCodeAttemptLimitExceeded",
  "incorrectVerificationOverrideCodeAttemptLimitExceeded",
  "invalidEmailLoopToken",
  "expiredEmailLoopToken",
]);
const Segment = z.enum([
  "student",
  "teacher",
  "military",
  "senior",
  "age",
  "firstResponder",
  "medical",
  "employment",
  "marketplace",
  "member",
  "licensedProfessional",
  "recentMover",
  "other",
]);
const SubSegment = z.enum([
  "activeDuty",
  "veteran",
  "retiree",
  "reservist",
  "militaryFamily",
  "goldStarFamily",
  "police",
  "fireFighter",
  "searchAndRescue",
  "emt",
  "employee",
  "homeBuyer",
  "otherMover",
  "facultyHighSchool",
  "facultyUniversity",
  "facultyPostSecondary",
  "facultyK12",
  "fullAndPartTimeUniversity",
  "collegeBound",
  "highSchool",
  "postSecondary",
  "nurse",
  "doctor",
  "otherHealthWorker",
  "dentist",
  "pharmacist",
  "generalContractor",
  "snapBenefits",
  "otherGovernmentAssistance",
  "architect",
  "interiorDesigner",
  "librarian",
  "childCareWorker",
  "veterinarian",
  "licensedRealEstateAgent",
  "licensedCosmetologist",
]);
const ValidCountryCode = z.string();
const ConsumerInfoState = z.enum([
  "consumerNotFound",
  "consumerFoundNewFieldsAvailable",
  "consumerFoundNotActionable",
]);
const SuccessResponse = z
  .object({
    verificationId: z.string(),
    rewardCode: z.string(),
    rewardData: z.record(z.string().max(10000)).optional(),
    redirectUrl: z.string().nullable(),
    currentStep: VerificationStep,
    errorIds: z.array(ErrorId).optional(),
    segment: Segment.optional(),
    subSegment: SubSegment.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
    consumerInfoState: ConsumerInfoState.optional(),
  })
  .passthrough();
const NewVerificationResponse = z
  .object({
    verificationId: z.string(),
    currentStep: VerificationStep,
    submissionUrl: z.string(),
    errorIds: z.array(ErrorId).optional(),
    segment: Segment.optional(),
    subsegment: SubSegment.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
  })
  .passthrough();
const NewAgeVerificationResponse = NewVerificationResponse;
const NewMilitaryVerificationResponse = NewVerificationResponse;
const NewFirstResponderVerificationResponse = NewVerificationResponse;
const NewMedicalProfessionalVerificationResponse = NewVerificationResponse;
const NewEmploymentVerificationResponse = NewVerificationResponse;
const NewMarketplaceVerificationResponse = NewVerificationResponse;
const RejectionReason = z.enum([
  "CUSTOM_VALUE_OTHER",
  "DOCUMENT_DATE_OTHER",
  "DOCUMENT_EXPIRED",
  "DOCUMENT_LIKELY_FRAUD",
  "DOCUMENT_PASSWORD_PROTECTED",
  "DOCUMENT_STATUS_OTHER",
  "DOCUMENT_TOO_FUTURE",
  "DOCUMENT_UNSUPPORTED",
  "DOCUMENT_UNREADABLE",
  "DOCUMENT_VALID_OTHER",
  "INELIGIBLE_JOB_TITLE",
  "INSUFFICIENT_CUSTOM_VALUE",
  "INSUFFICIENT_DOCUMENT_DATE",
  "INSUFFICIENT_STATUS",
  "MISMATCH_BIRTHDATE",
  "MISMATCH_CUSTOM_VALUE",
  "MISMATCH_PERSON_FIRST_NAME",
  "MISMATCH_PERSON_LAST_NAME",
  "MISMATCH_ORGANIZATION_COUNTRY",
  "MISMATCH_ORGANIZATION_NAME",
  "MISMATCH_STATUS",
  "MISSING_CUSTOM_VALUE",
  "MISSING_DOCUMENT_DATE",
  "MISSING_INFORMATION_BIRTHDATE",
  "MISSING_INFORMATION_ORGANIZATION_NAME",
  "MISSING_PERSON_FIRST_NAME",
  "MISSING_PERSON_LAST_NAME",
  "ORGANIZATION_NAME_OTHER",
  "OUT_OF_RANGE_BIRTHDATE",
  "PERSON_BIRTHDATE_OTHER",
  "PERSON_FIRST_NAME_OTHER",
  "PERSON_LAST_NAME_OTHER",
  "DOCUMENT_HANDWRITTEN",
  "DOCUMENT_OUTDATED",
  "DOCUMENT_OUTDATED_FACULTY",
  "INELIGIBLE_ORGANIZATION",
  "INELIGIBLE_PERSON_HIGH_SCHOOL_STUDENT",
  "MISSING_INFORMATION",
  "MISSING_INFORMATION_AFFILIATION_US_ARMED_FORCES",
  "MISSING_INFORMATION_PERSON_NAME",
  "MISSING_INFORMATION_UNIVERSITY_ENROLLMENT",
  "MISSING_OR_MISMATCH_JOB_TITLE",
  "MISMATCH_COMPANY_NAME_OR_ADDRESS",
  "MISMATCH_PERSON_NAME",
  "MISMATCH_ORGANIZATION",
  "OTHER_CONTACT_US",
  "PAYSTUB_OUTDATED_LAST_30_DAYS",
  "MISSING_EBT_CARD_NUMBER",
  "MISMATCH_EBT_CARD_NUMBER",
  "INSUFFICIENT_EBT_CARD_NUMBER",
  "EBT_CARD_NUMBER_OTHER",
]);
const ReviewTime = z.enum([
  "2_MIN",
  "20_MIN",
  "2_HRS",
  "24_HRS",
  "2_DAY",
  "3_DAY",
]);
const EstimatedReviewTime = z.enum([
  "A_FEW_MINUTES",
  "A_HALF_HOUR",
  "A_FEW_HOURS",
  "A_FEW_DAYS",
]);
const DocumentUploadStatus = z.enum(["PENDING", "FINISHED", "ERROR"]);
const DocumentUploadError = z.enum([
  "ZERO_SIZE",
  "TOO_LARGE",
  "UNSUPPORTED_TYPE",
  "UNKNOWN",
]);
const DocumentReviewResponse = z
  .object({
    verificationId: z.string(),
    currentStep: VerificationStep,
    submissionUrl: z.string(),
    errorIds: z.array(ErrorId).optional(),
    rejectionReasons: z.array(RejectionReason).optional(),
    maxReviewTime: ReviewTime.optional(),
    estimatedReviewTime: EstimatedReviewTime.optional(),
    segment: Segment,
    subsegment: SubSegment.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
    documents: z
      .array(
        z
          .object({
            documentId: z.string(),
            status: DocumentUploadStatus,
            mimeType: z.string(),
            fileSize: z.number().int().gte(1).lte(10000000),
            uploadUrl: z.string().optional(),
            errors: z.array(DocumentUploadError).optional(),
          })
          .passthrough()
      )
      .optional(),
  })
  .passthrough();
const PendingResponse: z.ZodType<PendingResponse> = z.lazy(() =>
  z
    .object({
      verificationId: z.string(),
      statusUrl: z.string(),
      awaitingStep: VerificationStep.optional(),
      maxReviewTime: ReviewTime.optional(),
      estimatedReviewTime: EstimatedReviewTime.optional(),
      currentStep: VerificationStep,
      errorIds: z.array(ErrorId).optional(),
      segment: Segment.optional(),
      subsegment: SubSegment.optional(),
      locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
      country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
      created: z.number().int().optional(),
      updated: z.number().int().optional(),
      lastResponse: VerificationResponse.optional(),
    })
    .passthrough()
);
const ErrorResponse = z
  .object({
    verificationId: z.string(),
    errorIds: z.array(ErrorId),
    currentStep: VerificationStep,
    segment: Segment.optional(),
    subsegment: SubSegment.optional(),
    systemErrorMessage: z.string(),
    redirectUrl: z.string(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
    consolationRewardCode: z.string().optional(),
  })
  .passthrough();
const SsoResponse = z
  .object({
    verificationId: z.string(),
    loginUrl: z.string(),
    cancelUrl: z.string(),
    currentStep: VerificationStep,
    errorIds: z.array(ErrorId).optional(),
    segment: Segment.optional(),
    subsegment: SubSegment.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
  })
  .passthrough();
const SMSLoopResponse = z
  .object({
    verificationId: z.string(),
    retryUrl: z.string(),
    submissionUrl: z.string(),
    currentStep: VerificationStep,
    errorIds: z.array(ErrorId).optional(),
    segment: Segment.optional(),
    subsegment: SubSegment.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
  })
  .passthrough();
const CancellableResponse = z
  .object({
    verificationId: z.string(),
    currentStep: VerificationStep,
    submissionUrl: z.string(),
    errorIds: z.array(ErrorId).optional(),
    segment: Segment.optional(),
    subsegment: SubSegment.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
    cancelUrl: z.string(),
  })
  .passthrough();
const EmailLoopResponse = z
  .object({
    verificationId: z.string(),
    currentStep: VerificationStep,
    errorIds: z.array(ErrorId).optional(),
    segment: Segment.optional(),
    subsegment: SubSegment.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
    submissionUrl: z.string(),
    cancelUrl: z.string().optional(),
    canResendEmailLoop: z.boolean().optional(),
  })
  .passthrough();
const ConsolationResponse = z
  .object({
    verificationId: z.string(),
    currentStep: VerificationStep,
    segment: Segment.optional(),
    subSegment: SubSegment.optional(),
    redirectUrl: z.string(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    consolationRewardCode: z.string(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
  })
  .passthrough();
const OverrideResponse = z
  .object({
    verificationId: z.string(),
    currentStep: VerificationStep,
    segment: Segment.optional(),
    subSegment: SubSegment.optional(),
    submissionUrl: z.string(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
  })
  .passthrough();
const NewCollectIdentifierResponse = NewVerificationResponse;
const CompleteAuthenticationResponse = z
  .object({
    verificationId: z.string(),
    currentStep: VerificationStep,
    errorIds: z.array(ErrorId).optional(),
    segment: Segment.optional(),
    subsegment: SubSegment.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
    submissionUrl: z.string(),
    cancelUrl: z.string().optional(),
  })
  .passthrough();
const VerificationResponse: z.ZodType<VerificationResponse> = z.lazy(() =>
  z.union([
    SuccessResponse,
    NewVerificationResponse,
    NewAgeVerificationResponse,
    NewMilitaryVerificationResponse,
    NewFirstResponderVerificationResponse,
    NewMedicalProfessionalVerificationResponse,
    NewEmploymentVerificationResponse,
    NewMarketplaceVerificationResponse,
    DocumentReviewResponse,
    PendingResponse,
    ErrorResponse,
    SsoResponse,
    SMSLoopResponse,
    CancellableResponse,
    EmailLoopResponse,
    ConsolationResponse,
    OverrideResponse,
    NewCollectIdentifierResponse,
    CompleteAuthenticationResponse,
  ])
);
const ActiveMilitary = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate,
    organization: Organization,
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
    country: z.string().optional(),
  })
  .passthrough();
const ValidSocialSecurityNumber = z.number();
const InactiveMilitary = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate,
    organization: Organization,
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    dischargeDate: z.string(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
    country: z.string().optional(),
    socialSecurityNumber: ValidSocialSecurityNumber.optional(),
    address1: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
  })
  .passthrough();
const Teacher = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    organization: Organization,
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    birthDate: ValidBirthDate.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    postalCode: z.string().optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const Senior = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate,
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    postalCode: z.string(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const Age = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate,
    phoneNumber: ValidPhoneNumber,
    postalCode: z.string().optional(),
    city: z.string().optional(),
    address1: z.string().optional(),
    country: ValidCountryCode.optional(),
    deviceFingerprintHash: z.string().optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
    marketConsent: z.boolean().optional(),
  })
  .passthrough();
const FirstResponderStatus = z.enum([
  "POLICE",
  "EMT",
  "FIREFIGHTER",
  "SEARCH_AND_RESCUE",
]);
const FirstResponder = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate.optional(),
    status: FirstResponderStatus.optional(),
    statuses: z.array(FirstResponderStatus),
    organization: Organization,
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
    postalCode: z.string().optional(),
    stateCode: z.string().optional(),
    country: z.string().optional(),
  })
  .passthrough();
const LicensedProfessionalStatus = z.enum([
  "LICENSED_COSMETOLOGIST",
  "LICENSED_REAL_ESTATE_AGENT",
  "VETERINARIAN",
  "CHILD_CARE_WORKER",
  "LIBRARIAN",
  "INTERIOR_DESIGNER",
  "ARCHITECT",
  "GENERAL_CONTRACTOR",
]);
const LicensedProfessional = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate,
    postalCode: z.string(),
    statuses: z.array(LicensedProfessionalStatus),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    organization: Organization,
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const MoverStatus = z.enum(["HOME_BUYER", "OTHER_MOVER"]);
const Mover = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    address1: z.string(),
    postalCode: z.string(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate.optional(),
    deviceFingerprintHash: z.string().optional(),
    statuses: z.array(MoverStatus),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const MedicalProfessionalStatus = z.enum([
  "NURSE",
  "DOCTOR",
  "DENTIST",
  "PHARMACIST",
  "OTHER_HEALTH_WORKER",
]);
const MedicalProfessional = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate,
    postalCode: z.string(),
    status: MedicalProfessionalStatus.optional(),
    statuses: z.array(MedicalProfessionalStatus),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    organization: Organization,
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    memberId: z.string().optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const DriverLicense = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    state: z.string(),
    driverLicenseNumber: z.string(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    deviceFingerprintHash: z.string().optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const GeneralIdentity = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    birthDate: ValidBirthDate.optional(),
    address1: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    deviceFingerprintHash: z.string().optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const Employee = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    address1: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    organization: Organization,
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    deviceFingerprintHash: z.string().optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const Member = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate.optional(),
    memberId: z.string().optional(),
    address1: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    organization: Organization,
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const LowIncomeStatus = z.enum([
  "SNAP_BENEFITS",
  "OTHER_GOVERNMENT_ASSISTANCE",
]);
const LowIncome = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    postalCode: z.string(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate,
    statuses: z.array(LowIncomeStatus),
    address1: z.string(),
    city: z.string(),
    state: z.string(),
    organization: Organization.optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/),
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    deviceFingerprintHash: z.string().optional(),
    ebtCardNumber: z.string().optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const VerificationSearch = z
  .object({
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    name: z
      .object({ first: z.string(), last: z.string() })
      .partial()
      .passthrough(),
    externalUserId: z.string(),
    phoneNumber: ValidPhoneNumber.regex(/\+?0*\d{10,}(x[0-9]{0,5})?/),
    verificationId: z.string(),
  })
  .partial()
  .passthrough();
const VerificationSearchFilter = z
  .object({
    programId: z.string(),
    steps: z.array(VerificationStep),
    created: z
      .object({ gte: z.number().int(), lte: z.number().int() })
      .partial()
      .passthrough(),
  })
  .partial()
  .passthrough();
const VerificationSearchRequest = z
  .object({ search: VerificationSearch, filter: VerificationSearchFilter })
  .partial()
  .passthrough();
const VerificationSearchResponse = z
  .object({ results: z.array(VerificationResponse) })
  .partial()
  .passthrough();
const SystemErrorMessage = z
  .object({
    systemErrorMessage: z.string(),
    errorIds: z.array(ErrorId).nullish(),
  })
  .passthrough();
const MarketplaceSubject = z
  .object({
    deviceFingerprintHash: z.string().optional(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    ipAddress: IPV4Address.optional(),
    ipAddressExtended: IPAddress.optional(),
    externalUserId: z.string().optional(),
    email2: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ).optional(),
    phoneNumber: ValidPhoneNumber.regex(
      /\+?0*\d{10,}(x[0-9]{0,5})?/
    ).optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const VerificationToken = z
  .object({ verificationToken: z.string() })
  .passthrough();
const VerificationSubject = z.union([
  Student,
  Teacher,
  ActiveMilitary,
  InactiveMilitary,
  Senior,
  Age,
  FirstResponder,
  MedicalProfessional,
  Employee,
  MarketplaceSubject,
  VerificationToken,
  LicensedProfessional,
  Mover,
  LowIncome,
]);
const ConfirmedSegment = z
  .object({
    segment: Segment,
    subSegment: SubSegment,
    organization: Organization,
    active: z.boolean(),
    startDate: z.string(),
    endDate: z.string(),
  })
  .partial()
  .passthrough();
const ExternalVerificationType = z.enum([
  "authoritative",
  "domainValidation",
  "documentReview",
  "emailLoop",
  "honorSystem",
  "other",
  "predictive",
  "smsLoop",
  "sso",
]);
const VerificationMethod = z.enum(["INSTANT", "MANUAL"]);
const VerificationDetails = z
  .object({
    created: z.number().int(),
    updated: z.number().int(),
    programId: z.string(),
    trackingId: z.string().optional(),
    personId: z.string().optional(),
    socialId: z.string(),
    lastResponse: VerificationResponse,
    personInfo: VerificationSubject,
    docUploadRejectionCount: z.number(),
    docUploadRejectionReasons: z.array(z.array(RejectionReason)),
    confirmedSegments: z.array(ConfirmedSegment).optional(),
    approvingVerificationTypes: z.array(ExternalVerificationType).optional(),
    verificationMethod: VerificationMethod.nullable(),
  })
  .passthrough();
const LabelDetails = z.object({ comment: z.string() }).passthrough();
const RememberMeCallToActionResponse = z
  .object({
    verificationId: z.string().default(false),
    alreadyRemembered: z.boolean(),
    collectedInformation: z
      .object({
        collectedFields: z.array(z.string()),
        organization: Organization,
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const RememberConsumerRequest = z
  .object({
    rememberMeConsentValue: z.boolean().default(false),
    sheeridMarketingConsentValue: z.boolean().optional().default(false),
  })
  .passthrough();
const PersonalInfoMessages = z
  .object({ title: z.string(), subtitle: z.string() })
  .passthrough();
const DocUploadMessages = z
  .object({ title: z.string(), subtitle: z.string() })
  .passthrough();
const SuccessMessages = z.record(z.string().nullable());
const PendingMessages = z.record(z.string());
const ConsolationMessages = z.record(z.string());
const EmailLoopMessages = z.record(z.string());
const SsoMessages = z
  .object({ title: z.string(), subtitle: z.string(), login: z.string() })
  .passthrough();
const ErrorMessages = z.record(
  z.union([z.string(), z.object({}).partial().passthrough()])
);
const CollectIdentifierMessages = z.record(z.string());
const CompleteAuthenticationMessages = z.record(z.string());
const StepMessages = z
  .object({
    personalInfo: PersonalInfoMessages,
    docUpload: DocUploadMessages,
    success: SuccessMessages,
    pending: PendingMessages,
    consolation: ConsolationMessages,
    emailLoop: EmailLoopMessages.optional(),
    sso: SsoMessages,
    error: ErrorMessages,
    collectIdentifier: CollectIdentifierMessages,
    completeAuthentication: CompleteAuthenticationMessages,
  })
  .passthrough();
const ProgramMessages = z
  .object({
    companyName: z.string(),
    lowRewardPool: z.string(),
    optIn: z
      .string()
      .default(
        "The message shown when the marketing opt-in checkbox is presented"
      ),
    step: StepMessages,
    errorId: z.record(z.string()),
  })
  .passthrough();
const Internationalization = z
  .object({ locale: z.string(), messages: ProgramMessages })
  .passthrough();
const HexColor = z.string();
const LandingPageLayout = z.enum(["center", "splitRight", "fullRight"]);
const LandingPageTheme = z
  .object({
    logoUrl: z.string().url(),
    backgroundImageUrl: z.string().url(),
    backgroundColor: HexColor.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    primaryFontColor: HexColor.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    layout: LandingPageLayout,
  })
  .partial()
  .passthrough();
const ThemeChoices = z
  .object({
    logoUrl: z.string().url(),
    font: z.string(),
    backgroundColor: HexColor.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    primaryFontColor: HexColor.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    buttonColor: HexColor.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    buttonFontColor: HexColor.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    linkColor: HexColor.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    h1FontColor: HexColor.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    helperFontColor: HexColor.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    customCss: z.string(),
    landingPage: LandingPageTheme,
  })
  .partial()
  .passthrough();
const MarketConsent = z
  .object({ enabled: z.boolean(), required: z.boolean(), message: z.string() })
  .passthrough();
const CustomMetadata = z
  .object({ enabled: z.boolean(), keys: z.array(z.string()) })
  .passthrough();
const OrganizationType = z.enum([
  "UNIVERSITY",
  "POST_SECONDARY",
  "MEMBERSHIP",
  "MILITARY",
  "FIRST_RESPONDER",
  "MEDICAL",
  "NON_PROFIT",
  "CORPORATE",
  "K12",
  "AGE_ID",
  "HIGH_SCHOOL",
  "NONE",
]);
const BrandInfo = z
  .object({
    faqUrl: z.string(),
    emailAddress: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    phoneNumber: ValidPhoneNumber.regex(/\+?0*\d{10,}(x[0-9]{0,5})?/),
  })
  .passthrough();
const OfferType = z.enum(["staticCode", "autogenCode", "noCode", "rewardPool"]);
const ProgramVerificationConfig = z
  .object({
    countries: z.array(z.string()),
    locales: z.array(z.string()),
    maxReviewTime: ReviewTime,
    estimatedReviewTime: EstimatedReviewTime,
    marketConsent: MarketConsent,
    customMetadata: CustomMetadata,
    customFaqLink: z.string(),
    orgRemoteSource: OrganizationRemoteSource.optional(),
    orgSearchUrl: z.string(),
    orgTypes: z.array(OrganizationType),
    orgSearchCountryTags: z.record(z.array(z.string())).optional(),
    rewardDisplay: z
      .array(z.enum(["TEXT", "QR", "ITF", "UPC_A", "CODE_128", "PDF417"]))
      .optional(),
    excludedOrganizationIds: z.array(z.number()),
    brandInfo: BrandInfo,
    segment: Segment.optional(),
    offerType: OfferType.default("autogenCode"),
    maxAge: z.number().int().optional(),
    minAge: z.number().int().optional(),
    onfidoReportNames: z.array(z.string()).optional(),
    onfidoIncludedCountries: z.array(z.string()).optional(),
    customProgramData: z.record(z.string()).optional(),
  })
  .passthrough();
const ProgramTheme = z
  .object({
    intl: Internationalization,
    customCss: z.string(),
    themeChoices: ThemeChoices.optional(),
    logoUrl: z.string(),
    privacyPolicyUrl: z.string(),
    isTestMode: z.boolean(),
    openOrgSearchEnabled: z.boolean().optional(),
    isSmsNotifierConfigured: z.boolean().optional(),
    smsLoopEnabled: z.boolean(),
    docUploadEnabled: z.boolean(),
    emailLoopEnabled: z.boolean(),
    ssoEnabled: z.boolean(),
    overrideEnabled: z.boolean(),
    threatMetrixEnabled: z.boolean().optional(),
    ipqsDeviceFingerprintEnabled: z.boolean().optional(),
    strictMilitaryValidationEnabled: z.boolean().optional(),
    remainingRewardCodes: z.number().int(),
    config: ProgramVerificationConfig,
  })
  .passthrough();
const PossibleStepsResponse = z
  .object({ steps: z.array(VerificationStep) })
  .passthrough();
const VerificationLimitRequest = z
  .object({ quantity: z.number().int(), days: z.number().int() })
  .passthrough();
const ProgramConfig = z.object({}).partial().passthrough();
const WebhookRequest = z.object({ callbackUri: z.string() }).passthrough();
const SendLinkRequest = z
  .object({
    phoneNumber: ValidPhoneNumber.regex(/\+?0*\d{10,}(x[0-9]{0,5})?/),
    externalUserId: z.string().optional(),
  })
  .passthrough();
const VerificationModeInclusion = z.enum(["ALL", "LIVE", "TEST"]);
const RewardEligibility = z.enum(["ELIGIBLE", "INELIGIBLE"]);
const Community = z.enum([
  "Military",
  "Education",
  "Student",
  "Teacher / Faculty",
  "Employment",
  "EMT",
  "Firefighter",
  "Police",
  "First Responder",
  "Member",
  "Business",
  "Non Profit",
  "Nurse",
  "Doctor",
  "Dentist",
  "Pharmacist",
  "Other Healthcare",
  "Medical",
  "Age",
  "Cosmetologist",
  "Real Estate Agent",
  "Identity",
  "Veterinarian",
  "Child Care Worker",
  "Recent Mover",
  "Low Income",
  "Other",
]);
const RowFilter = z
  .object({ field: z.string(), value: z.string() })
  .partial()
  .passthrough();
const VerificationReportRequest = z
  .object({
    format: z.literal("CSV"),
    startDate: z.string().datetime({ offset: true }).optional(),
    endDate: z.string().datetime({ offset: true }).optional(),
    isPiiIncluded: z.boolean().optional(),
    piiReason: z.string().optional(),
    verificationModeInclusion:
      VerificationModeInclusion.optional().default("LIVE"),
    programIds: z.array(z.string()).optional(),
    countryCodes: z.array(z.string()).optional(),
    rewardEligibilities: z.array(RewardEligibility).optional(),
    communities: z.array(Community).optional(),
    metadataRowFilters: z.array(RowFilter).optional(),
    standardFields: z.array(z.string()).optional(),
    personFields: z.array(z.string()).optional(),
    metadataFields: z.array(z.string()).optional(),
  })
  .passthrough();
const ReportStatus = z.enum(["PENDING", "COMPLETE", "ERROR", "DELETED"]);
const ReportStatusResponse = z
  .object({
    id: z.string(),
    status: ReportStatus,
    statusUrl: z.string().url(),
    retrievalUrl: z.string().url(),
    requester: z.string(),
    created: z.number().int(),
  })
  .partial()
  .passthrough();
const ReportField = z
  .object({
    name: z.string().optional(),
    columnHeading: z.string(),
    description: z.string().optional(),
  })
  .passthrough();
const ReportFieldSet = z
  .object({
    scope: z.enum(["STANDARD", "PII", "METADATA"]),
    fields: z.array(ReportField),
  })
  .passthrough();
const ConversionRequest = z
  .object({
    amount: z.number().gte(0).default(1),
    currency: z.string().default("USD"),
    tags: z.array(z.string()),
  })
  .partial()
  .passthrough();
const ConversionResponse = z.object({ id: z.string() }).partial().passthrough();
const AddSchoolRequest = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    programId: z.string(),
    schoolName: z.string(),
    schoolDomain: z.string(),
    schoolCountry: z.string(),
    trackingId: z.string().optional(),
  })
  .passthrough();
const EligibleSchoolDomainSearch = z
  .object({
    programId: z.string(),
    schoolDomain: z.string(),
    schoolCountry: z.string(),
  })
  .passthrough();
const EligibleSchoolSearchResult = z
  .object({
    eligible: z.array(Organization),
    ineligible: z.array(Organization),
    errorIds: z.array(ErrorId),
  })
  .passthrough();
const EligibleSchoolNameSearch = z
  .object({
    programId: z.string(),
    schoolName: z.string(),
    schoolCountry: z.string(),
  })
  .passthrough();
const NewVerificationRequest = z
  .object({
    programId: z.string(),
    trackingId: z.string().optional(),
    installPageUrl: z.string().optional(),
    metadata: PersonalInfoMetadata.optional(),
  })
  .passthrough();
const EmploymentStatus = z.literal("EMPLOYEE");
const MilitaryStatus = z.enum([
  "ACTIVE_DUTY",
  "VETERAN",
  "RESERVIST",
  "MILITARY_RETIREE",
  "MILITARY_FAMILY",
  "GOLD_STAR_FAMILY",
]);
const GenericVerificationSubject = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    address1: z.string(),
    city: z.string(),
    state: z.string(),
    stateCode: z.string(),
    deviceFingerprintHash: z.string(),
    dischargeDate: z.string(),
    driverLicenseNumber: z.string(),
    activeDutyStartDate: z.string(),
    country: ValidCountryCode,
    memberId: z.string(),
    verificationToken: z.string(),
    postalCode: z.string(),
    trackingId: z.string(),
    ebtCardNumber: z.string(),
    statuses: z.array(
      z.union([
        FirstResponderStatus,
        MedicalProfessionalStatus,
        LowIncomeStatus,
        LicensedProfessionalStatus,
        EmploymentStatus,
        MilitaryStatus,
        MoverStatus,
      ])
    ),
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
    birthDate: ValidBirthDate,
    organization: Organization,
    ipAddress: IPV4Address,
    ipAddressExtended: IPAddress,
    externalUserId: z.string(),
    phoneNumber: ValidPhoneNumber.regex(/\+?0*\d{10,}(x[0-9]{0,5})?/),
    socialSecurityNumber: ValidSocialSecurityNumber,
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/),
    metadata: PersonalInfoMetadata,
  })
  .partial()
  .passthrough();
const MilitaryStatusRequest = z
  .object({ status: MilitaryStatus })
  .passthrough();
const SocialSecurityNumberRequest = z
  .object({ socialSecurityNumber: ValidSocialSecurityNumber })
  .passthrough();
const Identifier = z
  .object({
    email: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
  })
  .passthrough();
const AuthenticationToken = z
  .object({ authenticationToken: z.string() })
  .passthrough();
const EmailLoopToken = z
  .object({
    emailToken: z.string().optional(),
    deviceFingerprintHash: z.string().optional(),
  })
  .passthrough();
const RetrieveEmailLoopTokenRequest = z
  .object({ refreshToken: z.boolean().default(false) })
  .partial()
  .passthrough();
const RetrieveEmailLoopTokenResponse = z
  .object({ token: z.string() })
  .partial()
  .passthrough();
const ResumeEmailLoopRequest = z
  .object({
    emailAddress: ValidEmail.regex(
      /(^\s*?[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@([A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)+|\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\s*?$)/
    ),
  })
  .partial()
  .passthrough();
const EmailLoopState = z.enum(["collectOrganizationEmail", "pending"]);
const ResumeEmailLoopResponse = z
  .object({
    verificationId: z.string(),
    currentStep: VerificationStep,
    errorIds: z.array(ErrorId).optional(),
    segment: Segment.optional(),
    subsegment: SubSegment.optional(),
    locale: ValidLocale.regex(/^[a-z]{2}-[A-Z]{2}$/).optional(),
    country: ValidCountryCode.regex(/^[A-Z]{2}$/).optional(),
    created: z.number().int().optional(),
    updated: z.number().int().optional(),
    currentState: EmailLoopState.optional(),
    submissionUrl: z.string(),
    cancelUrl: z.string().optional(),
    canResendEmailLoop: z.boolean().optional(),
    token: z.string().optional(),
  })
  .passthrough();
const SMSCode = z
  .object({ smsCode: z.string(), deviceFingerprintHash: z.string().optional() })
  .passthrough();
const DocumentUploadRequest = z
  .object({ file: z.array(z.instanceof(File)) })
  .passthrough();
const OverrideRequest = z.object({ overrideCode: z.string() }).passthrough();
const NewMarketplaceVerificationRequest = z
  .object({
    programId: z.string(),
    trackingId: z.string(),
    subject: MarketplaceSubject,
  })
  .passthrough();
const OrganizationDetails = z
  .object({
    id: z.number().int(),
    name: z.string(),
    type: OrganizationType,
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
  })
  .passthrough();

export const schemas = {
  BuildInformationResponseMessage,
  ValidEmail,
  ValidBirthDate,
  OrganizationRemoteSource,
  Organization,
  IPV4Address,
  IPAddress,
  ValidPhoneNumber,
  ValidLocale,
  PersonalInfoMetadata,
  Student,
  VerificationStep,
  ErrorId,
  Segment,
  SubSegment,
  ValidCountryCode,
  ConsumerInfoState,
  SuccessResponse,
  NewVerificationResponse,
  NewAgeVerificationResponse,
  NewMilitaryVerificationResponse,
  NewFirstResponderVerificationResponse,
  NewMedicalProfessionalVerificationResponse,
  NewEmploymentVerificationResponse,
  NewMarketplaceVerificationResponse,
  RejectionReason,
  ReviewTime,
  EstimatedReviewTime,
  DocumentUploadStatus,
  DocumentUploadError,
  DocumentReviewResponse,
  PendingResponse,
  ErrorResponse,
  SsoResponse,
  SMSLoopResponse,
  CancellableResponse,
  EmailLoopResponse,
  ConsolationResponse,
  OverrideResponse,
  NewCollectIdentifierResponse,
  CompleteAuthenticationResponse,
  VerificationResponse,
  ActiveMilitary,
  ValidSocialSecurityNumber,
  InactiveMilitary,
  Teacher,
  Senior,
  Age,
  FirstResponderStatus,
  FirstResponder,
  LicensedProfessionalStatus,
  LicensedProfessional,
  MoverStatus,
  Mover,
  MedicalProfessionalStatus,
  MedicalProfessional,
  DriverLicense,
  GeneralIdentity,
  Employee,
  Member,
  LowIncomeStatus,
  LowIncome,
  VerificationSearch,
  VerificationSearchFilter,
  VerificationSearchRequest,
  VerificationSearchResponse,
  SystemErrorMessage,
  MarketplaceSubject,
  VerificationToken,
  VerificationSubject,
  ConfirmedSegment,
  ExternalVerificationType,
  VerificationMethod,
  VerificationDetails,
  LabelDetails,
  RememberMeCallToActionResponse,
  RememberConsumerRequest,
  PersonalInfoMessages,
  DocUploadMessages,
  SuccessMessages,
  PendingMessages,
  ConsolationMessages,
  EmailLoopMessages,
  SsoMessages,
  ErrorMessages,
  CollectIdentifierMessages,
  CompleteAuthenticationMessages,
  StepMessages,
  ProgramMessages,
  Internationalization,
  HexColor,
  LandingPageLayout,
  LandingPageTheme,
  ThemeChoices,
  MarketConsent,
  CustomMetadata,
  OrganizationType,
  BrandInfo,
  OfferType,
  ProgramVerificationConfig,
  ProgramTheme,
  PossibleStepsResponse,
  VerificationLimitRequest,
  ProgramConfig,
  WebhookRequest,
  SendLinkRequest,
  VerificationModeInclusion,
  RewardEligibility,
  Community,
  RowFilter,
  VerificationReportRequest,
  ReportStatus,
  ReportStatusResponse,
  ReportField,
  ReportFieldSet,
  ConversionRequest,
  ConversionResponse,
  AddSchoolRequest,
  EligibleSchoolDomainSearch,
  EligibleSchoolSearchResult,
  EligibleSchoolNameSearch,
  NewVerificationRequest,
  EmploymentStatus,
  MilitaryStatus,
  GenericVerificationSubject,
  MilitaryStatusRequest,
  SocialSecurityNumberRequest,
  Identifier,
  AuthenticationToken,
  EmailLoopToken,
  RetrieveEmailLoopTokenRequest,
  RetrieveEmailLoopTokenResponse,
  ResumeEmailLoopRequest,
  EmailLoopState,
  ResumeEmailLoopResponse,
  SMSCode,
  DocumentUploadRequest,
  OverrideRequest,
  NewMarketplaceVerificationRequest,
  OrganizationDetails,
};

const endpoints = makeApi([
  {
    method: "post",
    path: "/conversion/account/:accountId/trackingId/:trackingId",
    alias: "storeVerificationConversionByTrackingId",
    description: `Store conversion information based on a tracking ID provided with the NewVerificationRequest when creating a verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The conversion information`,
        type: "Body",
        schema: ConversionRequest,
      },
      {
        name: "accountId",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "trackingId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({ id: z.string() }).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Account or trackingId not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/conversion/verification/:verificationId",
    alias: "storeVerificationConversion",
    description: `Store conversion information`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The conversion information`,
        type: "Body",
        schema: ConversionRequest,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({ id: z.string() }).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "get",
    path: "/info",
    alias: "getBuildInformation",
    requestFormat: "json",
    response: BuildInformationResponseMessage,
  },
  {
    method: "get",
    path: "/organization/:verificationId",
    alias: "getOrganizationDetails",
    description: `Get detailed information about the organization submitted for a verification. Requires an API token.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: OrganizationDetails,
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/organization/addSchool",
    alias: "submitAddSchoolRequest",
    description: `Submit an add school request`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The add school request`,
        type: "Body",
        schema: AddSchoolRequest,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The add school request was not properly formatted`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `The provided program was not found`,
        schema: SystemErrorMessage,
      },
      {
        status: 429,
        description: `Too many add school requests for the given program`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/organization/addSchool/search/domain",
    alias: "searchForEligibleSchoolsByDomain",
    description: `Search for eligible schools by domain name as part of the add school flow`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: EligibleSchoolDomainSearch,
      },
    ],
    response: EligibleSchoolSearchResult,
    errors: [
      {
        status: 400,
        description: `The search was not properly formatted`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `The provided program was not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/organization/addSchool/search/name",
    alias: "searchForEligibleSchoolsByName",
    description: `Search for eligible schools by name as part of the add school flow`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: EligibleSchoolNameSearch,
      },
    ],
    response: EligibleSchoolSearchResult,
    errors: [
      {
        status: 400,
        description: `The search was not properly formatted`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `The provided program was not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "get",
    path: "/program/:programId/possibleSteps",
    alias: "getPossibleSteps",
    description: `Get the verification steps the given program may encounter in the verification flow.`,
    requestFormat: "json",
    parameters: [
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PossibleStepsResponse,
    errors: [
      {
        status: 404,
        description: `Program not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/program/:programId/sendLink",
    alias: "sendLink",
    description: `Sends a link to the program to the target`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The send link request bodoy`,
        type: "Body",
        schema: SendLinkRequest,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Program not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "get",
    path: "/program/:programId/theme",
    alias: "getProgramTheme",
    description: `Get the theme data (messages and CSS) for a program`,
    requestFormat: "json",
    parameters: [
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "locale",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: ProgramTheme,
    errors: [
      {
        status: 404,
        description: `Program not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/program/:programId/verificationLimit",
    alias: "createVerificationLimit",
    description: `Create a verification limit for a given program`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The create verification limit request`,
        type: "Body",
        schema: VerificationLimitRequest,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({}).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: SystemErrorMessage,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Program not found`,
        schema: SystemErrorMessage,
      },
      {
        status: 409,
        description: `Verification limit already exists`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "delete",
    path: "/program/:programId/verificationLimit",
    alias: "deleteVerificationLimit",
    description: `Delete verification limit for a given program`,
    requestFormat: "json",
    parameters: [
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({}).partial().passthrough(),
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Program not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/program/:programId/webhook",
    alias: "createWebhook",
    description: `Create a webhook for any verifications done using the given program`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The create webhook request`,
        type: "Body",
        schema: z.object({ callbackUri: z.string() }).passthrough(),
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({}).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: SystemErrorMessage,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Program not found`,
        schema: SystemErrorMessage,
      },
      {
        status: 409,
        description: `Webhook already exists`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "delete",
    path: "/program/:programId/webhook",
    alias: "deleteWebhook",
    description: `Delete the webhook for any verifications done using the given program`,
    requestFormat: "json",
    parameters: [
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({}).partial().passthrough(),
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Program not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "get",
    path: "/report/:reportId",
    alias: "getReportData",
    description: `Retrieve data for a previously-generated report`,
    requestFormat: "json",
    parameters: [
      {
        name: "reportId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `No report found having the supplied ID`,
        schema: SystemErrorMessage,
      },
      {
        status: 410,
        description: `The requested report has been deleted/purged`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "get",
    path: "/report/:reportId/status",
    alias: "getReportStatus",
    description: `Retrieve report generation status by report ID`,
    requestFormat: "json",
    parameters: [
      {
        name: "reportId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ReportStatusResponse,
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `No report found having the supplied ID`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "get",
    path: "/report/fields",
    alias: "listReportFields",
    description: `Retrieve a list of reporting fields available to the user&#x27;s account and the programs requested`,
    requestFormat: "json",
    parameters: [
      {
        name: "programIds",
        type: "Query",
        schema: z.array(z.string()).optional(),
      },
    ],
    response: z.array(ReportFieldSet),
    errors: [
      {
        status: 400,
        description: `Bad Request - one or more of the requested program ids is invalid.`,
        schema: ErrorResponse,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/report/reverify/:batchId",
    alias: "generateReverificationReport",
    description: `Generate a verification report for a re-verification task which can be downloaded later`,
    requestFormat: "json",
    parameters: [
      {
        name: "batchId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ReportStatusResponse,
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/report/verification",
    alias: "generateVerificationReport",
    description: `Generate a verification report which can be downloaded later`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: VerificationReportRequest,
      },
    ],
    response: ReportStatusResponse,
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/verification",
    alias: "newVerification",
    description: `Start the verification flow for a given program`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The request to retrieve a verification configuration for a given program`,
        type: "Body",
        schema: NewVerificationRequest,
      },
    ],
    response: NewVerificationResponse,
    errors: [
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Program not found`,
        schema: ErrorResponse,
      },
      {
        status: 409,
        description: `No reward codes remaining for program`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/:verificationId",
    alias: "getVerificationStatus",
    description: `Get current state of a verification including the current step and submission URL if available`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more document uploads, or User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/:verificationId/barcode",
    alias: "getBarcodeForReward",
    description: `Retrieves a barcode image for a given reward code, if the verification is in the proper state and has reward codes`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "rewardKey",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "symbology",
        type: "Query",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification or reward code not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/:verificationId/details",
    alias: "getVerificationDetails",
    description: `Get detailed information about a verification. Requires an API token.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationDetails,
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/expire",
    alias: "expireVerification",
    description: `Expire the provided verification. Used when abandoning a verification attempt.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/label/:label",
    alias: "labelVerification",
    description: `Add a label to a verification request. Requires an API token.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Additional supporting details related to labeling the verification request`,
        type: "Body",
        schema: z.object({ comment: z.string() }).passthrough().optional(),
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "label",
        type: "Path",
        schema: z.enum(["suspectedFraud", "confirmedFraud"]),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: SystemErrorMessage,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/:verificationId/metadata",
    alias: "getVerificationMetadata",
    description: `Get the metadata of a verification. Requires an API token.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.record(z.string().max(10000)),
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "put",
    path: "/verification/:verificationId/metadata",
    alias: "updateVerificationMetadata",
    description: `Replace the metadata of an ongoing verification. Requires an API token.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.record(z.string().max(10000)),
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.record(z.string().max(10000)),
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/purgePersonData",
    alias: "purgeVerificationPersonData",
    description: `Submit a request to purge the personal data (PII) from the provided verification, and expire it if it isn&#x27;t already.
Requires an API token. User must have &quot;Account Owner&quot; or &quot;Customer Service Manager&quot; role, and must be a member of the account that the verification belongs to.
The purge and expire operations are asynchronous; in most cases it will be completed within 5 minutes.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({}).partial().passthrough(),
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/refireWebhooks",
    alias: "refireWebhooks",
    description: `Refire the most recent webhook notifications for the verification request`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: SystemErrorMessage,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/rememberConsumer",
    alias: "rememberConsumer",
    description: `Only for verifications with Remember Me enabled. Stores consumer info associated with the verification to be used for future verifications. Requires consent from consumer indicated in the request body.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Consent values provided by the consumer.`,
        type: "Body",
        schema: RememberConsumerRequest,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/:verificationId/rememberMeCallToAction",
    alias: "rememberMeCallToAction",
    description: `Only for verifications with Remember Me enabled. After verification success, this endpoint can be used to determine what fields were collected during verification so that the consumer can be informed about which fields will be saved should they elect to have their information stored for future verifications.  This is often followed by a POST to &#x60;/verification/{verificationId]/rememberConsumer&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: RememberMeCallToActionResponse,
    errors: [
      {
        status: 404,
        description: `Verification not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/resetVerificationLimits",
    alias: "resetVerificationLimits",
    description: `Submit a request to reset the verification limits for the provided verification.
Requires an API token. User must have &quot;Account Owner&quot; or &quot;Customer Service Manager&quot; role, and must be a member of the account that the verification belongs to.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({}).partial().passthrough(),
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: SystemErrorMessage,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectActiveMilitaryPersonalInfo",
    alias: "submitActiveMilitaryVerification",
    description: `Submit data for an active military verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The active military and branch of service data collected from the user to be verified`,
        type: "Body",
        schema: ActiveMilitary,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectAgePersonalInfo",
    alias: "submitAgeVerification",
    description: `Submit data for an age verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The age data collected from the user to be verified`,
        type: "Body",
        schema: Age,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectDriverLicensePersonalInfo",
    alias: "submitDriverLicenseVerification",
    description: `Submit data for verifying a subject based on their driver license`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The data collected from the user to be verified`,
        type: "Body",
        schema: DriverLicense,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectEmployeePersonalInfo",
    alias: "submitEmployeeVerification",
    description: `Submit data for an employee verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The employee and company data collected from the user to be verified`,
        type: "Body",
        schema: Employee,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectFirstResponderPersonalInfo",
    alias: "submitFirstResponderVerification",
    description: `Submit data for a first responder verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The first responder data collected from the user to be verified`,
        type: "Body",
        schema: FirstResponder,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectGeneralIdentityPersonalInfo",
    alias: "submitGeneralIdentityVerification",
    description: `Submit data for verifying a subject based on their general identity`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The data collected from the user to be verified`,
        type: "Body",
        schema: GeneralIdentity,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectIdentifier",
    alias: "collectIdentifier",
    description: `Only for verifications with Remember Me enabled.  After verification has been initialized, start with collecting the specified identifier from the consumer.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Identifier,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectInactiveMilitaryPersonalInfo",
    alias: "submitInactiveMilitaryVerification",
    description: `Submit data for an inactive military verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The inactive duty and branch of service data collected from the user to be verified`,
        type: "Body",
        schema: InactiveMilitary,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectLicensedProfessionalPersonalInfo",
    alias: "submitLicensedProfessionalVerification",
    description: `Submit data for a licensed professional verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The licensed professional and organization data collected from the user to be verified`,
        type: "Body",
        schema: LicensedProfessional,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectLowIncomePersonalInfo",
    alias: "submitLowIncomeVerification",
    description: `Submit data for a low income verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The low income personal data collected from the user to be verified`,
        type: "Body",
        schema: LowIncome,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectMarketplaceToken",
    alias: "submitMarketplaceVerification",
    description: `Submit data for a marketplace verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The verification token to submit a marketplace verification`,
        type: "Body",
        schema: z.object({ verificationToken: z.string() }).passthrough(),
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectMedicalProfessionalPersonalInfo",
    alias: "submitMedicalProfessionalVerification",
    description: `Submit data for a medical professional verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The medical professional and organization data collected from the user to be verified`,
        type: "Body",
        schema: MedicalProfessional,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectMemberPersonalInfo",
    alias: "submitMemberVerification",
    description: `Submit data for a member verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The member and organization data collected from the user to be verified`,
        type: "Body",
        schema: Member,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectMilitaryStatus",
    alias: "submitMilitaryStatus",
    description: `Submit military status to determine which kind of military verification to perform`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The status of the military member being verified`,
        type: "Body",
        schema: MilitaryStatusRequest,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectMoverPersonalInfo",
    alias: "submitMoverVerification",
    description: `Submit data for a mover verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The mover data collected from the user to be verified`,
        type: "Body",
        schema: Mover,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectPersonalInfo",
    alias: "submitPersonalInfoVerification",
    description: `Submit consumer data for a verification on a Remember Me enabled program`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The personal info collected from the user to be combined with the stored consumer info to be verified`,
        type: "Body",
        schema: GenericVerificationSubject,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectSeniorPersonalInfo",
    alias: "submitSeniorVerification",
    description: `Submit data for a senior verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The senior data collected from the user to be verified`,
        type: "Body",
        schema: Senior,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectSocialSecurityNumber",
    alias: "submitSocialSecurityNumber",
    description: `Submit social security number for military verification. See &#x60;DELETE&#x60; for documentation about on how to skip this step.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The social security number of the person to be verified`,
        type: "Body",
        schema: SocialSecurityNumberRequest,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "delete",
    path: "/verification/:verificationId/step/collectSocialSecurityNumber",
    alias: "skipSocialSecurityNumber",
    description: `Skip submission of Social Security Number and proceed Doc Upload`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectStudentPersonalInfo",
    alias: "submitStudentVerification",
    description: `Submit data for a student verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The student and university data collected from the user to be verified`,
        type: "Body",
        schema: Student,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/collectTeacherPersonalInfo",
    alias: "submitTeacherVerification",
    description: `Submit data for a teacher verification`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The teacher and school data collected from the user to be verified`,
        type: "Body",
        schema: Teacher,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/completeAuthentication",
    alias: "completeAuthenticationLoop",
    description: `Only for verifications with Remember Me enabled.  After an identifier has been submitted that was previously remembered, this allows the completion of the authentication loop by supplying a token that was provided to the consumer.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ authenticationToken: z.string() }).passthrough(),
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "delete",
    path: "/verification/:verificationId/step/completeAuthentication",
    alias: "cancelAuthenticationLoop",
    description: `Only for verifications with Remember Me enabled. Cancels an ongoing authentication loop if the consumer wishes not to complete it.  Proceeds with normal verification.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/completeDocUpload",
    alias: "completeDocUpload",
    description: `Mark uploading documents as completed`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more document uploads due to the program&#x27;s upload limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/docUpload",
    alias: "submitDocumentReviewFilesWithoutToken",
    description: `Submit files for document review`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: DocumentUploadRequest,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 413,
        description: `Maximum allowed file size exceeded`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more document uploads due to the program&#x27;s upload limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "delete",
    path: "/verification/:verificationId/step/docUpload",
    alias: "cancelDocUpload",
    description: `Cancel document upload for a verification (will move the verification to the next step)`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/emailLoop",
    alias: "completeEmailLoop",
    description: `Complete the email loop verification using the token provided in the email sent to the subject being verified.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The token that was sent to the subjects email`,
        type: "Body",
        schema: EmailLoopToken,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "delete",
    path: "/verification/:verificationId/step/emailLoop",
    alias: "cancelEmailLoop",
    description: `Cancel an ongoing email loop verification (will move the verification to the docUpload step)`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/emailLoop/emailAddressOverride",
    alias: "emailAddressOverride",
    description: `Allows a user to submit an alternate email address. This email address will be used for the Email Loop. The domain of the email address will be validated prior to sending the email message. If the domain is valid for the organization associated with the request, then the user will have been sent an email message containing a link that will complete the email loop, unless the program is configured to bypass sending the email.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ResumeEmailLoopRequest,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: EmailLoopResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: EmailLoopResponse,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/emailLoop/resume",
    alias: "resumeEmailLoop",
    description: `Resumes a paused email loop. If provided, the given email address will be used for the Email Loop. Otherwise, the one already submitted for the Verification will be used. In either case, the domain of the email address will be validated prior to sending the email message. If the domain is valid for the organization associated with the request, then the user will have been sent an email message containing a link that will complete the email loop, unless the program is configured to bypass sending the email. In that case, no email message was sent, and the email loop token is included in the response.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ResumeEmailLoopRequest,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ResumeEmailLoopResponse,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: EmailLoopResponse,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/emailLoop/retrieveToken",
    alias: "retrieveEmailLoopToken",
    description: `Optionally creates and returns the current email loop token.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z
          .object({ refreshToken: z.boolean().default(false) })
          .partial()
          .passthrough(),
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({ token: z.string() }).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: ErrorResponse,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/:verificationId/step/emailLoop/retry",
    alias: "resendEmailLoopToken",
    description: `Send a new email with a fresh email loop token to the person being verified.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/resultOverride",
    alias: "overrideVerification",
    description: `This endpoint allows someone with access to a secret code to override the verification result, forcing it to be approved`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ overrideCode: z.string() }).passthrough(),
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `Incorrect verification override code attempt limit exceeded`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/:verificationId/step/smsLoop",
    alias: "submitSMSCode",
    description: `Submit the token that was provided to the person being verified via an SMS message.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The SMS code that was sent to the user`,
        type: "Body",
        schema: SMSCode,
      },
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/:verificationId/step/smsLoop/retry",
    alias: "resendSMSCode",
    description: `Send a new SMS code to the person being verified.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/:verificationId/step/sso",
    alias: "beginSso",
    description: `Start the SSO process for a given verification. This endpoint will redirect the user to the appropriate login page.`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 307,
        description: `Redirect to the appropriate login page.`,
        schema: z.void(),
      },
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "delete",
    path: "/verification/:verificationId/step/sso",
    alias: "cancelSso",
    description: `Cancel an SSO verification (will move the verification to the docUpload step)`,
    requestFormat: "json",
    parameters: [
      {
        name: "verificationId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/marketplace",
    alias: "newMarketplaceVerification",
    description: `Create a verification that will use the Marketplace verification system`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The request to retrieve a verification token to verify with the provided program`,
        type: "Body",
        schema: NewMarketplaceVerificationRequest,
      },
    ],
    response: NewMarketplaceVerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: ErrorResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Program not found`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectActiveMilitaryPersonalInfo",
    alias: "submitActiveMilitaryVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectActiveMilitaryPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The active military and branch of service data collected from the user to be verified`,
        type: "Body",
        schema: ActiveMilitary,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectAgePersonalInfo",
    alias: "submitAgeVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectAgePersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The age data collected from the user to be verified`,
        type: "Body",
        schema: Age,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectDriverLicensePersonalInfo",
    alias: "submitDriverLicenseVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectDriverLicensePersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The data collected from the user to be verified`,
        type: "Body",
        schema: DriverLicense,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectEmployeePersonalInfo",
    alias: "submitEmployeeVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectEmployeePersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The employee and company data collected from the user to be verified`,
        type: "Body",
        schema: Employee,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectFirstResponderPersonalInfo",
    alias: "submitFirstResponderVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectFirstResponderPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The first responder data collected from the user to be verified`,
        type: "Body",
        schema: FirstResponder,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectGeneralIdentityPersonalInfo",
    alias: "submitGeneralIdentityVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectGeneralIdentityPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The data collected from the user to be verified`,
        type: "Body",
        schema: GeneralIdentity,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectInactiveMilitaryPersonalInfo",
    alias: "submitInactiveMilitaryVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectInactiveMilitaryPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The inactive duty and branch of service data collected from the user to be verified`,
        type: "Body",
        schema: InactiveMilitary,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectLicensedProfessionalPersonalInfo",
    alias: "submitLicensedProfessionalVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectLicensedProfessionalPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The licensed professional data collected from the user to be verified`,
        type: "Body",
        schema: LicensedProfessional,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectLowIncomePersonalInfo",
    alias: "submitLowIncomeVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectLowIncomePersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The low income personal data collected from the user to be verified`,
        type: "Body",
        schema: LowIncome,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectMedicalProfessionalPersonalInfo",
    alias: "submitMedicalProfessionalVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectMedicalProfessionalPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The medical professional data collected from the user to be verified`,
        type: "Body",
        schema: MedicalProfessional,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectMemberPersonalInfo",
    alias: "submitMemberVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectMemberPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The member data collected from the user to be verified`,
        type: "Body",
        schema: Member,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectMoverPersonalInfo",
    alias: "submitMoverVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectMoverPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The mover data collected from the user to be verified`,
        type: "Body",
        schema: Mover,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectSeniorPersonalInfo",
    alias: "submitSeniorVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectSeniorPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The senior data collected from the user to be verified`,
        type: "Body",
        schema: Senior,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectStudentPersonalInfo",
    alias: "submitStudentVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectStudentPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The student and university data collected from the user to be verified`,
        type: "Body",
        schema: Student,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/program/:programId/step/collectTeacherPersonalInfo",
    alias: "submitTeacherVerificationWithProgramId",
    description: `Using this endpoint starts a verification and submits personal info in one request, and is the equivalent to POSTing to &#x60;/verification&#x60; and then &#x60;/verification/{verificationId}/step/collectTeacherPersonalInfo&#x60;`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The teacher and school data collected from the user to be verified`,
        type: "Body",
        schema: Teacher,
      },
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: VerificationResponse,
      },
      {
        status: 403,
        description: `Program not active, due to future start date or a past end date.`,
        schema: ErrorResponse,
      },
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more verifications due to the program&#x27;s person limiting policies`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/program/:programId/trackingId/:trackingId",
    alias: "getVerificationStatusByTrackingId",
    description: `Get current state of a verification including the current step and submission URL if available`,
    requestFormat: "json",
    parameters: [
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "trackingId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VerificationResponse,
    errors: [
      {
        status: 404,
        description: `Verification not found`,
        schema: ErrorResponse,
      },
      {
        status: 429,
        description: `User is not permitted to perform any more document uploads`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "get",
    path: "/verification/program/:programId/trackingId/:trackingId/history",
    alias: "getVerificationsByTrackingId",
    description: `Get list of verifications including the current step and submission URL if available by Tracking ID. Maximum of 10 verifications returned.`,
    requestFormat: "json",
    parameters: [
      {
        name: "programId",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "trackingId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.array(VerificationResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
      {
        status: 404,
        description: `Verifications not found by Tracking ID`,
        schema: ErrorResponse,
      },
    ],
  },
  {
    method: "post",
    path: "/verification/search",
    alias: "searchVerifications",
    description: `List of verifications matching the specified criteria including the current state of the verification. Please reach out to your CSM if you want to enable this endpoint for your account.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `The search criteria to filter based on.`,
        type: "Body",
        schema: VerificationSearchRequest,
      },
    ],
    response: VerificationSearchResponse,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: SystemErrorMessage,
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: SystemErrorMessage,
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
