export type SheerIDCurrentStep = "success" | "error";
export type SheerIDSegment = "student";
export type SheerIDVerificationMethod = "INSTANT";

export type SheerID401Error = Readonly<{
    systemErrorMessage: "Provided API token is empty or invalid",
}>;

export type SheerID404Error = Readonly<{
    systemErrorMessage: "No verification found with id '`${string}`'",
}>;

export type SheerIDOrganization = Readonly<{
    id: number,
    name: string,
}>;

export type SheerIDPersonInfo = Readonly<{
    firstName: string,
    lastName: string,
    email: "`${string}`@`${string}`.`{$string}`",
    birthDate: "1991-01-01",
    metadata: {
        my: "stuff" // ?
    },
    organization: SheerIDOrganization,
}>;

// /rest/v2/verification/{verificationId}
// /rest/v2/verification/program/{programId}/trackingId/{trackingId}

export type SheerIDVerificationStatus = Readonly<{
    verificationId: string,
    currentStep: SheerIDCurrentStep,
    errorIds: any[], // なんだっけ
    segment: SheerIDSegment,
    subSegment: SheerIDSegment | null,
    locale: string, // locale (en-US, ja-JP みたいな)のらいぶらりってある？
    country: string,
    rewardCode: string,
    redirectUrl: URL | null,
    rewardData: {
        rewardCode: string,
    }
}>;

// /rest/v2/verification/{verificationId}/details
export type SheerIDVerificationStatusDetails = Readonly<{
    programId: string,
    trackingId: string | null,
    personId: string,
    socialId: string,
    created: Date, // unix time
    updated: Date, // unix time
    lastResponse: {

    },
    personInfo: SheerIDPersonInfo,
    docUploadRejectionCount: number,
    docUploadRejectionReasons: any[],
    verificationMethod: SheerIDVerificationMethod,
    confirmedSegments: {
        segment: SheerIDSegment,
        subSegment: SheerIDSegment | null,
        organization: SheerIDOrganization & {
            idExtended: string,
            source: string
        },
        active: boolean,
        startDate: Date,
        endDate: Date,
    }
}>;
