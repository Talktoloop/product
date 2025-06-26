export declare class ThematicEntity {
    id: number;
    code: string;
    order: number;
    parentThematicId?: number;
    parent?: ThematicEntity;
    children?: ThematicEntity[];
}
