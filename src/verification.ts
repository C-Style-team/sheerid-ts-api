import { SheerID } from "./base";
import { SheerIDErrorResponse, SheerIDSuccessResponse, SheerIDVerificationStatusDetailsResponse } from "./types/response";
import { SheerIDMilitaryStatus } from "./types/enum";
import { SheerIDRequest } from "./request";
import {
    SheerIDActiveMilitaryInfo,
    SheerIDAgeInfo,
    SheerIDDriverLicenseInfo,
    SheerIDEmployeeInfo,
    SheerIDFirstResponderInfo,
    SheerIDGeneralIdentityInfo,
    SheerIDInactiveMilitaryInfo,
    SheerIDLicensedProfessionalInfo,
    SheerIDLowIncomeInfo,
    SheerIDMedicalProfessionalInfo,
    SheerIDMemberInfo,
    SheerIDMoverInfo,
    SheerIDSeniorInfo,
    SheerIDStudentInfo,
    SheerIDTeacherInfo,
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
    public submitStudentDataByProgramId(info: SheerIDStudentInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectStudentPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit active military data against program
    public submitActiveMilitaryDataByProgramId(info: SheerIDActiveMilitaryInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectActiveMilitaryPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit inactive military data against program
    public submitInactiveMilitaryDataByProgramId(info: SheerIDInactiveMilitaryInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectInactiveMilitaryPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit teacher data against program
    public submitTeacherDataByProgramId(info: SheerIDTeacherInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectTeacherPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit senior data against program
    public submitSeniorDataByProgramId(info: SheerIDSeniorInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectSeniorPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit age data against program
    public submitAgeDataByProgramId(info: SheerIDAgeInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectAgePersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit first responder data against program
    public submitFirstResponderDataByProgramId(info: SheerIDFirstResponderInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectFirstResponderPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit licensed professional data against program
    public submitLicensedProfessionalDataByProgramId(info: SheerIDLicensedProfessionalInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectLicensedProfessionalPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit mover data against program
    public submitMoverDataByProgramId(info: SheerIDMoverInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectMoverPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit medical professional data against program
    public submitMedicalProfessionalDataByProgramId(info: SheerIDMedicalProfessionalInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectMedicalProfessionalPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit driver license data against program
    public submitDriverLicenseDataByProgramId(info: SheerIDDriverLicenseInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectDriverLicensePersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit general identity data against program
    public submitGeneralIdentityDataByProgramId(info: SheerIDGeneralIdentityInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectGeneralIdentityPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit employee data against program
    public submitEmployeeDataByProgramId(info: SheerIDEmployeeInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectEmployeePersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit member data against program
    public submitMemberDataByProgramId(info: SheerIDMemberInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectMemberPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit low income personal data against program
    public submitLowIncomeDataByProgramId(info: SheerIDLowIncomeInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/step/collectLowIncomePersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Get verification status
    public getStatus() {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/${this.verificationId}`)
            .method("GET")
            .send();
    }

    // Get verification status by Tracking ID
    public getStatusByTrackingId() {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/program/${this.programId}/trackingId/${this.trackingId}`)
            .method("GET")
            .send();
    }

    // Get the 10 most recent verification statuses by Tracking ID
    public getStatusesByTrackingId(): Promise<Array<SheerIDSuccessResponse | SheerIDErrorResponse>> {
        return new SheerIDRequest<Array<SheerIDSuccessResponse | SheerIDErrorResponse>>()
            .endpoint(`/verification/program/${this.programId}/trackingId/${this.trackingId}/history`)
            .method("GET")
            .set("headers", { "Authorization": `Bearer ${this.apiToken}` })
            .send();
    }

    // Get verification details
    public getStatusDetails(): Promise<SheerIDVerificationStatusDetailsResponse | SheerIDErrorResponse> {
        return new SheerIDRequest<SheerIDVerificationStatusDetailsResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/${this.verificationId}/details`)
            .method("GET")
            .set("headers", { "Authorization": `Bearer ${this.apiToken}` })
            .send();
    }

    // get verification metadata
    public getMetadata() {
        return new SheerIDRequest<{ [key: string]: string }>()
            .endpoint(`/verification/${this.verificationId}/metadata`)
            .method("GET")
            .set("headers", { "Authorization": `Bearer ${this.apiToken}` })
            .send();
    }

    // Submit student data
    public submitStudentData(info: SheerIDStudentInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/${this.verificationId}/step/collectStudentPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit military status
    public submitMilitaryStatus(status: SheerIDMilitaryStatus) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/${this.verificationId}/step/collectMilitaryStatus`)
            .method("POST")
            .set("body", { "status": status })
            .send();
    }

    // Submit active military data
    public submitActiveMilitaryData(info: SheerIDActiveMilitaryInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/${this.verificationId}/step/collectActiveMilitaryPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Submit inactive military data
    public submitInactiveMilitaryData(info: SheerIDInactiveMilitaryInfo) {
        return new SheerIDRequest<SheerIDSuccessResponse | SheerIDErrorResponse>()
            .endpoint(`/verification/${this.verificationId}/step/collectInactiveMilitaryPersonalInfo`)
            .method("POST")
            .set("body", info)
            .send();
    }

    // Get organization details
    public getOrganizationDetails(): Promise<SheerIDOrganizationDetails | SheerIDErrorResponse> {
        return new SheerIDRequest<SheerIDOrganizationDetails | SheerIDErrorResponse>()
            .endpoint(`/organization/${this.verificationId}`)
            .method("GET")
            .send();
    }
}
