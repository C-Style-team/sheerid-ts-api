import { SheerID } from "./base"
import { SheerIDRequest } from "./request"
import { SheerIDConversionInfo } from "./types/info"
import { SheerIDConversionResponse } from "./types/response"

export class SheerIDConversion {
    private verificationId: string | undefined;
    private accountId: string | undefined;
    private trackingId: string | undefined;

    constructor(
        verificationId: string | undefined,
        accountId: string | undefined,
        trackingId: string | undefined
    ) {
        this.verificationId = verificationId;
        this.accountId = accountId;
        this.trackingId = trackingId;
    }

    public storeConversionInfo(schema: SheerIDConversionInfo) {
        return new SheerIDRequest<SheerIDConversionResponse>()
            .endpoint(`/conversion/verification/${this.verificationId}`)
            .method("POST")
            .set("body", schema)
            .send();
    }

    public storeConversionInfoByTrackingId(schema: SheerIDConversionInfo) {
        return new SheerIDRequest<SheerIDConversionResponse>()
            .endpoint(`/conversion/account/{$this.accountId}/trackingId/{$this.trackingId}`)
            .method("POST")
            .set("body", schema)
            .send();

    }
}
