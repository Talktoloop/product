import { chartDefaults } from '@app/shared/components/charts/config/defaults.config';
import { EChartsOption } from 'echarts';
import { cloneDeep, merge } from 'lodash';

export const chartConfig: Partial<EChartsOption> = merge(cloneDeep(chartDefaults), {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    icon: 'circle',
    selectedMode: false,
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
    show: false,
    type: 'value',
    scale: true,
    boundaryGap: ['0%', '10%'],
  },
});
