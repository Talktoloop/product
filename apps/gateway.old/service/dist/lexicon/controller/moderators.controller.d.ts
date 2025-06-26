import { ModeratorService } from '../service/moderators.service';
export declare class ModeratorsController {
    private readonly moderatorService;
    constructor(moderatorService: ModeratorService);
    getListOfModerators(): Promise<Record<string, string>[]>;
}
