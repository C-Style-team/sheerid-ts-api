import { SheerIDRequest } from "./request.js";
import { SheerIDInfoResponse } from "./types/response.js";

export class SheerIDInfo {
  public get() {
    return new SheerIDRequest<SheerIDInfoResponse>()
      .endpoint("/info")
      .method("GET")
      .send();
  }
}
