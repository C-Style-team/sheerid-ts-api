export type SheerIDVerificationMethod =
    | "INSTANT"
    | "MANUAL";

export type SheerIDConsumerInfoState =
    | "consumerNotFound"
    | "consumerFoundNewFieldsAvailable"
    | "consumerFoundNotActionable";

export type SheerIDVerificationStep =
    | "success"
    | "error"
    | "pending"
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
    | "completeAuthentication"
    | "docUpload"
    | "sso"
    | "emailLoop"
    | "smsLoop"
    | "consolation"
    | "override";

export type SheerIDErrorId =
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

export type SheerIDSegment =
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

export type SheerIDSubSegment =
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

export type SheerIDOrganizationType =
    | "UNIVERSITY"
    | "POST_SECONDARY"
    | "MEMBERSHIP"
    | "MILITARY"
    | "FIRST_RESPONDER"
    | "MEDICAL"
    | "NON_PROFIT"
    | "CORPORATE"
    | "K12"
    | "AGE_ID"
    | "HIGH_SCHOOL"
    | "NONE";

export type SheerIDErrorMessage =
    | `No verification found with id '${string}'`
    | "Provided API token is empty or invalid"
    | `Program with id '${string}' is not currently active`
    | `Verification with ID '${string}' not found`
    | "User has exceeded the maximum number of verifications"
    | "User has exceeded the maximum number of document reviews"
    | `Program with ID '${string}' not found`
    | `No reward codes remaining for program with ID '${string}'`;

export type SheerIDRejectionReason =
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

export type SheerIDApprovingVerificationType =
    | "authoritative"
    | "domainValidation"
    | "documentReview"
    | "emailLoop"
    | "honorSystem"
    | "other"
    | "predictive"
    | "smsLoop"
    | "sso";

export type SheerIDMilitaryStatus =
    | "ACTIVE_DUTY"
    | "VETERAN"
    | "RESERVIST"
    | "MILITARY_RETIREE"
    | "MILITARY_FAMILY"
    | "GOLD_STAR_FAMILY";

export type SheerIDFirstResponderStatus =
    | "POLICE"
    | "EMT"
    | "FIREFIGHTER"
    | "SEARCH_AND_RESCUE";

export type SheerIDMedicalProfessionalStatus =
    | "NURSE"
    | "DOCTOR"
    | "DENTIST"
    | "PHARMACIST"
    | "OTHER_HEALTH_WORKER";

export type SheerIDLicensedProfessionalStatus =
    | "LICENSED_COSMETOLOGIST"
    | "LICENSED_REAL_ESTATE_AGENT"
    | "VETERINARIAN"
    | "CHILD_CARE_WORKER"
    | "LIBRARIAN"
    | "INTERIOR_DESIGNER"
    | "ARCHITECT"
    | "GENERAL_CONTRACTOR";

export type SheerIDMoverStatus =
    | "HOME_BUYER"
    | "OTHER_MOVER";

export type SheerIDLowIncomeStatus =
    | "SNAP_BENEFITS"
    | "OTHER_GOVERNMENT_ASSISTANCE";

export type SheerIDReviewTime =
    | "2_MIN"
    | "20_MIN"
    | "2_HRS"
    | "24_HRS"
    | "2_DAY"
    | "3_DAY";

export type SheerIDEstimatedReviewTime =
    | "A_FEW_MINUTES"
    | "A_HALF_HOUR"
    | "A_FEW_HOURS"
    | "A_FEW_DAYS";

export type SheerIDOfferType =
    | "staticCode"
    | "autogenCode"
    | "noCode"
    | "rewardPool";

export type SheerIDRewardDisplay =
    | "TEXT"
    | "QR"
    | "ITF"
    | "UPC_A"
    | "CODE_128"
    | "PDF417";

