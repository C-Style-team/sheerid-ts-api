import {
    SheerIDErrorMessage,
    SheerIDOrganizationType,
    SheerIDVerificationMethod,
    SheerIDRejectionReason,
} from "./enum-types";

import { SheerIDSuccessResponse } from "./response-types";

export type SheerID401Error = Readonly<{
    systemErrorMessage: SheerIDErrorMessage,
}>;

export type SheerID404Error = Readonly<{
    systemErrorMessage: SheerIDErrorMessage,
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

// [GET Response] /rest/v2/info
export type SheerIDBuildInfo = Readonly<{
    sheeridVersion: string,
    sheeridGitCommit: string,
    puppetGitCommit: string,
    buildTimestamp: string, // "2023-11-18T13:35:52Z"
}>;
