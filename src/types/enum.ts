import { z } from "zod";

export const sheeridVerificationMethodSchema = z.union([
  z.literal("INSTANT"),
  z.literal("MANUAL")
])
export type SheerIDVerificationMethod = z.infer<typeof sheeridVerificationMethodSchema>;

export const sheeridConsumerInfoStateSchema = z.union([
  z.literal("consumerNotFound"),
  z.literal("consumerFoundNewFieldsAvailable"),
  z.literal("consumerFoundNotActionable")
]);
export type SheerIDConsumerInfoState = z.infer<typeof sheeridConsumerInfoStateSchema>;

export const sheeridVerificationStepSchema = z.union([
  z.literal("success"),
  z.literal("error"),
  z.literal("pending"),
  z.literal("collectStudentPersonalInfo"),
  z.literal("collectActiveMilitaryPersonalInfo"),
  z.literal("collectInactiveMilitaryPersonalInfo"),
  z.literal("collectSeniorPersonalInfo"),
  z.literal("collectAgePersonalInfo"),
  z.literal("collectFirstResponderPersonalInfo"),
  z.literal("collectMedicalProfessionalPersonalInfo"),
  z.literal("collectEmployeePersonalInfo"),
  z.literal("collectLicensedProfessionalInfo"),
  z.literal("collectMoverPersonalInfo"),
  z.literal("collectLowIncomePersonalInfo"),
  z.literal("collectMilitaryStatus"),
  z.literal("collectMarketplaceToken"),
  z.literal("collectSocialSecurityNumber"),
  z.literal("completeAuthentication"),
  z.literal("docUpload"),
  z.literal("sso"),
  z.literal("emailLoop"),
  z.literal("smsLoop"),
  z.literal("consolation"),
  z.literal("override"),
]);
export type SheerIDVerificationStep = z.infer<typeof sheeridVerificationStepSchema>;

export const sheerIDErrorIdSchema = z.union([
  z.literal("internalServerError"),
  z.literal("noProgram"),
  z.literal("invalidProgram"),
  z.literal("expiredProgram"),
  z.literal("inactiveProgram"),
  z.literal("expiredVerification"),
  z.literal("noVerification"),
  z.literal("noOrganization"),
  z.literal("invalidRequest"),
  z.literal("verificationLimitExceeded"),
  z.literal("apiRateLimitExceeded"),
  z.literal("docReviewLimitExceeded"),
  z.literal("noRemainingRewardCodes"),
  z.literal("unknownError"),
  z.literal("invalidApiToken"),
  z.literal("simulatedError"),
  z.literal("invalidDocUploadToken"),
  z.literal("notFound"),
  z.literal("unauthorizedAccountStatus"),
  z.literal("unauthorizedDomain"),
  z.literal("unauthorizedIpAddress"),
  z.literal("unauthorizedRequest"),
  z.literal("unauthorizedUser"),
  z.literal("reverificationDailyLimitExceeded"),
  z.literal("invalidVerificationToken"),
  z.literal("expiredVerificationToken"),
  z.literal("notApproved"),
  z.literal("maxSMSCodeLimitExceeded"),
  z.literal("fraudRulesReject"),
  z.literal("invalidStep"),
  z.literal("invalidOrganization"),
  z.literal("invalidFirstName"),
  z.literal("invalidLastName"),
  z.literal("invalidEmail"),
  z.literal("invalidPhoneNumber"),
  z.literal("invalidBirthDate"),
  z.literal("invalidAddress1"),
  z.literal("invalidCity"),
  z.literal("invalidState"),
  z.literal("invalidPostalCode"),
  z.literal("invalidMilitaryStatus"),
  z.literal("invalidFirstResponderStatus"),
  z.literal("invalidMedicalProfessionalStatus"),
  z.literal("invalidSocialSecurityNumber"),
  z.literal("invalidOverrideCode"),
  z.literal("underagePerson"),
  z.literal("outsideAgePerson"),
  z.literal("futureBirthDate"),
  z.literal("invalidDischargeDate"),
  z.literal("dischargeDateBeforeBirthDate"),
  z.literal("unsupportedDocMimeType"),
  z.literal("invalidFileSizeMax"),
  z.literal("invalidFileSizeEmpty"),
  z.literal("invalidNumberOfFiles"),
  z.literal("maxMetadataValuesExceeded"),
  z.literal("maxMetadataLengthExceeded"),
  z.literal("invalidSMSCode"),
  z.literal("expiredSMSCode"),
  z.literal("incorrectSMSCodeAttemptLimitExceeded"),
  z.literal("incorrectVerificationOverrideCodeAttemptLimitExceeded"),
  z.literal("invalidEmailLoopToken"),
  z.literal("expiredEmailLoopToken"),
]);
export type SheerIDErrorId = z.infer<typeof sheerIDErrorIdSchema>;

