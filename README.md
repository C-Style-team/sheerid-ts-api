[![npm version](https://badge.fury.io/js/sheerid-ts-api.svg)](https://badge.fury.io/js/sheerid-ts-api)

# SheerID REST API v2 Client

This library is SheerID REST API wrapper for JavaScript / TypeScript. This library based on [SheerID REST API Reference (2.0.0)](https://developer.sheerid.com/rest-api)

This library is still under development. We cannot be held responsible for any disadvantages caused by using it.

## Install

```shell
npm install sheerid-ts-api
```

## List of endpoints

<details>
<summary>Info</summary>

- [x] Retrieve build information

</details>

<details>
<summary>Verification</summary>

- [x] Submit * data against program
- [x] Get verification status
- [x] Get verification status by Tracking ID
- [x] Get the 10 most recent verification statuses by Tracking ID
- [x] Get verification details
- [x] Get verification metadata
- [x] Replace verification metadata
- [x] Refire verification webhook
- [x] Label a verification request
- [x] Retrieves a barcode image for a given reward code
- [x] Purge personal data (PII) from a verification
- [x] Reset the limits for the provided verification
- [x] Begin verification flow
- [x] Expire the provided verification
- [x] Submit * data
- [x] Skip submission of Social Security Number
- [x] Start SSO process
- [x] Cancel SSO verification
- [x] Submit email loop response
- [x] Cancel email loop verification
- [x] Retry email loop
- [x] Retrieve email loop token
- [x] Resume email loop
- [x] Allow user to submit an alternate email address
- [x] Submit SMS code
- [x] Retry SMS code
- [x] Upload documents
- [x] Cancel documents upload
- [x] Upload documents (deprecated)
- [x] Mark uploading documents as completed
- [x] Modify the result of a verification via overriding
- [x] Initiate Marketplace verification
- [x] Submit marketplace verification data
- [x] Get organization details

</details>

<details>
<summary>Program</summary>

- [x] Get program theme
- [x] Get the verification steps the given program may encounter in the verification flow.
- [x] Get organization
- [x] Establish verification limit
- [x] Delete verification limit
- [x] Create verification webhook
- [x] Delete verification webhook
- [x] Sends a link to the program

</details>

<details>
<summary>Report</summary>

- [x] Generate a verification report
- [x] Generate verification report for re-verification task
- [x] Retrieve report generation status
- [x] Download report
- [ ] List reporting fields

</details>

<details>
<summary>Conversion</summary>

- [x] Store conversion information
- [x] Store conversion information by Tracking ID

</details>

<details>
<summary>Addschool</summary>

- [x] Submit an add school request
- [x] Search for eligible schools by domain name as part of the add school flow
- [x] Search for eligible schools by name as part of the add school flow

</details>

## List of endpoints (tested)

<details>
<summary>Info</summary>

- [ ] Retrieve build information

</details>

<details>
<summary>Verification</summary>

- [ ] Submit * data against program
- [x] Get verification status
- [ ] Get verification status by Tracking ID
- [ ] Get the 10 most recent verification statuses by Tracking ID
- [x] Get verification details
- [ ] Get verification metadata
- [ ] Replace verification metadata
- [ ] Refire verification webhook
- [ ] Label a verification request
- [ ] Retrieves a barcode image for a given reward code
- [ ] Purge personal data (PII) from a verification
- [ ] Reset the limits for the provided verification
- [ ] Begin verification flow
- [ ] Expire the provided verification
- [ ] Submit * data
- [ ] Skip submission of Social Security Number
- [ ] Start SSO process
- [ ] Cancel SSO verification
- [ ] Submit email loop response
- [ ] Cancel email loop verification
- [ ] Retry email loop
- [ ] Retrieve email loop token
- [ ] Resume email loop
- [ ] Allow user to submit an alternate email address
- [ ] Submit SMS code
- [ ] Retry SMS code
- [ ] Upload documents
- [ ] Cancel documents upload
- [ ] Upload documents (deprecated)
- [ ] Mark uploading documents as completed
- [ ] Modify the result of a verification via overriding
- [ ] Initiate Marketplace verification
- [ ] Submit marketplace verification data
- [ ] Get organization details

</details>

<details>
<summary>Program</summary>

- [ ] Get program theme
- [ ] Get the verification steps the given program may encounter in the verification flow.
- [ ] Get organization
- [ ] Establish verification limit
- [ ] Delete verification limit
- [ ] Create verification webhook
- [ ] Delete verification webhook
- [ ] Sends a link to the program

</details>

<details>
<summary>Report</summary>

- [ ] Generate a verification report
- [ ] Generate verification report for re-verification task
- [ ] Retrieve report generation status
- [ ] Download report
- [ ] List reporting fields

</details>

<details>
<summary>Conversion</summary>

- [ ] Store conversion information
- [ ] Store conversion information by Tracking ID

</details>

<details>
<summary>Addschool</summary>

- [ ] Submit an add school request
- [ ] Search for eligible schools by domain name as part of the add school flow
- [ ] Search for eligible schools by name as part of the add school flow

</details>


## LICENSE

MIT
