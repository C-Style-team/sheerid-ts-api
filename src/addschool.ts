import { SheerID } from "./base";
import { SheerIDRequest } from "./request";
import { SheerIDAddSchoolInfo } from "./types/info";
import { SheerIDErrorResponse, SheerIDSchoolSearchingResponse } from "./types/response";

export class SheerIDSchool extends SheerID {
    programId: string;
    trackingId: string;
    constructor(apiToken: string, programId: string, trackingId: string) {
        super(apiToken);
        this.programId = programId;
        this.trackingId = trackingId;
    }

    public add(info: SheerIDAddSchoolInfo) {
        return new SheerIDRequest<{} | SheerIDErrorResponse>()
            .endpoint("/organization/addSchool")
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    public searchByDomain(schoolCountry: string, schoolDomain: string) {
        return new SheerIDRequest<SheerIDSchoolSearchingResponse | SheerIDErrorResponse>()
            .endpoint("/organization/addSchool/search/domain")
            .set("method", "POST")
            .set("body", { "programId": this.programId, schoolCountry, schoolDomain })
            .send();
    }

    public searchByName(schoolCountry: string, schoolName: string) {
        return new SheerIDRequest<SheerIDSchoolSearchingResponse | SheerIDErrorResponse>()
            .endpoint("/organization/addSchool/search/name")
            .set("method", "POST")
            .set("body", { "programId": this.programId, schoolCountry, schoolName })
            .send();
    }
}
