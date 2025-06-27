import { DefaultLabelFormatterCallbackParams } from 'echarts/types/dist/option';

export const addValueToDataIndexSum = (
  stackValue: { [key: number]: any },
  isCalculated: { [key: string]: boolean },
  params: DefaultLabelFormatterCallbackParams,
): void => {
  const valueId = params.dataIndex + '-' + params.seriesIndex;
  if (!isCalculated[valueId]) {
    !stackValue[params.dataIndex] && (stackValue[params.dataIndex] = 0);
    stackValue[params.dataIndex] += params.value;
    isCalculated[valueId] = true;
  }
};
