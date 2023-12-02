import { SheerID } from "./base"
import { SheerIDRequest } from "./request"
import { SheerIDReportResponse } from "./types/response";
import { SheerIDVerificationReportSchema } from "./types/info"

export class SheerIDReport extends SheerID {
    constructor(apiToken: string) {
        super(apiToken);
    }

    public getVerificationReport(schema: SheerIDVerificationReportSchema) {
        return new SheerIDRequest<SheerIDReportResponse>()
            .endpoint("/report/verification")
            .set("Method", "POST")
            .set("body", schema)
            .send();
    }

    public getReverificationReport(batchId: string) {
        return new SheerIDRequest<SheerIDReportResponse>()
            .endpoint(`/report/reverify/${batchId}`)
            .set("Method", "POST")
            .send();
    }
}

