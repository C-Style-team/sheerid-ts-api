import { SheerID } from "./base";
import { SheerIDVerificationStatusDetailsResponse } from "./types";
import { SheerIDResponse, SheerIDSuccessResponse } from "./response-types";
import { SheerIDVerificationMethod } from "./enum-types";
import { SheerIDRequest } from "./request";

type Ids = {
    verificationId: string | undefined,
    programId: string | undefined,
    trackingId: string | undefined
};

export class SheerIDVerification extends SheerID {
    verificationId: string | undefined;
    programId: string | undefined;
    trackingId: string | undefined;

    constructor(apiToken: string, { verificationId, programId, trackingId }: Ids) {
        super(apiToken);
        this.verificationId = verificationId;
        this.programId = programId;
        this.trackingId = trackingId;
    }

    public status(): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/${this.verificationId}`)
            .set("method", "GET")
            .send();
    }

    public statusByTrackingId(): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/trackingId/${this.trackingId}`)
            .set("method", "GET")
            .send();
    }

    public statusesByTrackingId(): Promise<Array<SheerIDSuccessResponse>> {
        return new SheerIDRequest<Array<SheerIDSuccessResponse>>()
            .endpoint(`/verification/program/${this.programId}/trackingId/${this.trackingId}/history`)
            .set("method", "GET")
            .set("headers", { "Authorization": `Bearer ${this.apiToken}` })
            .send();
    }

    public details(): Promise<SheerIDVerificationStatusDetailsResponse> {
        return new SheerIDRequest<SheerIDVerificationStatusDetailsResponse>()
            .endpoint(`/verification/${this.verificationId}/details`)
            .set("method", "GET")
            .set("headers", { "Authorization": `Bearer ${this.apiToken}` })
            .send();
    }
}
