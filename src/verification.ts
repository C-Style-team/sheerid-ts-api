import { SheerID } from "./base";
import { SheerIDVerificationStatusDetailsResponse } from "./types";
import { SheerIDResponse, SheerIDSuccessResponse } from "./response-types";
import { SheerIDVerificationMethod } from "./enum-types";
import { SheerIDRequest } from "./request";

export class SheerIDVerification extends SheerID {
    verificationId: string;

    constructor(apiToken: string, verificationId: string) {
        super(apiToken);
        this.verificationId = verificationId;
    }

    public status(): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/${this.verificationId}`)
            .send();
    }

    public details(): Promise<SheerIDVerificationStatusDetailsResponse> {
        return new SheerIDRequest<SheerIDVerificationStatusDetailsResponse>()
            .endpoint(`/verification/${this.verificationId}/details`)
            .set("Authorization", `Bearer ${this.apiToken}`)
            .send();
    }
}
