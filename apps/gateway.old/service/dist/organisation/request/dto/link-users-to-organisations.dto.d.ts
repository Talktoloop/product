export declare class LinkUserToOrganisationDTO {
    email: string;
    organisationId: string;
    languageCode: string;
}
export declare class LinkUsersToOrganisationsDTO {
    storyId: string;
    links: LinkUserToOrganisationDTO[];
}
