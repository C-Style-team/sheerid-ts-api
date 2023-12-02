import { SheerID } from "./base";
import { SheerIDRequest } from "./request";
import { SheerIDVerificationStep } from "./types/enum"
import { SheerIDOrganization } from "./types/info";
import { SheerIDErrorResponse, SheerIDProgramThemeResponse } from "./types/response";

export class SheerIDProgram extends SheerID {
    programId: string;
    constructor(apiToken: string, programId: string) {
        super(apiToken);
        this.programId = programId;
    }

    // response をかくのがだるい
    public getProgramTheme() {
        return new SheerIDRequest<SheerIDProgramThemeResponse | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/theme`)
            .set("method", "GET")
            .send();
    }

    public getProgramPossibleSteps() {
        return new SheerIDRequest<SheerIDVerificationStep | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/possibleSteps`)
            .set("method", "GET")
            .send();
    }

    /**
     * @deprecated This endpoint has been deprecated, please use `orgSearchUrl` in ProgramVerificationConfig instead.
     */
    public getOrganizaion(name: string, country?: string) {
        return new SheerIDRequest<SheerIDOrganization | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/organization`)
            .set("method", "GET")
            .set("body", { name, country })
            .send();
    }

    public establishVerificationLimit(quantity: number, days: number) {
        return new SheerIDRequest<{} | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/verificationLimit`)
            .set("method", "POST")
            .set("body", { quantity, days })
            .send();
    }

    public deleteVefificationLimit() {
        return new SheerIDRequest<{} | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/verificationLimit`)
            .set("method", "DELETE")
            .send();
    }

    public createVerificationWebhook(callbackUri: string) {
        return new SheerIDRequest<{} | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/webhook`)
            .set("method", "POST")
            .set("body", { callbackUri })
            .send();
    }

    public deleteVerificationWebhook() {
        return new SheerIDRequest<{} | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/webhook`)
            .set("method", "DELETE")
            .send();
    }

    public sendLink(phoneNumber: string, externalUserId?: string) {
        return new SheerIDRequest<{} | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/sendLink`)
            .set("method", "POST")
            .set("body", { phoneNumber, externalUserId })
            .send();
    }
}
