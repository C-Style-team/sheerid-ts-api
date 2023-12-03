import { SheerID } from "./base";
import { SheerIDRequest } from "./request";
import { SheerIDInfoResponse } from "./types/response"

export class SheerIDInfo {
    public get() {
        return new SheerIDRequest<SheerIDInfoResponse>()
            .endpoint("/info")
            .set("method", "GET")
            .send();
    }
}
