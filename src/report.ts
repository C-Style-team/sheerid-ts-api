import { SheerID } from "./base.js";
import { SheerIDRequest } from "./request.js";
import {
  SheerIDErrorResponse,
  SheerIDReportResponse,
} from "./types/response.js";
import { SheerIDVerificationReportSchema } from "./types/info.js";

export class SheerIDReport extends SheerID {
  constructor(apiToken: string) {
    super(apiToken);
  }

  public getVerificationReport(schema: SheerIDVerificationReportSchema) {
    return new SheerIDRequest<SheerIDReportResponse | SheerIDErrorResponse>()
      .endpoint("/report/verification")
      .method("POST")
      .set("body", schema)
      .send();
  }

  public getReverificationReport(batchId: string) {
    return new SheerIDRequest<SheerIDReportResponse | SheerIDErrorResponse>()
      .endpoint(`/report/reverify/${batchId}`)
      .method("POST")
      .send();
  }

  public getStatus(reportId: string) {
    return new SheerIDRequest<SheerIDReportResponse | SheerIDErrorResponse>()
      .endpoint(`/report/${reportId}/status`)
      .method("GET")
      .send();
  }

  public download(reportId: string) {
    return new SheerIDRequest<{} | SheerIDErrorResponse>()
      .endpoint(`/report/${reportId}`)
      .method("GET")
      .send();
  }

  public getList(programIds?: Array<string>) {
    return new SheerIDRequest<SheerIDErrorResponse>()
      .endpoint(`/report/fields`)
      .method("GET")
      .send();
  }
}

export type SheerIDListReportingField = {
  columnHeading: string;
  name?: string;
  description?: string;
};

export type SheerIDListReportingFieldsResponse = {
  scope: "STANDARD" | "PII" | "METADATA";
  fields: Array<SheerIDListReportingField>;
};
