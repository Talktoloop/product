import { Component, Input } from '@angular/core';
import { IGetStatisticsFiltersAPI, IPostTimeline } from '@app/core/services/statistics/model/statistics-filters.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { colors } from '@app/shared/components/charts/config/defaults.config';
import { FiltersService } from '@core/services/filters/filters.service';
import { TranslateService } from '@ngx-translate/core';
import { ECharts, EChartsOption, LegendComponentOption, LineSeriesOption, SeriesOption } from 'echarts';
import { merge } from 'lodash';
import { BaseChartComponent } from '../base-chart.component';
import { IAbstractChart } from '../base-chart.interface';
import { chartConfig } from '../config/timeline.config';

@Component({
  selector: 'loop-chart-wave-timeline',
  templateUrl: './wave-timeline-chart.component.html',
  styleUrls: ['./wave-timeline-chart.component.scss'],
})
export class WaveTimelineChartComponent extends BaseChartComponent implements IAbstractChart {
  @Input() titleTKey: string; // translation key for title
  @Input() legendTPrefix: string; // translation prefix for category/legend name
  @Input() palette: Array<string> = colors;
  @Input() dashedSeries: { name: string; icon: string; color: string }; // dashed series - custom icon + color
  @Input() unit: 'stories' | 'cases' = 'stories';
  @Input() set data(value: IPostTimeline[]) {
    this._data = value;
    this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters);
  }

  get data(): IPostTimeline[] {
    return this._data;
  }

  _data: IPostTimeline[];
  series: IPostTimeline[];
  isXLabel = false;

  constructor(public ui: UIService, private translateService: TranslateService, protected filtersService: FiltersService) {
    super(ui, chartConfig, filtersService);
  }

  onChartInit(ec: ECharts): void {
    super.onChartInit(ec);
    this.echartsInstance.on('legendselectchanged', (params) => {
      setTimeout(() => {
        this.echartsInstance?.setOption(
          {
            legend: { ...this.prepareLegendData(this.chartOption.series as LineSeriesOption[]) },
          },
          { lazyUpdate: true, silent: true },
        );
      }, 1);
    });
  }

  setup(): void {
    const seriesData = this.mapToSeries(this._data);
    const mobileDefaultLabel = {
      color: '#656565',
      fontWeight: 'normal',
      fontSize: 12,
      borderRadius: 100,
      backgroundColor: '#e6eaed',
      padding: [4, 6, 4, 6],
    };

    const options = {
      xAxis: {
        splitNumber: 12,
        interval: 1,
        axisLabel: {
          interval: 0,
          formatter: (value, index) => {
            if (this.ui.mobileView && index !== 0 && index !== 11) {
              return '';
            }

            return `{${this.ui.mobileView ? 'mobile' : 'desktop'}|${this.translateService
              .instant(`filtersV2.monthFull.${this.getMonth(value)}`)
              .substr(0, 3)
              .toLowerCase()}${this.ui.mobileView ? ' ' + value.split('-')[0] : ''}}`;
          },
          rich: {
            desktop: {
              color: '#656565',
              fontSize: 14,
              padding: 16,
            },
            mobile: {
              ...mobileDefaultLabel,
              fontWeight: 500,
            },
          },
        },
        axisPointer: {
          animation: false,
          label: {
            show: true,
            formatter: (params) => {
              const value = params.value;
              return `${this.translateService
                .instant(`filtersV2.monthFull.${this.getMonth(value)}`)
                .substr(0, 3)
                .toLowerCase()}${this.ui.mobileView ? ' ' + value.split('-')[0] : ''}`;
            },
            backgroundColor: '#E6EAED',
            borderColor: 'white',
          },
        },
      },
      legend: {
        ...this.prepareLegendData(seriesData),
        formatter: (name) => {
          return this.getCategoryName(name);
        },
      },
      tooltip: {
        position: (point, params, _dom, _rect, size) => {
          // eslint-disable-next-line
          let { x, y } = {
            x: point[0] - size.contentSize[0] / 2,
            y: (this.ui.mobileView ? 60 : 100) - size.contentSize[1],
          };
          const months = this._data?.[0].values.length;
          // TODO: verify corner values tooltip placement when filters integrated
          if (params[0].dataIndex > months - 3) {
            x = x - size.contentSize[0] / 3;
          }
          if (params[0].dataIndex < 2) {
            x = x + size.contentSize[0] / 3;
          }
          return [x, y];
        },
        formatter: (params) => {
          const months = this._data?.[0].values.length;
          const extraClass = params[0].dataIndex > months - 3 ? 'tooltip--right' : params[0].dataIndex < 2 ? 'tooltip--left' : '';
          let content = `<div class="stats-tooltip ${extraClass}">
              <div><span class="axis-label hide-mobile">${this.getMonth(params[0].axisValue)}</span></div><div>`;
          params.forEach((p) => {
            content += `<p><span class="custom-marker-1" style="background-color:${
              p.color
            };"></span> <span class="content"><span>${this.getCategoryName(p.seriesName)}</span><span>${
              p.value[1].toString() === '0.1' ? '0' : p.value[1]
            } ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></p>`;
          });
          content += '</div></div>';
          return content;
        },
      },
      series: [...seriesData],
      color: this.palette,
    };

    this.chartOption = merge(this.chartDefaultOption, options);
    this.echartsInstance && this.reprocessChartOptions();
  }

  mapToSeries(data: IPostTimeline[]): SeriesOption[] {
    const series: SeriesOption[] = [];
    const lineDefaults: SeriesOption = {
      type: 'line',
      smooth: 0.6,
      symbol: 'none',
      animation: true,
      animationDuration: 100,
      showSymbol: false,
    };

    data.forEach((d) => {
      const values = d.values.map((v) => {
        const copy = [...v];
        if (v[1].toString() === '0') {
          copy[1] = 0.1;
        }
        return copy;
      });

      let entity: SeriesOption = {
        ...lineDefaults,
        data: values,
        name: d.code,
      };
      const interactionStyles = {
        blur: {
          areaStyle: {
            opacity: 0.2,
          },
        },
        emphasis: {
          focus: 'series',
          areaStyle: {
            opacity: 0.85,
          },
          blurScope: 'global',
        },
      };

      if (d.code === this.dashedSeries.name) {
        entity = {
          ...entity,
          silent: true,
          lineStyle: {
            color: this.dashedSeries.color,
            width: 2,
            type: 'dashed',
          },
          blur: {
            areaStyle: {
              opacity: 0.2,
            },
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.85,
            },
            blurScope: 'global',
          },
          areaStyle: {
            color: 'transparent',
          },
        };
      } else {
        entity = {
          ...entity,
          silent: true,
          blur: {
            areaStyle: {
              opacity: 0.2,
            },
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.85,
            },
            blurScope: 'global',
          },
          areaStyle: {},
          lineStyle: {
            width: 0,
          },
        };
      }
      series.push(entity);
    });

    return series;
  }

  reprocessChartOptions(): void {
    super.reprocessChartOptions();

    const series = this.chartOption?.series as LineSeriesOption[];
    let options: EChartsOption = {};
    if (this.ui.mobileView) {
      series.forEach((serie) => {
        serie.symbol = 'circle';
        serie.symbolSize = 10;
      });
      options = {
        grid: {
          top: 0,
          width: '90%',
          left: '0%',
          right: '5%',
        },
        legend: {
          left: '0',
          bottom: '2%',
          textStyle: {
            fontSize: 12,
          },
        },
        xAxis: {
          axisLabel: {
            padding: 0,
            backgroundColor: 'transparent',
            fontSize: 12,
          },
          splitArea: {
            show: true,
            interval: 'auto',
            areaStyle: {
              color: ['#f4f4f4', 'white'],
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 0,
              color: 'white',
            },
          },
          axisPointer: {
            label: {
              show: true,
              color: '#191919',
              fontWeight: 'bold',
              fontSize: 12,
              margin: 8,
              borderRadius: 16,
              padding: [4, 6, 4, 6],
            },
          },
        },
        series: [...series],
        tooltip: {
          axisPointer: {
            type: 'line',
          },
        },
      };
    } else {
      series.forEach((serie) => {
        serie.symbol = 'none';
        serie.symbolSize = 10;
      });
      options = {
        grid: {
          top: '19%',
          width: '100%',
          left: '0%',
        },
        xAxis: {
          splitArea: {
            show: true,
            interval: 'auto',
            areaStyle: {
              color: ['#f4f4f4'],
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 10,
              color: 'white',
            },
          },
          axisPointer: {
            label: {
              show: true,
              color: '#1A1A1A',
              fontWeight: 'bold',
              fontSize: 16,
              margin: 36,
              borderRadius: 16,
              padding: [4, 8, 4, 8],
            },
          },
        },
        series: [...series],
        tooltip: {
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: '#e5e5e5',
              opacity: 0.3,
            },
          },
        },
        legend: {
          left: '0%',
          top: '0',
          textStyle: {
            fontSize: 16,
          },
        },
      };
    }

    setTimeout(() => {
      this.echartsInstance?.setOption(options, { lazyUpdate: true, silent: true });
      this.echartsInstanceWithOptionReady$.next(null);
    }, 1);
  }

  /**
   * Function used to add one or many custom icons to legend.
   * It sets custom icon selected/unselected on change
   *
   * @param seriesData series
   * @returns new legend data with current icons
   */
  protected prepareLegendData(seriesData: SeriesOption[]): LegendComponentOption {
    const legend = this.echartsInstance?.getOption().legend[0];
    const customSelected = !legend
      ? true
      : Object.keys(legend.selected).some((e, i) => {
          return e === this.dashedSeries.name && legend.selected[e];
        });

    const getLegendIcon = (name: string | number, selected: boolean) => {
      const defaultIcon = 'circle';
      if (!this.dashedSeries) {
        return defaultIcon;
      }
      return name === this.dashedSeries.name
        ? selected
          ? `image://assets/statistics/legend/${this.dashedSeries.icon}-dashed.svg`
          : `image://assets/statistics/legend/${this.dashedSeries.icon}-dashed-unselected.svg`
        : defaultIcon;
    };

    return {
      data: [
        ...seriesData.map((d) => ({
          name: d.name,
          icon: getLegendIcon(d.name, customSelected),
        })),
      ],
    } as LegendComponentOption;
  }

  selectLegendOptionsBasedOnFilters(filters: IGetStatisticsFiltersAPI): void {
    super.selectLegendOptionsBasedOnFilters(filters);
    setTimeout(() => {
      this.echartsInstance?.setOption(
        {
          legend: { ...this.prepareLegendData(this.chartOption.series as LineSeriesOption[]) },
        },
        { lazyUpdate: true, silent: true },
      );
    }, 1);
  }

  getMonth(data: string): string {
    const date = new Date(data);
    const month = date.toLocaleString('en-US', { month: 'long' });
    return month;
  }

  getCategoryName(name: string): string {
    return this.translateService.instant(`${this.legendTPrefix}.${name}`);
  }
}
