import { Repository } from 'typeorm';
import { IvrrCallEntity } from '../entity/ivrr-call.entity';
import { TranscribeHistoricalStoriesDto } from '../request/dto/transcribe-historical-stories.dto';
export declare class IvrrCallRepository extends Repository<IvrrCallEntity> {
    findStoryCallsByLanguageCodeAndDuration(params: TranscribeHistoricalStoriesDto): Promise<Array<{
        languageCode: string;
        id: number;
        s3FileId: string;
        storyId: string;
    }>>;
}
