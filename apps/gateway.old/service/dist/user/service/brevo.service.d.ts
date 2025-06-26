import * as brevo from '@getbrevo/brevo';
export declare class BrevoService {
    private readonly contactsApi;
    private readonly logger;
    constructor(contactsApi: brevo.ContactsApi);
    private listId;
    getContact(email: string): Promise<any>;
    createContact(email: string): Promise<any>;
    deleteContactFromList(email: string): Promise<any>;
}
