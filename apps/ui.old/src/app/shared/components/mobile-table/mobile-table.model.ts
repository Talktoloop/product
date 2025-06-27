export class MobileTableAction<T> {
  constructor(public label: string, public isPrimaryButtonStyle: boolean = true) {}
}

export class MobileTableActionCallback<T> {
  constructor(public action: MobileTableAction<T>, public element: T) {}
}

export interface MobileTableDataRowBasic<T> {
  customActions?: MobileTableAction<T>[];
}

export type MobileTableDataRow<T> = T & MobileTableDataRowBasic<T>;
