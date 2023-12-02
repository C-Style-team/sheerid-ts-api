import {
    SheerIDCommunity,
    SheerIDFirstResponderStatus,
    SheerIDLicensedProfessionalStatus,
    SheerIDLowIncomeStatus,
    SheerIDMedicalProfessionalStatus,
    SheerIDMoverStatus,
    SheerIDRewardEligibility,
    SheerIDVerificationModeInclusion,
} from "./enum"

export type SheerIDOrganization = Readonly<{
    id: number,
    name: string,
    idExtended?: string,
    source?: string
}>;

export type SheerIDAllPersonInfo =
    | SheerIDStudentInfo
    | SheerIDTeacherInfo
    | SheerIDActiveMilitaryInfo
    | SheerIDInactiveMilitaryInfo
    | SheerIDSeniorInfo
    | SheerIDAgeInfo
    | SheerIDFirstResponderInfo
    | SheerIDMedicalProfessionalInfo
    | SheerIDEmployeeInfo
    | SheerIDMarketplaceSubject
    | SheerIDVerificationToken
    | SheerIDLicensedProfessionalInfo
    | SheerIDMoverInfo
    | SheerIDLowIncomeInfo;

export type SheerIDStudentInfo = {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string, // date
    organization: SheerIDOrganization,
    deviceFingerprintHash?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    phoneNumber?: string,
    locale?: string,
    metadata?: object,
}

export type SheerIDTeacherInfo = {
    firstName: string,
    lastName: string,
    email: string,
    organization: SheerIDOrganization,
    deviceFingerprintHash?: string,
    phoneNumber?: string,
    birthDate?: string, // date
    locale?: string,
    postalCode?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    metadata?: object,
}

export type SheerIDActiveMilitaryInfo = {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string, // date
    organization: SheerIDOrganization,
    deviceFingerprintHash?: string,
    phoneNumber?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    metadata?: object,
    country?: string
}

export type SheerIDInactiveMilitaryInfo = {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string, // date
    organization: SheerIDOrganization,
    dischargeDate: string, // date
    deviceFingerprintHash?: string,
    phoneNumber?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    metadata?: object,
    country?: string,
    socialSecurityNumber: number
}

export type SheerIDSeniorInfo = {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string, // date
    postalCode: string,
    deviceFingerprintHash?: string,
    phoneNumber?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    metadata?: object,
}

export type SheerIDAgeInfo = {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string, // date
    phoneNumber: string,
    postalCode?: string,
    city?: string,
    address1?: string,
    country?: string,
    deviceFingerprintHash?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    metadata?: object,
    marketConsent?: boolean,
}

export type SheerIDFirstResponderInfo = {
    firstName: string,
    lastName: string,
    email: string,
    organization: SheerIDOrganization,
    statuses: Array<SheerIDFirstResponderStatus>,
    deviceFingerprintHash?: string,
    birthDate?: string, // date
    status?: SheerIDFirstResponderStatus,
    phoneNumber?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    metadata?: object,
    postalCode?: string,
    stateCode?: string,
    country?: string
}

export type SheerIDMedicalProfessionalInfo = {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string, // date
    postalCode: string,
    organization: SheerIDOrganization,
    statuses: Array<SheerIDMedicalProfessionalStatus>,
    deviceFingerprintHash?: string,
    status?: SheerIDMedicalProfessionalStatus,
    country?: string
    phoneNumber?: string,
    memberId?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    metadata?: object,
}

export type SheerIDEmployeeInfo = {
    firstName: string,
    lastName: string,
    email: string,
    address1: string,
    city: string,
    state: string,
    postalCode: string,
    organization: SheerIDOrganization,
    phoneNumber?: string,
    locale?: string,
    country?: string,
    deviceFingerprintHash?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    metadata?: object,
}

export type SheerIDMarketplaceSubject = {
    email: string,
    deviceFingerprintHash?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    phoneNumber?: string,
    locale?: string,
    metadata?: object,
}

export type SheerIDVerificationToken = {
    verificationToken: string
}

export type SheerIDLicensedProfessionalInfo = {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string, // date
    postalCode: string,
    organization: SheerIDOrganization,
    statuses: Array<SheerIDLicensedProfessionalStatus>,
    deviceFingerprintHash?: string,
    country?: string
    phoneNumber?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId?: string,
    metadata?: object,
}

export type SheerIDMoverInfo = {
    firstName: string,
    lastName: string,
    email: string,
    address1: string,
    postalCode: string,
    statuses: Array<SheerIDMoverStatus>,
    birthDate?: string,
    deviceFingerprintHash?: string,
    country?: string
    phoneNumber?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    metadata?: object,
}

export type SheerIDLowIncomeInfo = {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string,
    country: string,
    address1: string,
    city: string,
    state: string,
    postalCode: string,
    statuses: SheerIDLowIncomeStatus,
    organization?: SheerIDOrganization,
    phoneNumber?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    deviceFingerprintHash?: string,
    ebtCardNumber?: string,
    metadata?: object,
}

export type SheerIDDriverLicenseInfo = {
    firstName: string,
    lastName: string,
    state: string,
    driverLicenseNumber: string,
    email: string,
    phoneNumber?: string,
    locale?: string,
    deviceFingerprintHash?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    metadata?: object
}

export type SheerIDGeneralIdentityInfo = {
    firstName: string,
    lastName: string,
    address1: string,
    city: string,
    state: string,
    postalCode: string,
    email: string,
    birthDate?: string,
    phoneNumber?: string,
    locale?: string,
    deviceFingerprintHash?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    metadata?: object,
}

export type SheerIDMemberInfo = {
    firstName: string,
    lastName: string,
    email: string,
    organization: SheerIDOrganization,
    deviceFingerprintHash?: string,
    birthDate?: string,
    memberId?: string,
    address1?: string,
    city?: string,
    state?: string,
    postalCode?: string,
    country?: string,
    phoneNumber?: string,
    locale?: string,
    ipAddress?: string, // deprecated
    ipAddressExtended?: string,
    externalUserId: string,
    metadata?: object,
}

export type SheerIDAddSchoolInfo = {
    firstName: string,
    lastName: string,
    email: string,
    programId: string,
    schoolName: string,
    schoolDomain: string,
    schoolCountry: string,
    trackingId?: string
}

export type SheerIDVerificationReportSchema = {
    format: "CSV",
    startDate: string,
    endDate: string,
    isPiiIncluded: boolean,
    piiReason: string,
    verificationModeInclusion: SheerIDVerificationModeInclusion,
    programIds: Array<string>,
    countryCodes: Array<string>,
    rewardEligibilities: Array<SheerIDRewardEligibility>,
    communities: Array<SheerIDCommunity>,
    metadataRowFilters: object,
    standardFields: Array<string>,
    personFields: Array<string>,
    metadataFields: Array<string>
}
