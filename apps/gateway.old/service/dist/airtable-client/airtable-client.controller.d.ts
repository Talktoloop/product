import { SuccessRO } from '../common/response/success.ro';
import { AirTableClientService } from './airtable-client.service';
import { AirTableSyncDTO } from './request/dto/air-table-sync.dto';
import { DeleteCasesDTO } from './request/dto/delete-cases.dto';
import { AirTableDeleteStoryDTO } from './request/dto/air-table-delete-story.dto';
export declare class AirTableClientController {
    private readonly airTableClientService;
    constructor(airTableClientService: AirTableClientService);
    synchronizeARow(data: AirTableSyncDTO): Promise<SuccessRO>;
    deleteNotSensitiveData(data: AirTableDeleteStoryDTO): Promise<SuccessRO>;
    removeARows(data: DeleteCasesDTO): Promise<SuccessRO>;
}
