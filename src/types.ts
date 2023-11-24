import {
    SheerIDSegment,
    SheerIDSubSegment,
    SheerIDErrorMessage,
    SheerIDOrganizationType,
    SheerIDVerificationMethod,
    SheerIDRejectionReason,
    SheerIDApprovingVerificationType,
} from "./enum-types";

import { SheerIDSuccessResponse } from "./response-types";

export type SheerID401Error = Readonly<{
    systemErrorMessage: SheerIDErrorMessage,
}>;

export type SheerID404Error = Readonly<{
    systemErrorMessage: SheerIDErrorMessage,
}>;

export type SheerIDOrganization = Readonly<{
    id: number,
    name: string,
    idExtended?: string,
    source?: string
}>;

// [GET Response] /rest/v2/organization/{verificationId}
export type SheerIDOrganizationDetails = Readonly<{
    id: number,
    name: string,
    type: SheerIDOrganizationType,
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string
}>;

// [POST Schema] /rest/v2/verification/program/{programId}/step/collectStudentPersonalInfo
export type SheerIDPersonInfo = Readonly<{
    firstName: string,
    lastName: string,
    email: `${string}@${string}.${string}`
    birthDate: string, //"1991-01-01",
    organization: SheerIDOrganization,
    deviceFingerprintHash?: string,
    ipAddressExtended?: string,
    externalUserId?: string,
    phoneNumber?: string,
    locale?: string,
    metadata: any[],
}>;

// [GET Response] /rest/v2/info
export type SheerIDBuildInfo = Readonly<{
    sheeridVersion: string,
    sheeridGitCommit: string,
    puppetGitCommit: string,
    buildTimestamp: string, // "2023-11-18T13:35:52Z"
}>;

// [GET Response] /rest/v2/verification/{verificationId}/details
// 200
export type SheerIDVerificationStatusDetailsResponse = Readonly<{
    programId: string,
    trackingId?: string | null,
    personId?: string,
    socialId: string,
    created: Date, // unix time
    updated: Date, // unix time
    lastResponse: SheerIDSuccessResponse & {
        consumerInfoState: string | null,
    },
    personInfo: SheerIDPersonInfo,
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
