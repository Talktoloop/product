import { CaseManagerEntity } from '../entity/case-manager.entity';
import { CaseManagerRepository } from '../repository/case-manager.repository';
export declare class CaseManagerService {
    private readonly caseManagerRepository;
    constructor(caseManagerRepository: CaseManagerRepository);
    getRandomManager(): Promise<CaseManagerEntity>;
    findWithEmail(): Promise<CaseManagerEntity[]>;
}
