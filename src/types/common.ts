import { z } from "zod";
import { schemas } from "src/g/index.js";

export const SheerIDOrganizationsDetailsSchema = schemas.OrganizationDetails;
export type SheerIDOrganizationDetails = z.infer<typeof SheerIDOrganizationsDetailsSchema>;

export const SheerIDBuildInfoSchema = schemas.BuildInformationResponseMessage;
export type SheerIDBuildInfo = z.infer<typeof SheerIDBuildInfoSchema>;

export type ExcludeSpecificProperties<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: string;
};
