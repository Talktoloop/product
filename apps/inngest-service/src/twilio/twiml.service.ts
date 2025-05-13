import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';
import { TWIML_BLOCK_TYPE } from '@ourloop/shared';
import { PlayBlockInterface, RecordBlockInterface } from '@ourloop/shared/dist/interface';
import { CreateModeratorCallInterface } from '../types/interfaces/create-moderator-call.interface';
import { XMLParser } from 'fast-xml-parser';

export class TwimlService {
    constructor(private readonly config: { ivrrServiceUrl: string; maxLengthOfRecordBlockInSeconds: number }) { }

    buildTwiml(data: CreateModeratorCallInterface): string {
        const xmlResponseBlocks: string[] = [];

        data.callBlocks.forEach((block) => {
            let response: VoiceResponse;
            switch (block.type) {
                case TWIML_BLOCK_TYPE.PLAY:
                    const playBlock = block as PlayBlockInterface;

                    response = this.getPlayBlock(playBlock.audioUrl);
                    break;
                case TWIML_BLOCK_TYPE.RECORD:
                    const recordBlock = block as RecordBlockInterface;
                    response = this.getRecordBlock(recordBlock.recordingStatusCallback);
                    break;
                default:
                    throw new Error(`Unknown block type: ${block.type}`);
            }

            const xml = this.extractInnerXml(response);
            if (xml) xmlResponseBlocks.push(xml);
        });

        if (data.outroAudioFile) {
            xmlResponseBlocks.push(
                this.extractInnerXml(
                    this.getFinishGatherBlock(data.outroAudioFile, data.resourceStatus),
                ),
            );
        }

        return this.mergeXmls(xmlResponseBlocks);
    }

    getPlayBlock(audioUrl: string, attributes?: VoiceResponse.PlayAttributes): VoiceResponse {
        const response = new VoiceResponse();
        response.play({ loop: 1, ...attributes }, audioUrl);
        return response;
    }

    getRecordBlock(recordingStatusCallback: string, attributes?: VoiceResponse.RecordAttributes): VoiceResponse {
        const response = new VoiceResponse();
        response.record({
            recordingStatusCallback,
            playBeep: true,
            finishOnKey: '0',
            maxLength: this.config.maxLengthOfRecordBlockInSeconds,
            ...attributes,
        });
        return response;
    }

    getFinishGatherBlock(outroAudioFile: string, resourceStatus: string): VoiceResponse {
        const response = new VoiceResponse();
        const gather = response.gather({
            action: `${this.config.ivrrServiceUrl}/api/v1/call/finish-menu/${resourceStatus}`,
            numDigits: 1,
            method: 'POST',
        });

        gather.play(outroAudioFile);
        return response;
    }

    extractInnerXml(response: VoiceResponse): string {
        const fullXml = response.toString();
        return fullXml
            .replace('<Response>', '')
            .replace('</Response>', '')
            .trim();
    }

    mergeXmls(xmls: string[]): string {
        const body = xmls.join(' ');
        return `<Response> ${body} </Response>`;
    }

    twimlToBlocks(twiml: string): (PlayBlockInterface | RecordBlockInterface)[] {
        const parser = new XMLParser({ ignoreAttributes: false, allowBooleanAttributes: true });
        const parsed = parser.parse(twiml)?.Response;

        const playBlocks = this.parsePlayBlocks(this.ensureArray(parsed.Play));
        const recordBlocks = this.parseRecordBlocks(this.ensureArray(parsed.Record));

        return [...playBlocks, ...recordBlocks];
    }

    private parsePlayBlocks(blocks: any[]): PlayBlockInterface[] {
        if (!blocks) return [];
        return blocks.map((block) => ({
            type: TWIML_BLOCK_TYPE.PLAY,
            audioUrl: block['#text'],
        }));
    }

    private parseRecordBlocks(blocks: any[]): RecordBlockInterface[] {
        if (!blocks) return [];
        return blocks.map((block) => ({
            type: TWIML_BLOCK_TYPE.RECORD,
            recordingStatusCallback: block['@_recordingStatusCallback'],
            attributes: {
                playBeep: block['@_playBeep'] === 'true',
            },
        }));
    }

    private ensureArray(block: any): any[] {
        if (!block) return [];
        return Array.isArray(block) ? block : [block];
    }
}