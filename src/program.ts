import { SheerID } from "./base";
import { SheerIDRequest } from "./request";
import { SheerIDVerificationStep } from "./types/enum"
import { SheerIDOrganization } from "./types/person";

export class SheerIDProgram extends SheerID {
    programId: string;
    constructor(apiToken: string, programId: string) {
        super(apiToken);
        this.programId = programId;
    }

    // response をかくのがだるい
    public getProgramTheme() {
        return new SheerIDRequest<>()
            .endpoint(`/program/${this.programId}/theme`)
            .send();
    }

    public getProgramPossibleSteps() {
        return new SheerIDRequest<SheerIDVerificationStep>()
            .endpoint(`/program/${this.programId}/possibleSteps`)
            .send();
    }

    /**
     * @deprecated This endpoint has been deprecated, please use `orgSearchUrl` in ProgramVerificationConfig instead.
     */
    public getOrganizaion(name: string, country?: string) {
        return new SheerIDRequest<SheerIDOrganization>()
            .endpoint(`/program/${this.programId}/organization`)
            .set("body", { name, country })
            .send();
    }
}
