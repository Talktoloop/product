import { UserEntity } from '../../user/entity/user.entity';
import { OrganisationApplicationEntity } from '../../user/entity/organisation-application.entity';
import { CountryEntity } from '../../country/entity/country.entity';
import { StoryEntity } from '../../story/entity/story.entity';
import { OrganisationTokenEntity } from '../../subscription/entity/organisation-token.entity';
export declare class OrganisationEntity {
    id: string;
    name: string;
    verified: boolean;
    countryId: number;
    acronym: string;
    createdAt: Date;
    externalId: string;
    users?: UserEntity[];
    organisationApplications?: OrganisationApplicationEntity[];
    replied: boolean;
    country?: CountryEntity;
    stories: StoryEntity[];
    subscriptionToken: OrganisationTokenEntity;
}
