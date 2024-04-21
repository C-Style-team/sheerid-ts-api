import { z } from "zod";
import { schemas } from "../g/index.js";

export const sheeridVerificationMethodSchema = schemas.VerificationMethod;
export type SheerIDVerificationMethod = z.infer<typeof sheeridVerificationMethodSchema>;

export const sheeridConsumerInfoStateSchema = schemas.ConsumerInfoState;
export type SheerIDConsumerInfoState = z.infer<typeof sheeridConsumerInfoStateSchema>;

export const sheeridVerificationStepSchema = schemas.VerificationStep;
export type SheerIDVerificationStep = z.infer<typeof sheeridVerificationStepSchema>;

export const sheerIDErrorIdSchema = schemas.ErrorId;
export type SheerIDErrorId = z.infer<typeof sheerIDErrorIdSchema>;

export const sheerIDSegmentSchema = schemas.Segment;
export type SheerIDSegment = z.infer<typeof sheerIDSegmentSchema>;

export const sheerIDSubSegmentSchema = schemas.SubSegment;
export type SheerIDSubSegment = z.infer<typeof sheerIDSubSegmentSchema>;

export const sheerIDOrganizationTypeSchema = schemas.OrganizationType;
export type SheerIDOrganizationType = z.infer<typeof sheerIDOrganizationTypeSchema>;

export const sheerIDErrorMessageSchema = schemas.ErrorMessages;
export type SheerIDErrorMessage = z.infer<typeof sheerIDErrorMessageSchema>;

export const sheerIDRejectionReasonSchema = schemas.RejectionReason;
export type SheerIDRejectionReason = z.infer<typeof sheerIDRejectionReasonSchema>;

export const sheerIDApprovingVerificationTypeSchema = schemas.ExternalVerificationType;
export type SheerIDApprovingVerificationType = z.infer<typeof sheerIDApprovingVerificationTypeSchema>;

export const sheerIDMilitaryStatusSchema = schemas.MilitaryStatus;
export type SheerIDMilitaryStatus = z.infer<typeof sheerIDMilitaryStatusSchema>;

export const sheerIDFirstResponderStatusSchema = schemas.FirstResponderStatus;
export type SheerIDFirstResponderStatus = z.infer<typeof sheerIDFirstResponderStatusSchema>;

export const sheerIDMedicalProfessionalStatusSchema = schemas.MedicalProfessionalStatus;
export type SheerIDMedicalProfessionalStatus = z.infer<typeof sheerIDMedicalProfessionalStatusSchema>;

export const sheerIDLicensedProfessionalStatusSchema = schemas.LicensedProfessionalStatus;
export type SheerIDLicensedProfessionalStatus = z.infer<typeof sheerIDLicensedProfessionalStatusSchema>;

export const sheerIDMoverStatusSchema = schemas.MoverStatus;
export type SheerIDMoverStatus = z.infer<typeof sheerIDMoverStatusSchema>;

export const sheerIDLowIncomeStatusSchema = schemas.LowIncomeStatus;
export type SheerIDLowIncomeStatus = z.infer<typeof sheerIDLowIncomeStatusSchema>;

export const sheerIDReviewTimeSchema = schemas.ReviewTime;
export type SheerIDReviewTime = z.infer<typeof sheerIDReviewTimeSchema>;

export const sheerIDEstimatedReviewTimeSchema = schemas.EstimatedReviewTime;
export type SheerIDEstimatedReviewTime = z.infer<typeof sheerIDEstimatedReviewTimeSchema>;

export const sheerIDOfferTypeSchema = schemas.OfferType;
export type SheerIDOfferType = z.infer<typeof sheerIDOfferTypeSchema>;

export const sheerIDRewardDisplaySchema = schemas.ProgramVerificationConfig.shape.rewardDisplay;
export type SheerIDRewardDisplay = z.infer<typeof sheerIDRewardDisplaySchema>;

export const sheerIDReportStatusSchema = schemas.ReportStatus;
export type SheerIDReportStatus = z.infer<typeof sheerIDReportStatusSchema>;

export const sheerIDVerificationModeInclusionSchema = schemas.VerificationModeInclusion;
export type SheerIDVerificationModeInclusion = z.infer<typeof sheerIDVerificationModeInclusionSchema>;

export const sheerIDRewardEligibilitySchema = schemas.RewardEligibility;
export type SheerIDRewardEligibility = z.infer<typeof sheerIDRewardEligibilitySchema>;

export const sheerIDCommunitySchema = schemas.Community;
export type SheerIDCommunity = z.infer<typeof sheerIDCommunitySchema>
