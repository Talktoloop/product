import { BarSeriesOption } from 'echarts';

const canvas = document.createElement('canvas');

export const roundTopItems = (data: Array<{ values: Array<any> }>, series: BarSeriesOption, borderRadius: number[]): void => {
  const values = series[0].data;
  const roundedArray = new Array(values.length);
  for (let i = data.length - 1; i >= 0; i--) {
    series[i].data.forEach((value, index) => {
      if (value.value > 0 && !roundedArray[index]) {
        roundedArray[index] = true;
        series[i].data[index].itemStyle.borderRadius = borderRadius;
      }
    });
  }
};

export const getTextWidth = (text: string, font: string): number => {
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};
