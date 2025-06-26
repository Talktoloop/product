import { SendEmailV3, LibraryResponse, Client } from 'node-mailjet';
import { ConfigService } from '@nestjs/config';
import { MailJetService } from '@ourloop/shared';
import { ClientProxy } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { UserRepository } from '../../user/repository/user.repository';
import { OrganisationRepository } from '../../organisation/organisation.repository';
export declare class NotificationService extends MailJetService {
    private readonly config;
    private readonly clientProxy;
    private readonly userRepository;
    private readonly organisationRepository;
    readonly customLogger: Logger;
    constructor(config: ConfigService, mailJet: Client, clientProxy: ClientProxy, userRepository: UserRepository, organisationRepository: OrganisationRepository);
    sendEmail(templateId: number, variablesToEscapeAndSend: Record<string, unknown>, variablesToSend: Record<string, unknown>, to: {
        Email: string;
        Name?: string;
    }[], attachments?: SendEmailV3.Attachment[], from?: {
        Email: string;
        Name?: string;
    }, replyTo?: {
        Email: string;
        Name?: string;
    }): Promise<LibraryResponse<any>>;
    sendMessageToSupportTeam(message: string): Promise<LibraryResponse<any>>;
    sendSMS(language: string, clientPhone: string, providerPhone: string, type: string, provider: string, country: string, variables?: Record<string, unknown>): Promise<void>;
    sendSlackNotification(userId: string, organisationApplicationId?: string): Promise<void>;
}
