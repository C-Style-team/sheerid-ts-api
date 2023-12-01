import { ExcludeSpecificProperties } from "./common";
import {
    SheerIDApprovingVerificationType,
    SheerIDConsumerInfoState,
    SheerIDErrorId,
    SheerIDEstimatedReviewTime,
    SheerIDFirstResponderStatus,
    SheerIDMilitaryStatus,
    SheerIDMedicalProfessionalStatus,
    SheerIDRejectionReason,
    SheerIDReviewTime,
    SheerIDSegment,
    SheerIDSubSegment,
    SheerIDVerificationMethod,
    SheerIDVerificationStep,
    SheerIDOrganizationType,
    SheerIDOfferType,
    SheerIDRewardDisplay,
} from "./enum";

import {
    SheerIDAllPersonInfo,
    SheerIDOrganization
} from "./info";

export type SheerIDResponse = Readonly<{
    segment?: SheerIDSegment,
    subsegment?: SheerIDSubSegment,
    locale?: string, // locale (en-US, ja-JP みたいな)のらいぶらりってある？
    country?: string,
    errorIds?: SheerIDErrorId[],
}>;

type SheerIDVerificationResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    submissionUrl: string,
}>;

export type SheerIDNewVerificationResponse = SheerIDVerificationResponse;

export type SheerIDNewAgeVerificationResponse = SheerIDVerificationResponse & Readonly<{
    minAge: number,
    maxAge: number,
}>;

export type SheerIDMilitaryVerificationResponse = SheerIDVerificationResponse & Readonly<{
    availableStatuses: SheerIDMilitaryStatus[],
}>;

export type SheerIDNewFirstResponderVerificationResponse = SheerIDVerificationResponse & Readonly<{
    availableStatuses: SheerIDFirstResponderStatus[],
}>;

export type SheerIDNewMedicalProfessionalVerificationResponse = SheerIDVerificationResponse & Readonly<{
    availableStatuses: SheerIDMedicalProfessionalStatus[],
}>;

export type SheerIDNewEmploymentVerificationResponse = SheerIDVerificationResponse & Readonly<{
    availableStatuses: "EMPLOYEE",
}>;

export type SheerIDNewMarketplaceVerificationResponse = SheerIDVerificationResponse & Readonly<{
    verificationToken: string,
}>;

export type SheerIDDocumentReviewResponse = SheerIDVerificationResponse & Readonly<{
    segment: SheerIDSegment,
    rejectionReasons?: SheerIDRejectionReason[],
    maxReviewTime?: SheerIDReviewTime,
    documents?: Object,
}>;

export type SheerIDSuccessResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    rewardCode: string, // deprecated
    currentStep: SheerIDVerificationStep,
    redirectUrl: URL | null, // こいつがやっかい
    rewardData?: {
        rewardCode?: string,
    }
    consumerInfoState?: SheerIDConsumerInfoState,
}>;

export type SheerIDPendingResponse = SheerIDResponse & Readonly<{
    statusUrl: string,
    awaitingStep: string, // deprecated
    maxReviewTime?: SheerIDReviewTime,
    estimatedReviewTime?: SheerIDEstimatedReviewTime,
    lastResponse: Object, // verificationresponse recursive
}>;

export type SheerIDErrorResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    errorIds: SheerIDErrorId[],
    systemErrorMessage: string,
    redirectUrl: string,
    consolactionRewardCode?: string,
}>;

export type SheerIDSsoResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    loginUrl: string,
    cancelUrl: string,
}>;

export type SheerIDSMSLoopResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    retryUrl: string,
    submissionUrl: string,
}>;

export type SheerIDCancellableResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    submissionUrl: string,
    cancelUrl: string,
}>;

export type SheerIDEmailLoopResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    submissionUrl: string,
    cancelUrl?: string,
    canResendEmailLoop: Boolean,
}>;


export type SheerIDConsolationResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    consolationRewardCode: string,
    redirectUrl: string,
    // ErrorIds がないので SheerIDResponse を継承すべきではない
}>;

export type SheerIDOverrideResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    submissionUrl: string,
    // ErrorIds がないので SheerIDResponse を継承すべきではない
}>;

export type SheerIDNewCollectIdentifierResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    submissionUrl: string,
    identifierField: Object,
}>;

export type SheerIDCompleteAuthenticationResponse = SheerIDResponse & Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    submissionUrl: string,
    cancelUrl?: string,
}>;

export type SheerIDAllResponse =
    | SheerIDSuccessResponse
    | SheerIDNewVerificationResponse
    | SheerIDNewAgeVerificationResponse
    // | SheerIDNewMilitaryResponse // (not implemented) 
    | SheerIDNewFirstResponderVerificationResponse
    | SheerIDNewMedicalProfessionalVerificationResponse
    | SheerIDNewEmploymentVerificationResponse
    | SheerIDNewMarketplaceVerificationResponse
    | SheerIDDocumentReviewResponse
    | SheerIDPendingResponse
    | SheerIDErrorResponse
    | SheerIDSsoResponse
    | SheerIDSMSLoopResponse
    | SheerIDCancellableResponse
    | SheerIDEmailLoopResponse
    | SheerIDConsolationResponse
    | SheerIDOverrideResponse
    | SheerIDNewCollectIdentifierResponse
    | SheerIDCompleteAuthenticationResponse;

