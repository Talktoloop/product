import { EChartsOption } from 'echarts';

export const colors = ['#3ab098', '#87afd3', '#ecb320', '#2072ec', '#c9304d', '#4b35bc', '#107d79'];
export const colorsSecondary = ['#7B61FF', '#87AFD3', '#2072EC', '#ECB320', '#31135E'];
export const colorsSad = ['#f2f2f2', '#d9d9d9', '#ececec', '#e6e6e6'];
export const colorsSecondaryExtended = ['#366181', '#232a75', '#cbc4e5', '#ecb320', '#2072ec', '#94dccd'];
export const colorsThird = ['#3ab098', '#ECB320', '#C9304D', '#A6E5D9'];
export const qualityColors = ['#3ab098', '#ECB320', '#C9304D'];

export const chartDefaults: Partial<EChartsOption> = {
  xAxis: {
    offset: 1,
    axisLine: {
      lineStyle: {
        color: '#1A1A1A',
      },
    },
  },
  textStyle: {
    fontFamily: 'Noto Sans',
  },
  title: {
    left: '0',
    top: '0',
    right: 0,
    textStyle: {
      color: '#1a1a1a',
      overflow: 'break',
      fontSize: 24,
    },
  },
  tooltip: {
    padding: 0,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(38,38,38,1)',
  },
  legend: {
    textStyle: {
      color: '#1A1A1A',
    },
  },
};
