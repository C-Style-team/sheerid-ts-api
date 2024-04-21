import { z } from "zod";
import { schemas } from "../g/index.js";

export const SheerIDVerificationMethodSchema = schemas.VerificationMethod;
export type SheerIDVerificationMethod = z.infer<typeof SheerIDVerificationMethodSchema>;

export const SheerIDConsumerInfoStateSchema = schemas.ConsumerInfoState;
export type SheerIDConsumerInfoState = z.infer<typeof SheerIDConsumerInfoStateSchema>;

export const SheerIDVerificationStepSchema = schemas.VerificationStep;
export type SheerIDVerificationStep = z.infer<typeof SheerIDVerificationStepSchema>;

export const SheerIDErrorIdSchema = schemas.ErrorId;
export type SheerIDErrorId = z.infer<typeof SheerIDErrorIdSchema>;

export const SheerIDSegmentSchema = schemas.Segment;
export type SheerIDSegment = z.infer<typeof SheerIDSegmentSchema>;

export const SheerIDSubSegmentSchema = schemas.SubSegment;
export type SheerIDSubSegment = z.infer<typeof SheerIDSubSegmentSchema>;

export const SheerIDOrganizationTypeSchema = schemas.OrganizationType;
export type SheerIDOrganizationType = z.infer<typeof SheerIDOrganizationTypeSchema>;

export const SheerIDErrorMessageSchema = schemas.ErrorMessages;
export type SheerIDErrorMessage = z.infer<typeof SheerIDErrorMessageSchema>;

export const SheerIDRejectionReasonSchema = schemas.RejectionReason;
export type SheerIDRejectionReason = z.infer<typeof SheerIDRejectionReasonSchema>;

export const SheerIDApprovingVerificationTypeSchema = schemas.ExternalVerificationType;
export type SheerIDApprovingVerificationType = z.infer<typeof SheerIDApprovingVerificationTypeSchema>;

export const SheerIDMilitaryStatusSchema = schemas.MilitaryStatus;
export type SheerIDMilitaryStatus = z.infer<typeof SheerIDMilitaryStatusSchema>;

export const SheerIDFirstResponderStatusSchema = schemas.FirstResponderStatus;
export type SheerIDFirstResponderStatus = z.infer<typeof SheerIDFirstResponderStatusSchema>;

export const SheerIDMedicalProfessionalStatusSchema = schemas.MedicalProfessionalStatus;
export type SheerIDMedicalProfessionalStatus = z.infer<typeof SheerIDMedicalProfessionalStatusSchema>;

export const SheerIDLicensedProfessionalStatusSchema = schemas.LicensedProfessionalStatus;
export type SheerIDLicensedProfessionalStatus = z.infer<typeof SheerIDLicensedProfessionalStatusSchema>;

export const SheerIDMoverStatusSchema = schemas.MoverStatus;
export type SheerIDMoverStatus = z.infer<typeof SheerIDMoverStatusSchema>;

export const SheerIDLowIncomeStatusSchema = schemas.LowIncomeStatus;
export type SheerIDLowIncomeStatus = z.infer<typeof SheerIDLowIncomeStatusSchema>;

export const SheerIDReviewTimeSchema = schemas.ReviewTime;
export type SheerIDReviewTime = z.infer<typeof SheerIDReviewTimeSchema>;

export const SheerIDEstimatedReviewTimeSchema = schemas.EstimatedReviewTime;
export type SheerIDEstimatedReviewTime = z.infer<typeof SheerIDEstimatedReviewTimeSchema>;

export const SheerIDOfferTypeSchema = schemas.OfferType;
export type SheerIDOfferType = z.infer<typeof SheerIDOfferTypeSchema>;

export const SheerIDRewardDisplaySchema = schemas.ProgramVerificationConfig.shape.rewardDisplay;
export type SheerIDRewardDisplay = z.infer<typeof SheerIDRewardDisplaySchema>;

export const SheerIDReportStatusSchema = schemas.ReportStatus;
export type SheerIDReportStatus = z.infer<typeof SheerIDReportStatusSchema>;

export const SheerIDVerificationModeInclusionSchema = schemas.VerificationModeInclusion;
export type SheerIDVerificationModeInclusion = z.infer<typeof SheerIDVerificationModeInclusionSchema>;

export const SheerIDRewardEligibilitySchema = schemas.RewardEligibility;
export type SheerIDRewardEligibility = z.infer<typeof SheerIDRewardEligibilitySchema>;

export const SheerIDCommunitySchema = schemas.Community;
export type SheerIDCommunity = z.infer<typeof SheerIDCommunitySchema>
