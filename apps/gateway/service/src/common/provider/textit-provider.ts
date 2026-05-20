import { FactoryProvider, Inject, Logger } from '@nestjs/common';
import { DI_CONSTANTS } from '../constant/di.constant';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { TextItMessageRO } from '../../sms/response/textit-message.ro';
import { TextItContactRO } from '../../sms/response/textit-contact.ro';
import { TextItIngoingMessageDTO } from '../../sms/request/dto/textit-ingoing-message.dto';

export class TextIt {
  private readonly clientBase: string = this.config.get('textIt.clientBase');
  private readonly apiBase: string = this.config.get('textIt.apiBase');
  private readonly token: string = this.config.get('textIt.token');
  private readonly logger = new Logger(TextIt.name);

  constructor(
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
  ) {}

  async sendUserMessage(
    data: TextItIngoingMessageDTO,
  ): Promise<TextItMessageRO> {
    try {
      if (!this.clientBase[data.countryCode]) {
        throw new Error('Client base is not defined');
      }

      const result = await axios.post(
        `${this.clientBase[data.countryCode]}receive?from=${data.phone}&text=${
          data.message
        }`,
        {
          headers: {
            Authorization: `Token ${this.token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return result.data;
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async getContactDetails(phone: string): Promise<TextItContactRO> {
    try {
      const result = await axios.get(
        `${this.apiBase}contacts.json?urn=tel%3A%2B${phone}`,
        {
          headers: {
            Authorization: `Token ${this.token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      return result.data.results[0];
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async userHasActiveTextItFlow(phone: string): Promise<boolean> {
    const contactDetails = await this.getContactDetails(phone);
    if (!contactDetails?.flow) return false;
    return true;
  }
}

export const TextItProvider: FactoryProvider<TextIt> = {
  provide: DI_CONSTANTS.TEXTIT,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => new TextIt(config),
};
