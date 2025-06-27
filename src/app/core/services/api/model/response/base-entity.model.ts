export interface IBaseEntity {
  id: string;
  code: string;
  codeExtended?: string;
}

export interface IBaseEntityCheck extends IBaseEntity {
  checked: boolean;
  parentId?: string;
  value?: string;
  title?: string;
}

export interface IBaseEntityCheckNested extends IBaseEntityCheck {
  children: IBaseEntityCheck[];
}

export interface IBaseEntityN {
  id: string;
  name: string;
  content?: string;
  selected: boolean;
  checked?: boolean;
  usersCount?: number;
  acronym?: string;
  countryId?: number;
  countryCode?: string;
  countryName?: string;
  storiesCount?: number;
}

export interface IBaseEntityD extends IBaseEntity {
  content?: string;
  selected?: boolean;
  checked?: boolean;
}

export interface IBaseEntityDN {
  id: string;
  name?: string;
  content?: string;
  selected?: boolean;
  checked?: boolean;
  code?: string;
  hidden?: boolean;
  parentId?: string;
  isTopLevel?: boolean;
  children?: IBaseEntityDN[];
}
