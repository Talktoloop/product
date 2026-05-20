/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecordingsRO } from '../models/RecordingsRO';
import type { TranscribeHistoricalStoriesDto } from '../models/TranscribeHistoricalStoriesDto';
import type { UploadedFilesRO } from '../models/UploadedFilesRO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IvrrService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Test
     * @returns string
     * @throws ApiError
     */
    public ivrrControllerTestToIvrr(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/ivrr/test',
        });
    }

    /**
     * Test internal
     * @returns string
     * @throws ApiError
     */
    public ivrrControllerTestInternal(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/ivrr/test-internal',
        });
    }

    /**
     * Get signed url for s3 audio file
     * @returns string
     * @throws ApiError
     */
    public ivrrControllerGetIvrrFileSignedUrl({
        s3FileId,
    }: {
        s3FileId: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/ivrr/file/{s3FileId}',
            path: {
                's3FileId': s3FileId,
            },
        });
    }

    /**
     * Get intro and outro recordings
     * @returns RecordingsRO
     * @throws ApiError
     */
    public ivrrControllerGetRecordings({
        language,
    }: {
        language: string,
    }): CancelablePromise<RecordingsRO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/ivrr/recordings/{language}',
            path: {
                'language': language,
            },
        });
    }

    /**
     * Upload IVRR audio file to s3
     * @returns UploadedFilesRO
     * @throws ApiError
     */
    public ivrrControllerUploadMultipleFiles({
        formData,
    }: {
        formData: any,
    }): CancelablePromise<UploadedFilesRO> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/ivrr/upload-file',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Update recordings duration for existing stories
     * @returns string
     * @throws ApiError
     */
    public ivrrControllerUpdateRecordingDuration(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/ivrr/update-recording-duration',
        });
    }

    /**
     * Transcribe historical stories
     * @returns any
     * @throws ApiError
     */
    public ivrrControllerTranscribeHistoricalFeedback({
        requestBody,
    }: {
        requestBody: TranscribeHistoricalStoriesDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/ivrr/transcribe-historical-stories',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
