import { SheerID } from "./base.js";
import { SheerIDRequest } from "./request.js";
import { SheerIDAddSchoolInfo } from "./types/info.js";
import {
  SheerIDErrorResponse,
  SheerIDSchoolSearchingResponse,
} from "./types/response.js";

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
      .method("POST")
      .set("body", info)
      .send();
  }

  public searchByDomain(schoolCountry: string, schoolDomain: string) {
    return new SheerIDRequest<
      SheerIDSchoolSearchingResponse | SheerIDErrorResponse
    >()
      .endpoint("/organization/addSchool/search/domain")
      .method("POST")
      .set("body", { programId: this.programId, schoolCountry, schoolDomain })
      .send();
  }

  public searchByName(schoolCountry: string, schoolName: string) {
    return new SheerIDRequest<
      SheerIDSchoolSearchingResponse | SheerIDErrorResponse
    >()
      .endpoint("/organization/addSchool/search/name")
      .method("POST")
      .set("body", { programId: this.programId, schoolCountry, schoolName })
      .send();
  }
}