export const sheerIDSegmentSchema = z.union([
  z.literal("student"),
  z.literal("teacher"),
  z.literal("military"),
  z.literal("senior"),
  z.literal("age"),
  z.literal("firstResponder"),
  z.literal("medical"),
  z.literal("employment"),
  z.literal("marketplace"),
  z.literal("member"),
  z.literal("licensedProfessional"),
  z.literal("recentMover"),
  z.literal("other"),
]);
export type SheerIDSegment = z.infer<typeof sheerIDSegmentSchema>;

export const sheerIDSubSegmentSchema = z.union([
  z.literal("activeDuty"),
  z.literal("veteran"),
  z.literal("retiree"),
  z.literal("reservist"),
  z.literal("militaryFamily"),
  z.literal("goldStarFamily"),
  z.literal("police"),
  z.literal("fireFighter"),
  z.literal("searchAndRescue"),
  z.literal("emt"),
  z.literal("employee"),
  z.literal("homeBuyer"),
  z.literal("otherMover"),
  z.literal("facultyHighSchool"),
  z.literal("facultyUniversity"),
  z.literal("facultyPostSecondary"),
  z.literal("facultyK12"),
  z.literal("fullAndPartTimeUniversity"),
  z.literal("collegeBound"),
  z.literal("highSchool"),
  z.literal("postSecondary"),
  z.literal("nurse"),
  z.literal("doctor"),
  z.literal("otherHealthWorker"),
  z.literal("dentist"),
  z.literal("pharmacist"),
  z.literal("generalContractor"),
  z.literal("snapBenefits"),
  z.literal("otherGovernmentAssistance"),
  z.literal("architect"),
  z.literal("interiorDesigner"),
  z.literal("librarian"),
  z.literal("childCareWorker"),
  z.literal("veterinarian"),
  z.literal("licensedRealEstateAgent"),
  z.literal("licensedCosmetologist"),
]);
export type SheerIDSubSegment = z.infer<typeof sheerIDSubSegmentSchema>;

export const sheerIDOrganizationTypeSchema = z.union([
  z.literal("UNIVERSITY"),
  z.literal("POST_SECONDARY"),
  z.literal("MEMBERSHIP"),
  z.literal("MILITARY"),
  z.literal("FIRST_RESPONDER"),
  z.literal("MEDICAL"),
  z.literal("NON_PROFIT"),
  z.literal("CORPORATE"),
  z.literal("K12"),
  z.literal("AGE_ID"),
  z.literal("HIGH_SCHOOL"),
  z.literal("NONE"),
]);
export type SheerIDOrganizationType = z.infer<typeof sheerIDOrganizationTypeSchema>;

export const sheerIDErrorMessageSchema = z.union([
  z.custom<`No verification found with id '${string}'`>
    (val => /No verification found with id '(.+?)'/.test(val as string)),
  z.literal("Provided API token is empty or invalid"),
  z.custom<`Program with id '${string}' is not currently active`>
    (val => /Program with id '(.+?)' is not currently active/.test(val as string)),
  z.custom<`Verification with ID '${string}' not found`>
    (val => /Verification with ID '(.+?)' not found/.test(val as string)),
  z.literal("User has exceeded the maximum number of verifications"),
  z.literal("User has exceeded the maximum number of document reviews"),
  z.custom<`Program with ID '${string}' not found`>
    (val => /Program with ID '(.+?)' not found/.test(val as string)),
  z.custom<`No reward codes remaining for program with ID '${string}'`>
    (val => /No reward codes remaining for program with ID '(.+?)'/),
]);
export type SheerIDErrorMessage = z.infer<typeof sheerIDErrorMessageSchema>;

