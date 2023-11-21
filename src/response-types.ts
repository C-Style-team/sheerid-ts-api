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

type SheerIDResponse = Readonly<{
    verificationId: string,
    currentStep: SheerIDVerificationStep,
    submissionUrl: string,
    errorIds?: SheerIDErrorId[],
    segment?: SheerIDSegment,
    subsegment?: SheerIDSubSegment,
    locale?: string, // locale (en-US, ja-JP みたいな)のらいぶらりってある？
    country?: string,
}>;

export type SheerIDSuccessResponse = Readonly<{
    verificationId: string,
    rewardCode: string, // deprecated
    currentStep: SheerIDVerificationStep,
    redirectUrl: URL | null, // こいつがやっかい
    rewardData?: {
        rewardCode?: string,
    }
    errorIds?: SheerIDErrorId[],
    segment?: SheerIDSegment,
    subSegment?: SheerIDSubSegment | null,
    locale?: string,
    country?: string,
    consumerInfoState?: SheerIDConsumerInfoState,
}>;

export type SheerIDNewVerificationResponse = SheerIDResponse;

export type SheerIDNewAgeVerificationResponse = SheerIDResponse & Readonly<{
    minAge: number,
    maxAge: number,
}>;

export type SheerIDMilitaryVerificationResponse = SheerIDResponse & Readonly<{
    availableStatuses: SheerIDMilitaryStatus[],
}>;

export type SheerIDNewFirstResponderVerificationResponse = SheerIDResponse & Readonly<{
    availableStatuses: SheerIDFirstResponderStatus[],
}>;

export type SheerIDNewMedicalProfessionalVerificationResponse = SheerIDResponse & Readonly<{
    availableStatuses: SheerIDMedicalProfessionalStatus[],
}>;

export type SheerIDNewEmploymentVerificationResponse = SheerIDResponse & Readonly<{
    availableStatuses: "EMPLOYEE",
}>;

export type SheerIDNewMarketplaceVerificationResponse = SheerIDResponse & Readonly<{
    verificationToken: string,
}>;

export type SheerIDDocumentReviewResponse = SheerIDResponse & Readonly<{
    segment: SheerIDSegment,
    rejectionReasons?: SheerIDRejectionReason[],
    maxReviewTime?: SheerIDReviewTime,
    documents?: Object,
}>;

export type SheerIDPendingResponse = Readonly<{
    statusUrl: string,
    awaitingStep: string, // deprecated
    maxReviewTime: SheerIDReviewTime,
    estimatedReviewTime: SheerIDEstimatedReviewTime,
}>;
