import { Component, Input } from '@angular/core';
import { IAgeGenderBreakdown } from '@app/core/services/statistics/model/statistics-filters.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { BaseChartComponent } from '@app/shared/components/charts/base-chart.component';
import { IAbstractChart } from '@app/shared/components/charts/base-chart.interface';
import { chartConfig } from '@app/shared/components/charts/config/bar-stacked-multi.config';
import { ISwitchOption } from '@app/shared/components/switch/switch.component';
import { FiltersService } from '@core/services/filters/filters.service';
import { TranslateService } from '@ngx-translate/core';
import { addValueToDataIndexSum } from '@shared/components/charts/utils/chart.utils';
import { roundTopItems } from '@shared/utils/chart.utils';
import { BarSeriesOption, ECharts, EChartsOption, SeriesOption } from 'echarts';
import { DefaultLabelFormatterCallbackParams } from 'echarts/types/dist/option';
import { cloneDeep, Dictionary, merge } from 'lodash';
@Component({
  selector: 'loop-chart-bar-stacked-multi',
  templateUrl: './bar-stacked-multi-chart.component.html',
  styleUrls: ['./bar-stacked-multi-chart.component.scss'],
})
export class BarStackedMultiChartComponent extends BaseChartComponent implements IAbstractChart {
  @Input() unit: 'stories' | 'cases' = 'stories';
  @Input() titleTKey: string; // translation key for title

