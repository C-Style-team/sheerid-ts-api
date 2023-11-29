import { SheerID } from "./base";

import { SheerIDSuccessResponse, SheerIDVerificationStatusDetailsResponse } from "./types/response";

import { SheerIDMilitaryStatus, SheerIDVerificationMethod } from "./types/enum";

import { SheerIDRequest } from "./request";

import {
    SheerIDActiveMilitaryInfo,
    SheerIDAgeInfo,
    SheerIDAllPersonInfo,
    SheerIDDriverLicenseInfo,
    SheerIDEmployeeInfo,
    SheerIDFirstResponderInfo,
    SheerIDGeneralIdentityInfo,
    SheerIDInactiveMilitaryInfo,
    SheerIDLicensedProfessionalInfo,
    SheerIDLowIncomeInfo,
    SheerIDMarketplaceSubject,
    SheerIDMedicalProfessionalInfo,
    SheerIDMemberInfo,
    SheerIDMoverInfo,
    SheerIDSeniorInfo,
    SheerIDStudentInfo,
    SheerIDTeacherInfo,
    SheerIDVerificationToken
} from "./types/info";

import { SheerIDOrganizationDetails } from "./types/common";

type Ids = {
    verificationId: string | undefined,
    programId: string | undefined,
    trackingId: string | undefined
};

export class SheerIDVerification extends SheerID {
    verificationId: string | undefined;
    programId: string | undefined;
    trackingId: string | undefined;

    constructor(apiToken: string, { verificationId, programId, trackingId }: Ids) {
        super(apiToken);
        this.verificationId = verificationId;
        this.programId = programId;
        this.trackingId = trackingId;
    }

    // Submit student data against program
    public submitStudentDataByProgramId(info: SheerIDStudentInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectStudentPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit active military data against program
    public submitActiveMilitaryDataByProgramId(info: SheerIDActiveMilitaryInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectActiveMilitaryPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit inactive military data against program
    public submitInactiveMilitaryDataByProgramId(info: SheerIDInactiveMilitaryInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectInactiveMilitaryPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit teacher data against program
    public submitTeacherDataByProgramId(info: SheerIDTeacherInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectTeacherPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit senior data against program
    public submitSeniorDataByProgramId(info: SheerIDSeniorInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectSeniorPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit age data against program
    public submitAgeDataByProgramId(info: SheerIDAgeInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectAgePersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit first responder data against program
    public submitFirstResponderDataByProgramId(info: SheerIDFirstResponderInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectFirstResponderPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit licensed professional data against program
    public submitLicensedProfessionalDataByProgramId(info: SheerIDLicensedProfessionalInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectLicensedProfessionalPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit mover data against program
    public submitMoverDataByProgramId(info: SheerIDMoverInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectMoverPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit medical professional data against program
    public submitMedicalProfessionalDataByProgramId(info: SheerIDMedicalProfessionalInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectMedicalProfessionalPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit driver license data against program
    public submitDriverLicenseDataByProgramId(info: SheerIDDriverLicenseInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectDriverLicensePersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit general identity data against program
    public submitGeneralIdentityDataByProgramId(info: SheerIDGeneralIdentityInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectGeneralIdentityPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit employee data against program
    public submitEmployeeDataByProgramId(info: SheerIDEmployeeInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectEmployeePersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit member data against program
    public submitMemberDataByProgramId(info: SheerIDMemberInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectMemberPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit low income personal data against program
    public submitLowIncomeDataByProgramId(info: SheerIDLowIncomeInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectLowIncomePersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Get verification status
    public getStatus(): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/${this.verificationId}`)
            .set("method", "GET")
            .send();
    }

    // Get verification status by Tracking ID
    public getStatusByTrackingId(): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/trackingId/${this.trackingId}`)
            .set("method", "GET")
            .send();
    }

    // Get the 10 most recent verification statuses by Tracking ID
    public getStatusesByTrackingId(): Promise<Array<SheerIDSuccessResponse>> {
        return new SheerIDRequest<Array<SheerIDSuccessResponse>>()
            .endpoint(`/verification/program/${this.programId}/trackingId/${this.trackingId}/history`)
            .set("method", "GET")
            .set("headers", { "Authorization": `Bearer ${this.apiToken}` })
            .send();
    }

    // Get verification details
    public getStatusDetails(): Promise<SheerIDVerificationStatusDetailsResponse> {
        return new SheerIDRequest<SheerIDVerificationStatusDetailsResponse>()
            .endpoint(`/verification/${this.verificationId}/details`)
            .set("method", "GET")
            .set("headers", { "Authorization": `Bearer ${this.apiToken}` })
            .send();
    }

    // Submit student data
    public submitStudentData(info: SheerIDStudentInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/${this.verificationId}/step/collectStudentPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit military status
    public submitMilitaryStatus(status: SheerIDMilitaryStatus): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/${this.verificationId}/step/collectMilitaryStatus`)
            .set("method", "POST")
            .set("body", { "status": status })
            .send();
    }

    // Submit active military data
    public submitActiveMilitaryData(info: SheerIDActiveMilitaryInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/${this.verificationId}/step/collectActiveMilitaryPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Submit inactive military data
    public submitInactiveMilitaryData(info: SheerIDInactiveMilitaryInfo): Promise<SheerIDSuccessResponse> {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/${this.verificationId}/step/collectInactiveMilitaryPersonalInfo`)
            .set("method", "POST")
            .set("body", info)
            .send();
    }

    // Get organization details
    public getOrganizationDetails(): Promise<SheerIDOrganizationDetails> {
        return new SheerIDRequest<SheerIDOrganizationDetails>()
            .endpoint(`/organization/${this.verificationId}`)
            .set("method", "GET")
            .send();
    }
}
