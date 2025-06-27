import { EChartsOption } from 'echarts';
import { cloneDeep, merge } from 'lodash';
import { chartDefaults, colors } from './defaults.config';

export const chartConfig: Partial<EChartsOption> = merge(cloneDeep(chartDefaults), {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    selectedMode: 'multiple',
    left: '0%',
    top: '50',
    textStyle: {
      fontSize: 16,
    },
    icon: 'circle',
  },
  grid: {
    height: 256,
    left: '0',
    width: '100%',
    top: '128',
    containLabel: true,
    tooltip: {
      axisPointer: {
        animation: false,
      },
    },
  },
  xAxis: {
    interval: 1,
    boundaryGap: true,
    type: 'category',
    axisTick: {
      show: false,
    },
  },

  yAxis: {
    show: true,
    scale: true,
    type: 'value',
    boundaryGap: ['0%', '10%'],
  },
  color: colors,
});