// [GET Response] /rest/v2/verification/{verificationId}/details
// 200
export type SheerIDVerificationStatusDetailsResponse = Readonly<{
    programId: string,
    trackingId?: string | null,
    personId?: string,
    socialId: string,
    created: number, // unix time
    updated: number, // unix time
    lastResponse: SheerIDAllResponse,
    personInfo: SheerIDAllPersonInfo,
    docUploadRejectionCount: number,
    docUploadRejectionReasons: SheerIDRejectionReason[],
    verificationMethod: SheerIDVerificationMethod | null,
    confirmedSegments?: {
        segment: SheerIDSegment,
        subSegment: SheerIDSubSegment | null,
        organization: SheerIDOrganization,
        active: boolean,
        startDate: Date,
        endDate: Date,
    }
    approvingVerificationTypes?: SheerIDApprovingVerificationType,
}>;

export type SheerIDProgramThemeResponse = Readonly<{
    intl: { // Internationalization
        locale: string,
        messages: {
            companyName: string,
            lowRewardPool: string,
            optIn: "The message shown when the marketing opt-in checkbox is presented" | string,
            step: { // StepMessages
                personalInfo: { // PersonalInfoMessages
                    title: string,
                    subtitle: string,
                },
                docUpload: { // DocUploadMessages
                    title: string,
                    subtitle: string,
                },
                success: { // SuccessMessages
                    title: string,
                    subtitle: string,
                    redirectButtonText: string,
                    redirectUrl?: string, // deprecated
                    emailNotification?: string,
                } & ExcludeSpecificProperties<any, "title" | "subtitle" | "redirectButtonText" | "redirectUrl" | "emailNotification">,
                pending: { // PendingMessages
                    titleCountdown: string,
                    titleReview: string,
                    subtitleCountdown: string,
                    subtitleReview: string,
                } & ExcludeSpecificProperties<any, "titleCountdown" | "titleReview" | "subtitleCountdown" | "subtitleReview">,
                error: { // ErrorMessages
                    errorId: {
                        property_name?: { // ErrorIdMessages
                            title: string,
                            buttonText: string,
                        }
                    }
                },
                consolation?: { // ConsolationMessages
                    title?: string,
                    subtitle?: string,
                    verificationOnly?: string,
                } & ExcludeSpecificProperties<any, "title" | "subtitle" | "verificationOnly">,
                emailLoop?: {
                    title?: string,
                    subtitleWithoutEmail?: string,
                    skipEmail?: string,
                } & ExcludeSpecificProperties<any, "title" | "subtitleWithoutEmail" | "skipEmail">
            },
            errorId: {
                [property_name: string]: string,
            }
        },
        customCss: string,
        logoUrl: string,
        privacyPolicyUrl: string,
        isTestMode: boolean,
        config: SheerIDProgramVerificationConfig,
        smsLoopEnabled: boolean,
        docUploadEnabled: boolean,
        emailLoopEnabled: boolean,
        ssoEnabled: boolean,
        overrideEnabled: boolean,
        remaiingRewardCodes: number,
        openOrgSearchEnabled?: boolean,
        isSmsNotifierConfigured?: boolean,
        threatMetrixEnabled?: boolean,
        ipqsDeviceFingerprintEnabled?: boolean,
        strictMilitaryValidationEnabled: boolean,
    }
}>;

export type SheerIDProgramVerificationConfig = Readonly<{
    countries: Array<string>,
    locales: Array<string>,
    maxReviewTime: SheerIDReviewTime,
    estimatedReviewTime: SheerIDEstimatedReviewTime,
    marketConsent: { // marketconsent
        enabled: boolean,
        required: boolean,
        message: boolean,
    }
    customMetadata: { // custommetadata
        enabled: boolean,
        keys: Array<string>
    },
    customFaqLink: string,
    orgSearchUrl: string,
    orgTypes: SheerIDOrganizationType,
    excludedOrganizationIds: number,
    brandInfo: {
        faqUrl: string,
        emailAddress: string,
        phoneNumber: string,
    },
    offerType: SheerIDOfferType,
    orgRemoteSource?: "EMPLOYER",
    orgSearchCountryTags?: {
        [property_name: string]: Array<string>
    }
    rewardDisplay?: SheerIDRewardDisplay,
    segment?: SheerIDSegment,
    maxAge: number,
    minAge: number,
    onfidoReportNames: Array<string>,
    onfidoIncludedCountries: Array<string>,
}>;
