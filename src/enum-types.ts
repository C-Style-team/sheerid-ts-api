export type SheerIDCurrentStep =
    "success" |
    "error" |
    "pending" |
    "collectStudentPersonalInfo" |
    "collectActiveMilitaryPersonalInfo" |
    "collectInactiveMilitaryPersonalInfo" |
    "collectTeacherPersonalInfo" |
    "collectSeniorPersonalInfo" |
    "collectAgePersonalInfo" |
    "collectFirstResponderPersonalInfo" |
    "collectMedicalProfessionalPersonalInfo" |
    "collectEmployeePersonalInfo" |
    "collectLicensedProfessionalInfo" |
    "collectMoverPersonalInfo" |
    "collectLowIncomePersonalInfo" |
    "collectMilitaryStatus" |
    "collectMarketplaceToken" |
    "collectSocialSecurityNumber" |
    "collectIdentifier" |
    "completeAuthentication" |
    "docUpload" |
    "sso" |
    "emailLoop" |
    "smsLoop" |
    "consolation" |
    "override";

export type SheerIDErrorIds =
    "internalServerError" |
    "noProgram" |
    "invalidProgram" |
    "expiredProgram" |
    "inactiveProgram" |
    "expiredVerification" |
    "noVerification" |
    "noOrganization" |
    "invalidRequest" |
    "verificationLimitExceeded" |
    "apiRateLimitExceeded" |
    "docReviewLimitExceeded" |
    "noRemainingRewardCodes" |
    "unknownError" |
    "invalidApiToken" |
    "simulatedError" |
    "invalidDocUploadToken" |
    "notFound" |
    "unauthorizedAccountStatus" |
    "unauthorizedDomain" |
    "unauthorizedIpAddress" |
    "unauthorizedRequest" |
    "unauthorizedUser" |
    "reverificationDailyLimitExceeded" |
    "invalidVerificationToken" |
    "expiredVerificationToken" |
    "notApproved" |
    "maxSMSCodeLimitExceeded" |
    "fraudRulesReject" |
    "invalidStep" |
    "invalidOrganization" |
    "invalidFirstName" |
    "invalidLastName" |
    "invalidEmail" |
    "invalidPhoneNumber" |
    "invalidBirthDate" |
    "invalidAddress1" |
    "invalidCity" |
    "invalidState" |
    "invalidPostalCode" |
    "invalidMilitaryStatus" |
    "invalidFirstResponderStatus" |
    "invalidMedicalProfessionalStatus" |
    "invalidSocialSecurityNumber" |
    "invalidOverrideCode" |
    "underagePerson" |
    "outsideAgePerson" |
    "futureBirthDate" |
    "invalidDischargeDate" |
    "dischargeDateBeforeBirthDate" |
    "unsupportedDocMimeType" |
    "invalidFileSizeMax" |
    "invalidFileSizeEmpty" |
    "invalidNumberOfFiles" |
    "maxMetadataValuesExceeded" |
    "maxMetadataLengthExceeded" |
    "invalidSMSCode" |
    "expiredSMSCode" |
    "incorrectSMSCodeAttemptLimitExceeded" |
    "incorrectVerificationOverrideCodeAttemptLimitExceeded" |
    "invalidEmailLoopToken" |
    "expiredEmailLoopToken";

export type SheerIDSegment =
    "student" |
    "teacher" |
    "military" |
    "senior" |
    "age" |
    "firstResponder" |
    "medical" |
    "employment" |
    "marketplace" |
    "member" |
    "licensedProfessional" |
    "recentMover" |
    "other";

export type SheerIDSubSegment =
    "activeDuty" |
    "veteran" |
    "retiree" |
    "reservist" |
    "militaryFamily" |
    "goldStarFamily" |
    "police" |
    "fireFighter" |
    "searchAndRescue" |
    "emt" |
    "employee" |
    "homeBuyer" |
    "otherMover" |
    "facultyHighSchool" |
    "facultyUniversity" |
    "facultyPostSecondary" |
    "facultyK12" |
    "fullAndPartTimeUniversity" |
    "collegeBound" |
    "highSchool" |
    "postSecondary" |
    "nurse" |
    "doctor" |
    "otherHealthWorker" |
    "dentist" |
    "pharmacist" |
    "generalContractor" |
    "snapBenefits" |
    "otherGovernmentAssistance" |
    "architect" |
    "interiorDesigner" |
    "librarian" |
    "childCareWorker" |
    "veterinarian" |
    "licensedRealEstateAgent" |
    "licensedCosmetologist";

export type SheerIDErrorMessage =
    `No verification found with id '${string}'` |
    "Provided API token is empty or invalid" |
    `Program with id '${string}' is not currently active` |
    `Verification with ID '${string}' not found` |
    "User has exceeded the maximum number of verifications" |
    "User has exceeded the maximum number of document reviews" |
    `Program with ID '${string}' not found` |
    `No reward codes remaining for program with ID '${string}'`
