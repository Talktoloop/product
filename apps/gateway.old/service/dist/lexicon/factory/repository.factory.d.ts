export interface LexiconRepositoryFactory {
    findAll(): Promise<any>;
    findByIdOrFail(id: number): Promise<any>;
}
