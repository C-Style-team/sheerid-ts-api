import { SheerID } from "./base.js";
import { SheerIDRequest } from "./request.js";
import { SheerIDVerificationStep } from "./types/enum.js";
import { SheerIDOrganization } from "./types/info.js";
import {
  SheerIDErrorResponse,
  SheerIDPossibleStepsResponse,
  SheerIDProgramThemeResponse,
} from "./types/response.js";

export class SheerIDProgram extends SheerID {
  programId: string;
  constructor(apiToken: string, programId: string) {
    super(apiToken);
    this.programId = programId;
  }

  // response をかくのがだるい
  public getProgramTheme() {
    return new SheerIDRequest<
      SheerIDProgramThemeResponse | SheerIDErrorResponse
    >()
      .endpoint(`/program/${this.programId}/theme`)
      .method("GET")
      .send();
  }

  public getProgramPossibleSteps() {
    return new SheerIDRequest<
      SheerIDPossibleStepsResponse | SheerIDErrorResponse
    >()
      .endpoint(`/program/${this.programId}/possibleSteps`)
      .method("GET")
      .send();
  }

  /**
   * @deprecated This endpoint has been deprecated, please use `orgSearchUrl` in ProgramVerificationConfig instead.
   */
  public getOrganizaion(name: string, country?: string) {
    return new SheerIDRequest<SheerIDOrganization | SheerIDErrorResponse>()
      .endpoint(`/program/${this.programId}/organization`)
      .method("GET")
      .set("body", { name: name, country: country })
      .send();
  }

  public establishVerificationLimit(quantity: number, days: number) {
    return new SheerIDRequest<{} | SheerIDErrorResponse>()
      .endpoint(`/program/${this.programId}/verificationLimit`)
      .method("POST")
      .set("body", { quantity, days })
      .send();
  }

  public deleteVefificationLimit() {
    return new SheerIDRequest<{} | SheerIDErrorResponse>()
      .endpoint(`/program/${this.programId}/verificationLimit`)
      .method("DELETE")
      .send();
  }

  public createVerificationWebhook(callbackUri: string) {
    return new SheerIDRequest<{} | SheerIDErrorResponse>()
      .endpoint(`/program/${this.programId}/webhook`)
      .method("POST")
      .set("body", { callbackUri })
      .send();
  }

  public deleteVerificationWebhook() {
    return new SheerIDRequest<{} | SheerIDErrorResponse>()
      .endpoint(`/program/${this.programId}/webhook`)
      .method("DELETE")
      .send();
  }

  public sendLink(phoneNumber: string, externalUserId?: string) {
    return new SheerIDRequest<{} | SheerIDErrorResponse>()
      .endpoint(`/program/${this.programId}/sendLink`)
      .method("POST")
      .set("body", { phoneNumber, externalUserId })
      .send();
  }
}
