import { EChartsOption } from 'echarts';
import { cloneDeep, merge } from 'lodash';
import { chartDefaults, colors } from './defaults.config';

export const chartConfig: Partial<EChartsOption> = merge(cloneDeep(chartDefaults), {
  legend: {
    selectedMode: 'multiple',
    left: '0%',
    top: '50',
    icon: 'circle',
    itemWidth: 14,
    itemHeight: 14,
    textStyle: {
      verticalAlign: 'middle',
    },
  },
  backgroundColor: 'white',
  grid: {
    height: 216,
    top: 110,
    width: '100%',
    left: '0%',
    containLabel: true,
    tooltip: {
      axisPointer: {
        snap: true,
      },
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    offset: 0,
    scale: false,
    silent: true,
    splitLine: {
      show: true,
      lineStyle: {
        width: 10,
        color: 'white',
      },
    },
    splitArea: {
      show: true,
      interval: 'auto',
      areaStyle: {
        color: ['#f4f4f4'],
      },
    },
    axisTick: {
      alignWithLabel: true,
      show: false,
    },
    axisLine: {
      onZero: false,
      lineStyle: {
        color: '#464648',
      },
    },
    axisLabel: {
      padding: 16,
    },
  },
  yAxis: {
    show: false,
    scale: true,
    silent: true,
    min: 0.1,
    boundaryGap: ['0%', '10%'],
    splitLine: {
      show: false,
    },
  },
  axisTick: {
    alignWithLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      snap: true,
      shadowStyle: {
        shadowOffsetX: 0,
      },
    },
  },
  color: colors,
});
