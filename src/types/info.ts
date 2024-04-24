import { schemas as SheerIDSchemas } from "src/g/index.js";
import { z } from "zod";

export const SheerIDOrganizationSchema = SheerIDSchemas.Organization;
export type SheerIDOrganization = z.infer<typeof SheerIDOrganizationSchema>;

export const SheerIDStudentInfoSchema = SheerIDSchemas.Student;
export type SheerIDStudentInfo = z.infer<typeof SheerIDStudentInfoSchema>;

export const SheerIDTeacherInfoSchema = SheerIDSchemas.Teacher;
export type SheerIDTeacherInfo = z.infer<typeof SheerIDTeacherInfoSchema>;

export const SheerIDActiveMilitaryInfoSchema = SheerIDSchemas.ActiveMilitary;
export type SheerIDActiveMilitaryInfo = z.infer<typeof SheerIDActiveMilitaryInfoSchema>;

export const SheerIDInActiveMilitaryInfoSchema = SheerIDSchemas.InactiveMilitary;
export type SheerIDInActiveMilitaryInfo = z.infer<typeof SheerIDInActiveMilitaryInfoSchema>;

export const SheerIDSeniorInfoSchema = SheerIDSchemas.Senior;
export type SheerIDSeniorInfo = z.infer<typeof SheerIDSeniorInfoSchema>;

export const SheerIDAgeInfoSchema = SheerIDSchemas.Age;
export type SheerIDAgeInfo = z.infer<typeof SheerIDAgeInfoSchema>;

export const SheerIDFirstResponderInfoSchema = SheerIDSchemas.FirstResponder;
export type SheerIDFirstResponderInfo = z.infer<typeof SheerIDFirstResponderInfoSchema>;

export const SheerIDMedicalProfessionalInfoSchema = SheerIDSchemas.MedicalProfessional;
export type SheerIDMedicalProfessionalInfo = z.infer<typeof SheerIDMedicalProfessionalInfoSchema>;

export const SheerIDEmployeeInfoSchema = SheerIDSchemas.Employee;
export type SheerIDEmployeeInfo = z.infer<typeof SheerIDEmployeeInfoSchema>;

export const SheerIDMarketplaceSubjectSchema = SheerIDSchemas.MarketplaceSubject;
export type SheerIDMarketplaceSubject = z.infer<typeof SheerIDMarketplaceSubjectSchema>;

export const SheerIDVerificationTokenSchema = SheerIDSchemas.VerificationToken;
export type SheerIDVerificationToken = z.infer<typeof SheerIDVerificationTokenSchema>;

export const SheerIDLicensedProfessionalInfoSchema = SheerIDSchemas.LicensedProfessional;
export type SheerIDLicensedProfessionalInfo = z.infer<typeof SheerIDLicensedProfessionalInfoSchema>;

export const SheerIDMoverInfoSchema = SheerIDSchemas.Mover;
export type SheerIDMoverInfo = z.infer<typeof SheerIDMoverInfoSchema>;

export const SheerIDLowIncomeInfoSchema = SheerIDSchemas.LowIncome;
export type SheerIDLowIncomeInfo = z.infer<typeof SheerIDLowIncomeInfoSchema>;

export const SheerIDDriverLicenseInfoSchema = SheerIDSchemas.DriverLicense;
export type SheerIDDriverLicenseInfo = z.infer<typeof SheerIDDriverLicenseInfoSchema>;

export const SheerIDGeneralIdentityInfoSchema = SheerIDSchemas.GeneralIdentity;
export type SheerIDGeneralIdentityInfo = z.infer<typeof SheerIDGeneralIdentityInfoSchema>;

export const SheerIDMemberInfoSchema = SheerIDSchemas.Member;
export type SheerIDMemberInfo = z.infer<typeof SheerIDMemberInfoSchema>;

export const SheerIDAddSchoolInfoSchema = SheerIDSchemas.AddSchoolRequest
export type SheerIDAddSchoolInfo = z.infer<typeof SheerIDAddSchoolInfoSchema>;

export const SheerIDVerificationReportSchema = SheerIDSchemas.VerificationReportRequest;
export type SheerIDVerificationReportSchema = z.infer<typeof SheerIDVerificationReportSchema>;

export const SheerIDConversionInfoSchema = SheerIDSchemas.ConversionRequest;
export type SheerIDConversionInfo = z.infer<typeof SheerIDConversionInfoSchema>;

export const SheerIDAllPersonInfoSchema = z.union([
  SheerIDStudentInfoSchema,
  SheerIDTeacherInfoSchema,
  SheerIDActiveMilitaryInfoSchema,
  SheerIDInActiveMilitaryInfoSchema,
  SheerIDSeniorInfoSchema,
  SheerIDAgeInfoSchema,
  SheerIDFirstResponderInfoSchema,
  SheerIDMedicalProfessionalInfoSchema,
  SheerIDEmployeeInfoSchema,
  SheerIDMarketplaceSubjectSchema,
  SheerIDVerificationTokenSchema,
  SheerIDLicensedProfessionalInfoSchema,
  SheerIDMoverInfoSchema,
  SheerIDLowIncomeInfoSchema,
  SheerIDDriverLicenseInfoSchema,
  SheerIDGeneralIdentityInfoSchema,
  SheerIDMemberInfoSchema,
  SheerIDAddSchoolInfoSchema,
  SheerIDVerificationReportSchema,
  SheerIDConversionInfoSchema
])
export type SheerIDAllPersonInfo = z.infer<typeof SheerIDAllPersonInfoSchema>;;
