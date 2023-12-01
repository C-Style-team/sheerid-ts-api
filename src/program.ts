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
            .send();
    }

    public getProgramPossibleSteps() {
        return new SheerIDRequest<SheerIDVerificationStep | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/possibleSteps`)
            .send();
    }

    /**
     * @deprecated This endpoint has been deprecated, please use `orgSearchUrl` in ProgramVerificationConfig instead.
     */
    public getOrganizaion(name: string, country?: string) {
        return new SheerIDRequest<SheerIDOrganization | SheerIDErrorResponse>()
            .endpoint(`/program/${this.programId}/organization`)
            .set("body", { name, country })
            .send();
    }
}
