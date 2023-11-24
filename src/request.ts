export class SheerIDRequest<T> {
    private m_baseUrl: string = "https://services.sheerid.com/rest/v2";
    private m_params: Map<string, any> = new Map();
    private m_endpoint: `/${string}` = "/info";

    constructor() {
        this.set("Content-Type", "application/json")
    }

    private canonicalizedParams(): object {
        let result: any = {};
        this.m_params.forEach((value, key) => {
            if (typeof value !== 'undefined') result[key] = value;
        })

        return result;
    }

    public set(key: string, value: any): this {
        if (typeof value !== 'undefined') {
            this.m_params.set(key, value);
        }
        return this;
    }

    public endpoint(endpoint: `/${string}`): this {
        this.m_endpoint = endpoint;
        return this;
    }

    public async send(): Promise<T> {
        const response = await fetch(this.m_baseUrl + this.m_endpoint, this.canonicalizedParams());
        return response.json();
    }
}
