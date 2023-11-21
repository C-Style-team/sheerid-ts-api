import {
    SheerIDConsumerInfoState,
    SheerIDVerificationStep,
    SheerIDErrorId,
    SheerIDSegment,
    SheerIDSubSegment,
    SheerIDMilitaryStatus,
    SheerIDFirstResponderStatus,
    SheerIDMedicalProfessionalStatus,
    SheerIDRejectionReason,
    SheerIDReviewTime,
    SheerIDEstimatedReviewTime,
} from "./enum-types";

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
