import { Inject, Injectable, Logger } from '@nestjs/common';
import { DI_CONSTANT } from '../../common/constant/di.constant';
import { TwilioProvider } from '../../common/interface/twilio.interface';
import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';
import { CreateModeratorCallInterface } from '../../common/interface/create-moderator-call';
import {
  PlayBlockInterface,
  RecordBlockInterface,
} from '@ourloop/shared/dist/interface';
import { TWIML_BLOCK_TYPE } from '@ourloop/shared';
import { XMLParser } from 'fast-xml-parser';
import { ApplicationConfig } from '../../config/default';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TwimlService {
  private readonly logger: Logger = new Logger(TwimlService.name);
  private applicationConfig: ApplicationConfig;

  constructor(
    @Inject(DI_CONSTANT.TWILIO)
    private readonly twilio: TwilioProvider,
    private readonly configService: ConfigService,
  ) {
    this.applicationConfig =
      configService.get<ApplicationConfig>('application');
  }

  getDigitTwoForFinishBlock(
    initialAudioFile: string,
    finishAudioFile: string,
    recordingCallbackUrl: string,
  ): string {
    const playIntroBlock = this.getObjectXmlFromResponse(
      this.getPlayBlock(initialAudioFile),
    );
    const recordBlock = this.getObjectXmlFromResponse(
      this.getRecordBlock(recordingCallbackUrl),
    );

    const playOutroBlock = this.getObjectXmlFromResponse(
      this.getPlayBlock(finishAudioFile),
    );

    return this.mergeXmlsToResponseTwiml([
      playIntroBlock,
      recordBlock,
      playOutroBlock,
    ]);
  }

  getDigitFourForFinishBlock(audioFile: string): string {
    const playBlock = this.getObjectXmlFromResponse(
      this.getPlayBlock(audioFile),
    );
    const hangupBlock = this.getObjectXmlFromResponse(this.getHangupBlock());

    return this.mergeXmlsToResponseTwiml([playBlock, hangupBlock]);
  }

  getFinishGatherBlock(
    outroAudioFile: string,
    resourceStatus: string,
  ): VoiceResponse {
    const actionUrl = `${this.applicationConfig.ivrrServiceUrl}/api/v1/call/finish-menu/${resourceStatus}`;
    const response = this.getVoiceResponse();

    const gather = response.gather({
      action: actionUrl,
      numDigits: 1,
      method: 'POST',
    });

    gather.play(outroAudioFile); // to repeat this message ....

    return response;
  }

  getHangupBlock(): VoiceResponse {
    const response = this.getVoiceResponse();
    response.hangup();
    return response;
  }

  twimlToLoopBlocks(
    twiml: string,
  ): (PlayBlockInterface | RecordBlockInterface)[] {
    const parser = new XMLParser({
      ignoreAttributes: false,
      allowBooleanAttributes: true,
    });
    const parsedObject = parser.parse(twiml)?.Response;

    const playBlocks = this.parsePlayXml(this.parseToArray(parsedObject.Play));

    const recordBlocks = this.parseRecordXml(
      this.parseToArray(parsedObject.Record),
    );

    return [...playBlocks, ...recordBlocks];
  }

  createTwilioXmlCallData(data: CreateModeratorCallInterface): string {
    const xmlResponseBlocks: string[] = [];

    data.callBlocks.forEach((block) => {
      let response: VoiceResponse;
      switch (block.type) {
        case TWIML_BLOCK_TYPE.PLAY:
          const playBlock = block as PlayBlockInterface;
          response = this.getPlayBlock(
            playBlock.audioUrl,
            playBlock.attributes,
          );

          break;
        case TWIML_BLOCK_TYPE.RECORD:
          const recordBlock = block as RecordBlockInterface;
          response = this.getRecordBlock(
            recordBlock.recordingStatusCallback,
            recordBlock.attributes,
          );

          break;
      }

      const xml = this.getObjectXmlFromResponse(response);
      if (xml) xmlResponseBlocks.push(xml);
    });

    if (data.outroAudioFile) {
      xmlResponseBlocks.push(
        this.getObjectXmlFromResponse(
          this.getFinishGatherBlock(data.outroAudioFile, data.resourceStatus),
        ),
      );
    }

    return this.mergeXmlsToResponseTwiml(xmlResponseBlocks);
  }

  getPlayBlock(
    audioUrl: string,
    attributes?: VoiceResponse.PlayAttributes,
  ): VoiceResponse {
    const response = this.getVoiceResponse();
    const attr: VoiceResponse.PlayAttributes = {
      loop: 1,
      ...attributes,
    };

    response.play(attr, audioUrl);

    return response;
  }

  getRecordBlock(
    recordingStatusCallback: string,
    attributes?: VoiceResponse.RecordAttributes,
  ): VoiceResponse {
    const response = this.getVoiceResponse();
    const attr: VoiceResponse.RecordAttributes = {
      recordingStatusCallback,
      playBeep: true,
      finishOnKey: '0',
      maxLength: this.applicationConfig.maxLengthOfRecordBlockInSeconds,
      ...attributes,
    };

    response.record(attr);

    return response;
  }

  getGatherBlock(
    gatherNestedElement: VoiceResponse,
    attributes?: VoiceResponse.GatherAttributes,
  ): { response: VoiceResponse; gather: VoiceResponse.Gather } {
    const gather = gatherNestedElement.gather({
      ...attributes,
    });

    return { response: gatherNestedElement, gather };
  }

  private getVoiceResponse = (): VoiceResponse =>
    new this.twilio.twimlClient.VoiceResponse();

  getObjectXmlFromResponse(voiceResponse: VoiceResponse): string {
    const xml = voiceResponse.toString();

    const object = xml.substring(
      xml.lastIndexOf('<Response>'),
      xml.lastIndexOf('</Response>'),
    );

    return object.replace('<Response>', '').replace('</Response>', '');
  }

  mergeXmlsToResponseTwiml(xmls: string[]): string {
    const mergedXmls = xmls.join(' ');

    return `<Response> ${mergedXmls} </Response>`;
  }

  private parsePlayXml(xmlPlayBlocks: any[]): PlayBlockInterface[] {
    const loopPlayBlocks: PlayBlockInterface[] = [];
    if (!xmlPlayBlocks) return loopPlayBlocks;

    for (const block of xmlPlayBlocks) {
      loopPlayBlocks.push({
        type: TWIML_BLOCK_TYPE.PLAY,
        audioUrl: block['#text'],
      });
    }
    return loopPlayBlocks;
  }

  private parseRecordXml(xmlRecordBlocks: any[]): RecordBlockInterface[] {
    const loopRecordBlocks: RecordBlockInterface[] = [];
    if (!xmlRecordBlocks) return loopRecordBlocks;
    for (const block of xmlRecordBlocks) {
      loopRecordBlocks.push({
        type: TWIML_BLOCK_TYPE.RECORD,
        recordingStatusCallback: block['@_recordingStatusCallback'],
        attributes: {
          playBeep: block['@_playBeep'] === 'true',
        },
      });
    }

    return loopRecordBlocks;
  }

  private parseToArray(xmlBlock: any) {
    return !xmlBlock ? null : Array.isArray(xmlBlock) ? xmlBlock : [xmlBlock];
  }
}
