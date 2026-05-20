export interface Option<T = any> {
  value?: T;
  content: string;
  children?: Option[];
}

export interface AdministrationOptions extends Option {
  id: number;
  numberOfStories: number;
  hasChild: boolean;
  parentId?: number;
  parentName?: string;
  semiClicked?: number[];
}
