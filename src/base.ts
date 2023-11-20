export class SheerID {
    public apiToken: string;

    constructor(apiToken: string) {
        if (typeof apiToken !== "string") {
            throw new TypeError("apiToken must be string");
        }

        this.apiToken = apiToken;
    }
}