export const sheerIDRejectionReasonSchema = z.union([
  z.literal("CUSTOM_VALUE_OTHER"),
  z.literal("DOCUMENT_DATE_OTHER"),
  z.literal("DOCUMENT_EXPIRED"),
  z.literal("DOCUMENT_LIKELY_FRAUD"),
  z.literal("DOCUMENT_PASSWORD_PROTECTED"),
  z.literal("DOCUMENT_STATUS_OTHER"),
  z.literal("DOCUMENT_TOO_FUTURE"),
  z.literal("DOCUMENT_UNSUPPORTED"),
  z.literal("DOCUMENT_UNREADABLE"),
  z.literal("DOCUMENT_VALID_OTHER"),
  z.literal("INELIGIBLE_JOB_TITLE"),
  z.literal("INSUFFICIENT_CUSTOM_VALUE"),
  z.literal("INSUFFICIENT_DOCUMENT_DATE"),
  z.literal("INSUFFICIENT_STATUS"),
  z.literal("MISMATCH_BIRTHDATE"),
  z.literal("MISMATCH_CUSTOM_VALUE"),
  z.literal("MISMATCH_PERSON_FIRST_NAME"),
  z.literal("MISMATCH_PERSON_LAST_NAME"),
  z.literal("MISMATCH_ORGANIZATION_COUNTRY"),
  z.literal("MISMATCH_ORGANIZATION_NAME"),
  z.literal("MISMATCH_STATUS"),
  z.literal("MISSING_CUSTOM_VALUE"),
  z.literal("MISSING_DOCUMENT_DATE"),
  z.literal("MISSING_INFORMATION_BIRTHDATE"),
  z.literal("MISSING_INFORMATION_ORGANIZATION_NAME"),
  z.literal("MISSING_PERSON_FIRST_NAME"),
  z.literal("MISSING_PERSON_LAST_NAME"),
  z.literal("ORGANIZATION_NAME_OTHER"),
  z.literal("OUT_OF_RANGE_BIRTHDATE"),
  z.literal("PERSON_BIRTHDATE_OTHER"),
  z.literal("PERSON_FIRST_NAME_OTHER"),
  z.literal("PERSON_LAST_NAME_OTHER"),
  z.literal("DOCUMENT_HANDWRITTEN"),
  z.literal("DOCUMENT_OUTDATED"),
  z.literal("DOCUMENT_OUTDATED_FACULTY"),
  z.literal("INELIGIBLE_ORGANIZATION"),
  z.literal("INELIGIBLE_PERSON_HIGH_SCHOOL_STUDENT"),
  z.literal("MISSING_INFORMATION"),
  z.literal("MISSING_INFORMATION_AFFILIATION_US_ARMED_FORCES"),
  z.literal("MISSING_INFORMATION_PERSON_NAME"),
  z.literal("MISSING_INFORMATION_UNIVERSITY_ENROLLMENT"),
  z.literal("MISSING_OR_MISMATCH_JOB_TITLE"),
  z.literal("MISMATCH_COMPANY_NAME_OR_ADDRESS"),
  z.literal("MISMATCH_PERSON_NAME"),
  z.literal("MISMATCH_ORGANIZATION"),
  z.literal("OTHER_CONTACT_US"),
  z.literal("PAYSTUB_OUTDATED_LAST_30_DAYS"),
  z.literal("MISSING_EBT_CARD_NUMBER"),
  z.literal("MISMATCH_EBT_CARD_NUMBER"),
  z.literal("INSUFFICIENT_EBT_CARD_NUMBER"),
  z.literal("EBT_CARD_NUMBER_OTHER"),
]);
export type SheerIDRejectionReason = z.infer<typeof sheerIDRejectionReasonSchema>;

export const sheerIDApprovingVerificationTypeSchema = z.union([
  z.literal("authoritative"),
  z.literal("domainValidation"),
  z.literal("documentReview"),
  z.literal("emailLoop"),
  z.literal("honorSystem"),
  z.literal("other"),
  z.literal("predictive"),
  z.literal("smsLoop"),
  z.literal("sso"),
]);
export type SheerIDApprovingVerificationType = z.infer<typeof sheerIDApprovingVerificationTypeSchema>;

export const sheerIDMilitaryStatusSchema = z.union([
  z.literal("ACTIVE_DUTY"),
  z.literal("VETERAN"),
  z.literal("RESERVIST"),
  z.literal("MILITARY_RETIREE"),
  z.literal("MILITARY_FAMILY"),
  z.literal("GOLD_STAR_FAMILY"),
]);
export type SheerIDMilitaryStatus = z.infer<typeof sheerIDMilitaryStatusSchema>;

export const sheerIDFirstResponderStatusSchema = z.union([
  z.literal("POLICE"),
  z.literal("EMT"),
  z.literal("FIREFIGHTER"),
  z.literal("SEARCH_AND_RESCUE"),
]);
export type SheerIDFirstResponderStatus = z.infer<typeof sheerIDFirstResponderStatusSchema>;

export const sheerIDMedicalProfessionalStatusSchema = z.union([
  z.literal("NURSE"),
  z.literal("DOCTOR"),
  z.literal("DENTIST"),
  z.literal("PHARMACIST"),
  z.literal("OTHER_HEALTH_WORKER"),
]);
export type SheerIDMedicalProfessionalStatus = z.infer<typeof sheerIDMedicalProfessionalStatusSchema>;

