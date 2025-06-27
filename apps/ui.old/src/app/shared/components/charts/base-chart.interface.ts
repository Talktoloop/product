export interface IAbstractChart {
  data: any;
  series: any;
  mapToSeries: (data: any) => Array<any>;
  setup: () => void;
}
