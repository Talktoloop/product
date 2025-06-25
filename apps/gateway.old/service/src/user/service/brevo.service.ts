import { Inject, Injectable, Logger } from '@nestjs/common';
import * as brevo from '@getbrevo/brevo';

@Injectable()
export class BrevoService {
  private readonly logger = new Logger(BrevoService.name);
  constructor(
    @Inject(brevo.ContactsApi)
    private readonly contactsApi: brevo.ContactsApi,
  ) {}

  private listId = 5;

  async getContact(email: string): Promise<any> {
    try {
      const response = await this.contactsApi.getContactInfo(email);
      return response;
    } catch (error) {
      console.error('Error fetching contactss:', error);
      throw error;
    }
  }

  async createContact(email: string): Promise<any> {
    try {
      const response = await this.contactsApi.createContact({
        email: email,
        listIds: [this.listId],
      });
      return response;
    } catch (error) {
      console.error('Error fetching contacts:', error.body);
      throw error;
    }
  }

  async deleteContactFromList(email: string): Promise<any> {
    try {
      const contactEmails = new brevo.RemoveContactFromList();
      contactEmails.emails = [email];


      const response = await this.contactsApi.removeContactFromList(
        this.listId,
        contactEmails,
      );
      await this.contactsApi.deleteContact(email);
      return response;
    } catch (error) {
      console.error('Error fetching contacts:', error.body);
      throw error;
    }
  }
}
