import { Component } from '@angular/core';
import { BarSeriesOption, EChartsOption, EChartsType, SeriesOption } from 'echarts';
import { merge } from 'lodash';
import { IStackedTimeline } from '../../../../../core/services/statistics/model/statistics-filters.model';
import { roundTopItems } from '../../../../utils/chart.utils';
import { colorsSad } from '../../config/defaults.config';
import { BarStackedChartComponent } from '../bar-stacked-chart.component';

@Component({
  selector: 'loop-chart-bar-stacked-horizontal',
  templateUrl: '../bar-stacked-chart.component.html',
  styleUrls: ['../bar-stacked-chart.component.scss'],
})
export class BarStackedHorizontalChartComponent extends BarStackedChartComponent {
  horizontal = true;

  private labelSetup = this.ui.mobileView
    ? {
        fontSize: 10,
        lineHeight: 15,
      }
    : {
        fontSize: 14,
        lineHeight: 20,
      };

  onChartInit($event: EChartsType): void {
    super.onChartInit($event);
    this.echartsInstance?.on('mouseover', (e) => {
      this.echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: e.seriesIndex,
        dataIndex: e.dataIndex,
      });
      const normalizedName = e.name.replace(/\./g, '');
      this.echartsInstance?.setOption(
        {
          yAxis: {
            axisLabel: {
              rich: {
                [normalizedName]: {
                  ...this.labelSetup,
                  fontWeight: 600,
                  color: '#1a1a1a',
                },
              },
            },
          },
        },
        { lazyUpdate: true, silent: true },
      );
    });
    this.chartDefaultOption.color = this.data[0].isAnonymousData ? colorsSad : this.settings.colorPalette;
    this.echartsInstance.on('mouseout', (e) => {
      const normalizedName = e.name.replace(/\./g, '');
      this.echartsInstance?.setOption(
        {
          yAxis: {
            axisLabel: {
              rich: {
                [normalizedName]: {
                  ...this.labelSetup,
                  fontWeight: 400,
                  color: '#656565',
                },
              },
            },
          },
        },
        { lazyUpdate: true, silent: true },
      );
    });
  }

  setup(): void {
    super.setup();
    const yAxisOptions = {
      ...(this.settings.yAxis || {
        showAxis: true,
        showLabels: true,
        showPointer: true,
        showPointerLabel: true,
      }),
    };
    const options = {
      grid: {
        left: '0%',
      },
      yAxis: {
        type: 'category',
        show: yAxisOptions.showAxis,
        inverse: true,
        axisLabel: {
          show: yAxisOptions.showLabels,
          interval: 0,
          width: 110,
          fontSize: 14,
          lineHeight: 20,
          overflow: 'break',
          ellipsis: '.',
          lineOverflow: 'truncate',
          rich: {
            dupa: {
              color: 'red',
            },
          },
          formatter: (value) => {
            return this.formatLabelValue(this.getStackName(value), value);
          },
        },
        axisPointer: {
          show: yAxisOptions.showPointer,
          triggerTooltip: true,
          type: 'none',
          animation: false,
          label: {
            show: false,
          },
        },
        axisTick: {
          show: false,
        },
        nameTextStyle: {
          inverse: true,
        },
        data: this.settings.stacks,
      },
      tooltip: {
        position: (point, params, dom, rect, size) => {
          // eslint-disable-next-line
          let { x, y } = rect
            ? {
                x: point[0] - size.contentSize[0] / 2,
                y: size.viewSize[1] - (size.viewSize[1] - rect.y) - 50,
              }
            : {
                x: point[0] - size.contentSize[0] / 2,
                y: point[1] - size.contentSize[1] - 50,
              };
          x = x + size.contentSize[0] / 3;
          return [x, y];
        },
        formatter: (params) => {
          if (this.ui.mobileView && !Array.isArray(params)) {
            const item = params;
            params = [];
            params.push(item);
          }
          const extraClass = 'tooltip--left';
          let content = `<div class='stats-tooltip ${extraClass}'>
            <div><span class='axis-label ${Array.isArray(params) ? 'hide-mobile' : ''}'>${this.getStackName(
            params[0]?.name || params?.name,
          )}</span></div><div>`;
          if (Array.isArray(params)) {
            params.forEach((p) => {
              content +=
                p.value !== null
                  ? `<p><span class='content'><span>${this.getCategoryName(p.seriesName)}</span><span>${
                      p.value
                    } ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`
                  : '';
            });
          } else {
            content +=
              params.value !== null
                ? `<p><span class='content'><span>${this.getCategoryName(params.seriesName)}</span><span>${
                    params.value
                  } ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`
                : '';
          }
          content += '</div></div>';
          return content;
        },
      },
    };
    const newOptions = merge(this.chartDefaultOption, options);
    newOptions.xAxis = {
      type: 'value',
      show: false,
      max: (value) => value.max + 0.2 * value.max,
      splitLine: {
        show: false,
      },
    };
    this.chartOption = newOptions;
    this.echartsInstance && this.reprocessChartOptions();
  }

  reprocessChartOptions(): void {
    super.reprocessChartOptions();

    let options: EChartsOption = {};

    options = {
      grid: {
        top: this.ui.mobileView ? '0' : '20%',
        left: '10%',
        width: '90%',
        bottom: this.ui.mobileView ? '30%' : '0',
        containLabel: true,
        height: 'auto',
      },
    };

    if (this.ui.mobileView) {
      options = {
        ...options,
        yAxis: {
          offset: 20,
          axisLabel: {
            fontSize: 10,
          },
          splitLine: {
            show: false,
          },
        },
        xAxis: {
          show: true,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
          },
          axisLabel: {
            fontSize: 10,
          },
        },
      };
    } else {
      options = {
        ...options,
        yAxis: {
          offset: 20,
          show: true,
          splitLine: {
            show: false,
          },
        },
        xAxis: {
          show: false,
        },
      };
    }

    setTimeout(() => {
      this.echartsInstance?.setOption(options, { lazyUpdate: true, silent: true });
      this.echartsInstanceWithOptionReady$.next(null);
      this.refreshSeries(this.mapToSeries(this.data));
    }, 1);
  }

  mapToSeries(data: IStackedTimeline[]): SeriesOption[] {
    const series = super.mapToSeries(data) as any[];
    series.forEach((s) => {
      s.label.position = 'right';
      s.barWidth = this.ui.mobileView ? 34 : 56;
      s.barCategoryGap = this.ui.mobileView ? '10' : '19';
      s.barGap = this.ui.mobileView ? '10' : '19';
    });
    roundTopItems(data, series as BarSeriesOption, [0, 4, 4, 0]);
    return series;
  }
}
