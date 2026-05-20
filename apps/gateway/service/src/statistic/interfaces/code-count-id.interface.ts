export class CountCodeId {
  id?: number;
  code: string;
  count?: number;
}

export class CountCodeIdWithChildren extends CountCodeId {
  children: CountCodeId[];
}