  @Input() set data(value: IAgeGenderBreakdown) {
    this._data = value;
    this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters);
    this.data && this.refreshSeries(this.mapToSeries(this.data));
  }

  get data(): IAgeGenderBreakdown {
    return this._data;
  }

  _data: IAgeGenderBreakdown;
  series: SeriesOption[];
  visibleData: 'gender' | 'age' | 'all' = 'all';
  switchOptions: ISwitchOption[];
  constructor(public ui: UIService, private translateService: TranslateService, protected filtersService: FiltersService) {
    super(ui, chartConfig, filtersService);
    this.switchOptions = [
      { code: 'age', text: this.translateService.instant('global.age') },
      { code: 'gender', text: this.translateService.instant('global.gender') },
    ];
  }

  onChartInit($event: ECharts): void {
    super.onChartInit($event);
    this.echartsInstance?.on('mouseover', (e) => {
      this.echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: e.seriesIndex,
        dataIndex: e.dataIndex,
      });
    });
  }

  mapToSeries(dataRaw: IAgeGenderBreakdown): SeriesOption[] {
    let isCalculated = {};
    let stackValue = {};
    let lastSelected = {};

    const series = [];
    const barDefaults: Partial<EChartsOption> = {
      type: 'bar',
      barMinWidth: 10,
      barCategoryGap: '8',
    };

    const barStyle = {
      borderRadius: [4, 4, 0, 0],
      borderWidth: 0.5,
      borderColor: 'white',
    };
    const data = [...cloneDeep(dataRaw.age)];
    dataRaw.gender.forEach((g, i) => {
      data[i].values.push(null);
      data[i].values.push(...g.values);
    });

    data.forEach((v, i) => {
      const entity: Partial<EChartsOption> = {
        ...barDefaults,
        stack: 'all',
        name: v.code,
        data: this.getVisibleValuesOnly(v.values).map((value, index) => {
          return {
            value,
            itemStyle: {
              borderRadius: 0,
              borderColor: !!value ? barStyle.borderColor : 'transparent',
            },
            blur: {
              itemStyle: {
                opacity: 0.6,
              },
            },
            emphasis: {
              focus: 'item',
              itemStyle: {
                opacity: 1,
              },
            },
            label: {
              show: true,
              position: 'top',
              formatter: (params: DefaultLabelFormatterCallbackParams) => {
                const selectedCategories: Dictionary<boolean> = this.echartsInstance.getOption()?.legend[0].selected;
                selectedCategories.closedCases = undefined;
                if (
                  Object.getOwnPropertyNames(lastSelected).length > 0 &&
                  Object.getOwnPropertyNames(selectedCategories).length > 0 &&
                  JSON.stringify(lastSelected) !== JSON.stringify(selectedCategories)
                ) {
                  isCalculated = {};
                  stackValue = {};
                  setTimeout(() => this.echartsInstance.resize(), 0);
                }
                selectedCategories[params.seriesName] === true && addValueToDataIndexSum(stackValue, isCalculated, params);
                lastSelected = selectedCategories;
                const onlySelectedCategories = Object.entries(selectedCategories).filter((category) => !!category[1]);
                const lastSelectedCategoryObject = onlySelectedCategories[onlySelectedCategories?.length - 1];
                if (lastSelectedCategoryObject) {
                  return lastSelectedCategoryObject[0] === params.seriesName ? stackValue[params.dataIndex] : '';
                }
                return '';
              },
              color: '#31135e',
              fontWeight: 600,
              rich: {},
            },
          };
        }),
      };

      series.push(entity);
    });

    roundTopItems(data, series as BarSeriesOption, barStyle.borderRadius);

    return series;
  }

  setup(): void {
    const options = {
      xAxis: {
        axisLabel: {
          show: true,
          interval: 0,
          formatter: (value, index) => {
            return this.formatLabelValue(this.getAgeGenderName(value));
          },
          align: 'center',
          overflow: 'none',
        },
        axisPointer: {
          show: true,
          triggerTooltip: true,
          interval: 0,
          type: 'none',
          animation: false,
          label: {
            show: true,
            color: '#1a1a1a',
            formatter: (value) => {
              return `${this.formatLabelValue(this.getAgeGenderName(value.value))}`;
            },
            backgroundColor: 'white',
            borderColor: 'transparent',
          },
        },
        data: this.getDataArray(),
      },
      legend: {
        formatter: (name) => {
          return this.getCategoryName(name);
        },
      },
      tooltip: {
        position: (point, params, dom, rect, size) => {
          // eslint-disable-next-line
          let { x, y } = rect
            ? {
                x: point[0] - size.contentSize[0] / 2,
                y: size.viewSize[1] - (size.viewSize[1] - rect.y) - 60,
              }
            : {
                x: point[0] - size.contentSize[0] / 2,
                y: -20,
              };
          const items = this.getItemsLength();
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          // TODO: verify when filters integrated
          if (index > items - 2) {
            x = x - size.contentSize[0] / 3;
          }
          if (index < 2) {
            x = x + size.contentSize[0] / 3;
          }
          return [x, y];
        },
        formatter: (params) => {
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          if (index === 5) {
            return '';
          }
          const items = this.getItemsLength();
          const extraClass = index > items - 2 ? 'tooltip--right' : index < 2 ? 'tooltip--left' : '';
          let content = `<div class="stats-tooltip ${extraClass}">
            <div><span class="axis-label ${Array.isArray(params) ? 'hide-mobile' : ''}">${this.getAgeGenderName(
            params[0]?.name || params?.name,
          )}</span></div><div>`;
          if (Array.isArray(params)) {
            params.forEach((p) => {
              content += `<p><span class="content"><span>${this.getCategoryName(p.seriesName)}</span><span>${
                p.value
              } ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`;
            });
          } else {
            content += `<p><span class="content"><span>${this.getCategoryName(params.seriesName)}</span><span>${
              params.value
            } ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`;
          }
          content += '</div></div>';
          return content;
        },
      },
      series: [...this.mapToSeries(this._data)],
    };
    this.chartOption = merge(this.chartDefaultOption, options);
    this.echartsInstance && this.reprocessChartOptions();
  }

  reprocessChartOptions(): void {
    super.reprocessChartOptions();
    let options: EChartsOption = {};
    if (this.ui.mobileView) {
      options = {
        grid: {
          top: 70,
          width: '90%',
          left: '0%',
          right: '5%',
          height: 256,
        },
        legend: {
          left: '0',
          bottom: '2%',
          textStyle: {
            fontSize: 12,
          },
        },
        title: {
          textStyle: {
            fontSize: 18,
          },
        },
        xAxis: {
          axisLabel: {
            padding: 4,
            backgroundColor: 'transparent',
            fontSize: 10,
          },
          axisPointer: {
            label: {
              margin: 7,
              fontSize: 10,
              fontWeight: 600,
            },
          },
        },
        yAxis: {
          show: true,
          splitLine: {
            show: true,
          },
        },
      };
      this.visibleData = 'age';
      this.updateDataBasedOnVisibility();
    } else {
      options = {
        grid: {
          height: 256,
          left: 0,
          right: 0,
          width: '100%',
          top: '20%',
        },
        title: {
          textStyle: {
            fontSize: 24,
          },
        },
        legend: {
          left: '0%',
          top: '0',
          textStyle: {
            fontSize: 16,
          },
        },
        xAxis: {
          axisLabel: {
            padding: 8,
            backgroundColor: 'transparent',
            fontSize: 14,
          },
          axisPointer: {
            label: {
              margin: 11,
              fontSize: 16,
              fontWeight: 600,
            },
          },
        },
        yAxis: {
          show: false,
          splitLine: {
            show: false,
          },
        },
      };

      this.visibleData = 'all';
      this.updateDataBasedOnVisibility();
    }

    setTimeout(() => {
      this.echartsInstance?.setOption(options, { lazyUpdate: true, silent: true });
      this.echartsInstanceWithOptionReady$.next(null);
    }, 1);
  }

  getCategoryName(name: string): string {
    return this.translateService.instant(`category.${name}`);
  }

  getAgeGenderName(name: string): string {
    return !name ? '' : this.translateService.instant(`statistics.ageGender.${name}`);
  }

  formatLabelValue(value: string): string {
    const shouldBreak = window.innerWidth < 571;
    let val = value;
    if (Number.isInteger(Number(value.split('-')[0]))) {
      return value;
    }
    if (shouldBreak) {
      val = val.replace('-', ' ');
      const valArray = val.split(' ');
      if (valArray.length > 1) {
        val = valArray.map((v) => `${v.length > 5 ? v.substr(0, 4) + '.' : v}`).join(' \n');
      } else if (valArray[0].length > 6) {
        val = `${valArray[0].substr(0, 5)}.`;
      }
    } else if (val.length > 9) {
      val = val.split(' ').join(' \n');
    }
    return val;
  }

  getDataArray(): string[] {
    return this.getVisibleValuesOnly(['1417', '1829', '3059', '60', 'na', '', 'female', 'male', 'nonBinary', 'na']);
  }

  chartSwitchClicked(): void {
    this.visibleData = this.visibleData === 'age' ? 'gender' : 'age';
    this.updateDataBasedOnVisibility();
  }

  protected updateDataBasedOnVisibility(): void {
    const options = {
      xAxis: {
        data: this.getDataArray(),
      },
      series: [...this.mapToSeries(this._data)],
    };
    this.echartsInstance && setTimeout(() => this.echartsInstance?.setOption(options, { lazyUpdate: true, silent: true }), 1);
  }

  protected getVisibleValuesOnly(values: Array<any>): Array<any> {
    let startIndex = 0;
    let endIndex = values.length;
    if (this.visibleData === 'age') {
      endIndex = 5;
    } else if (this.visibleData === 'gender') {
      startIndex = 6;
    }

    return values.slice(startIndex, endIndex);
  }

  protected getItemsLength(): number {
    const ageLength = this._data.age[0].values.length;
    const genderLength = this._data.gender[0].values.length;
    const items = this.visibleData === 'all' ? ageLength + genderLength : this.visibleData === 'age' ? ageLength : genderLength;
    return items;
  }
}