export const sheerIDLicensedProfessionalStatusSchema = z.union([
  z.literal("LICENSED_COSMETOLOGIST"),
  z.literal("LICENSED_REAL_ESTATE_AGENT"),
  z.literal("VETERINARIAN"),
  z.literal("CHILD_CARE_WORKER"),
  z.literal("LIBRARIAN"),
  z.literal("INTERIOR_DESIGNER"),
  z.literal("ARCHITECT"),
  z.literal("GENERAL_CONTRACTOR"),
]);
export type SheerIDLicensedProfessionalStatus = z.infer<typeof sheerIDLicensedProfessionalStatusSchema>;

export const sheerIDMoverStatusSchema = z.union([
  z.literal("HOME_BUYER"),
  z.literal("OTHER_MOVER"),
]);
export type SheerIDMoverStatus = z.infer<typeof sheerIDMoverStatusSchema>;

export const sheerIDLowIncomeStatusSchema = z.union([
  z.literal("SNAP_BENEFITS"),
  z.literal("OTHER_GOVERNMENT_ASSISTANCE"),
]);
export type SheerIDLowIncomeStatus = z.infer<typeof sheerIDLowIncomeStatusSchema>;

export const sheerIDReviewTimeSchema = z.union([
  z.literal("2_MIN"),
  z.literal("20_MIN"),
  z.literal("2_HRS"),
  z.literal("24_HRS"),
  z.literal("2_DAY"),
  z.literal("3_DAY"),
]);
export type SheerIDReviewTime = z.infer<typeof sheerIDReviewTimeSchema>;

export const sheerIDEstimatedReviewTimeSchema = z.union([
  z.literal("A_FEW_MINUTES"),
  z.literal("A_HALF_HOUR"),
  z.literal("A_FEW_HOURS"),
  z.literal("A_FEW_DAYS"),
]);
export type SheerIDEstimatedReviewTime = z.infer<typeof sheerIDEstimatedReviewTimeSchema>;

export const sheerIDOfferTypeSchema = z.union([
  z.literal("staticCode"),
  z.literal("autogenCode"),
  z.literal("noCode"),
  z.literal("rewardPool"),
]);
export type SheerIDOfferType = z.infer<typeof sheerIDOfferTypeSchema>;

export const sheerIDRewardDisplaySchema = z.union([
  z.literal("TEXT"),
  z.literal("QR"),
  z.literal("ITF"),
  z.literal("UPC_A"),
  z.literal("CODE_128"),
  z.literal("PDF417"),
]);
export type SheerIDRewardDisplay = z.infer<typeof sheerIDRewardDisplaySchema>;

export const sheerIDReportStatusSchema = z.union([
  z.literal("PENDING"),
  z.literal("COMPLETE"),
  z.literal("ERROR"),
  z.literal("DELETED"),
]);
export type SheerIDReportStatus = z.infer<typeof sheerIDReportStatusSchema>;

export const sheerIDVerificationModeInclusionSchema = z.union([
  z.literal("ALL"),
  z.literal("LIVE"),
  z.literal("TEST"),
]);
export type SheerIDVerificationModeInclusion = z.infer<typeof sheerIDVerificationModeInclusionSchema>;

export const sheerIDRewardEligibilitySchema = z.union([
  z.literal("ELIGIBLE"),
  z.literal("INELIGIBLE"),
]);
export type SheerIDRewardEligibility = z.infer<typeof sheerIDRewardEligibilitySchema>;

export const sheerIDCommunitySchema = z.union([
  z.literal("Military"),
  z.literal("Education"),
  z.literal("Student"),
  z.literal("Teacher / Faculty"),
  z.literal("Employment"),
  z.literal("EMT"),
  z.literal("Firefighter"),
  z.literal("Police"),
  z.literal("First Responder"),
  z.literal("Member"),
  z.literal("Business"),
  z.literal("Non Profit"),
  z.literal("Nurse"),
  z.literal("Doctor"),
  z.literal("Dentist"),
  z.literal("Pharmacist"),
  z.literal("Other Healthcare"),
  z.literal("Medical"),
  z.literal("Age"),
  z.literal("Cosmetologist"),
  z.literal("Real Estate Agent"),
  z.literal("Identity"),
  z.literal("Veterinarian"),
  z.literal("Child Care Worker"),
  z.literal("Recent Mover"),
  z.literal("Low Income"),
  z.literal("Other"),
]);
export type SheerIDCommunity = z.infer<typeof sheerIDCommunitySchema>
