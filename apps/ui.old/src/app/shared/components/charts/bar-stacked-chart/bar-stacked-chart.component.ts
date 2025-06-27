import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { IStackedChartSettings, IStackedTimeline } from '@app/core/services/statistics/model/statistics-filters.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { BaseChartComponent } from '@app/shared/components/charts/base-chart.component';
import { IAbstractChart } from '@app/shared/components/charts/base-chart.interface';
import { getTextWidth, roundTopItems } from '@app/shared/utils/chart.utils';
import { FiltersService } from '@core/services/filters/filters.service';
import { TranslateService } from '@ngx-translate/core';
import { colorsSad } from '@shared/components/charts/config/defaults.config';
import { addValueToDataIndexSum } from '@shared/components/charts/utils/chart.utils';
import { BarSeriesOption, ECharts, EChartsOption, SeriesOption } from 'echarts';
import { DefaultLabelFormatterCallbackParams } from 'echarts/types/dist/option';
import { Dictionary, merge } from 'lodash';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { chartConfig } from '../config/bar-stacked.config';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'loop-chart-bar-stacked',
  templateUrl: './bar-stacked-chart.component.html',
  styleUrls: ['./bar-stacked-chart.component.scss'],
})
export class BarStackedChartComponent extends BaseChartComponent implements IAbstractChart, OnDestroy {
  private resizeObservable$: Observable<Event>;
  private resizeSubscription$: Subscription;
  private labelWidth: number;
  public heightClass: string;
  public horizontal = false;
  public title$ = new Subject();

  @Input() set data(value: IStackedTimeline[]) {
    if (value?.[0]?.type) {
      value.map((stack) => (stack.code = stack.type));
    }
    this._data = value;
    this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters);
    this.data && this.refreshSeries(this.mapToSeries(this.data));
  }

  get data(): IStackedTimeline[] {
    return this._data;
  }
  constructor(public ui: UIService, protected translateService: TranslateService, protected filtersService: FiltersService) {
    super(ui, chartConfig, filtersService);
  }
  @Input() settings: IStackedChartSettings;
  @Input() unit: 'stories' | 'cases' = 'stories';

  private labelSettings = this.ui.mobileView
    ? {
        fontSize: 10,
        lineHeight: 15,
      }
    : {
        fontSize: 14,
        lineHeight: 20,
      };

  _data: IStackedTimeline[];
  series: SeriesOption[];
  barDefaults: Partial<EChartsOption> = {
    type: 'bar',
    barGap: '4%',
    barCategoryGap: this.ui.mobileView ? '3' : '20',
  };
  chartId = Math.floor(1000 + Math.random() * 9000);

  private getShorterStackName(stackName: string): string {
    const words = stackName.split(' ');
    const shorterWords = [];
    words.forEach((word: string) => {
      let shorterWord = word;
      const wordLengthPx = getTextWidth(word, 'normal 10px Noto Sans');
      const averageLetterLengthPx = wordLengthPx / word.length;
      const maxLetterCapacity = Math.trunc(this.labelWidth / averageLetterLengthPx) - 2;
      if (word.length > maxLetterCapacity) {
        shorterWord = word.slice(0, maxLetterCapacity) + '.';
      }
      shorterWords.push(shorterWord);
    });
    return shorterWords.join(' ');
  }

  onChartInit($event: ECharts): void {
    this.setTitle();
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      this.echartsInstance.updateLabelLayout();
      this.resizeLabels();
      this.setLabelWidth();
    });
    super.onChartInit($event);
    this.chartDefaultOption.color = this.data[0].isAnonymousData ? colorsSad : this.settings.colorPalette;
    this.echartsInstance?.on('mouseover', (e) => {
      this.echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: e.seriesIndex,
        dataIndex: e.dataIndex,
      });
      this.echartsInstance?.setOption(
        {
          xAxis: {
            axisLabel: {
              rich: {
                [e.name]: {
                  ...this.labelSettings,
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
    this.echartsInstance.on('mouseout', (e) => {
      this.echartsInstance?.setOption(
        {
          xAxis: {
            axisLabel: {
              rich: {
                [e.name]: {
                  ...this.labelSettings,
                  fontWeight: 400,
                  color: '#1A1A1A',
                },
              },
            },
          },
        },
        { lazyUpdate: true, silent: true },
      );
    });
    this.setLabelWidth();
  }
  mapToSeries(data: IStackedTimeline[]): SeriesOption[] {
    const series = [];

    const barStyle = {
      borderRadius: [4, 4, 0, 0],
      borderWidth: 0.5,
      borderColor: 'white',
    };
    let isCalculated = {};
    let stackValue = {};
    let lastSelected = {};

    data.forEach((v, i) => {
      const entity: Partial<EChartsOption> = {
        ...this.barDefaults,
        stack: 'all',
        name: v.code,
        data: v.values.map((value) => ({
          value,
          itemStyle: {
            ...barStyle,
            borderColor: !!value ? barStyle.borderColor : 'transparent',
            borderRadius: 0,
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
        })),
        label: {
          show: true,
          position: 'top',
          formatter: (params: DefaultLabelFormatterCallbackParams) => {
            if (!this.echartsInstance) {
              return;
            }
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
        },
      };
      series.push(entity);
    });

    roundTopItems(data, series as BarSeriesOption, barStyle.borderRadius);

    return series;
  }

  setup(): void {
    const xAxisOptions = { ...(this.settings.xAxis || { showAxis: true, showLabels: true, showPointer: true, showPointerLabel: false }) };
    const options = {
      xAxis: {
        show: xAxisOptions.showAxis,
        axisLabel: {
          show: xAxisOptions.showLabels,
          interval: 0,
          lineHeight: this.ui.mobileView ? 15 : 24,
          overflow: 'break',
          ellipsis: '.',
          lineOverflow: 'truncate',
          rich: {},
          formatter: (value) => {
            return this.formatLabelValue(this.getStackName(value), value);
          },
        },
        axisPointer: {
          show: xAxisOptions.showPointer,
          triggerTooltip: true,
          type: 'none',
          animation: false,
        },
        data: this.settings.stacks,
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
                y: size.viewSize[1] - (size.viewSize[1] - rect.y) - 50,
              }
            : {
                x: point[0] - size.contentSize[0] / 2,
                y: 0,
              };
          const items = this.data[0].values.length;
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          // TODO: verify when filters integrated
          if (index > items - 3) {
            x = x - size.contentSize[0] / 3;
          }
          if (index < 2) {
            x = x + size.contentSize[0] / 3;
          }
          return [x, y];
        },
        formatter: (params) => {
          if (this.ui.mobileView && !Array.isArray(params)) {
            const item = params;
            params = [];
            params.push(item);
          }
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          const items = this.data[0].values.length;
          const extraClass = index > items - 3 ? 'tooltip--right' : index < 2 ? 'tooltip--left' : '';
          let content = `<div class="stats-tooltip ${extraClass}">
            <div><span class="axis-label ${Array.isArray(params) ? 'hide-mobile' : ''}">${this.getStackName(
            params[0]?.name || params?.name,
          )}</span></div><div>`;
          if (Array.isArray(params)) {
            params.forEach((p) => {
              content +=
                p.value !== null
                  ? `<p><span class="content"><span>${this.getCategoryName(p.seriesName)}</span><span>${
                      p.value
                    } ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`
                  : '';
            });
          } else {
            content +=
              params.value !== null
                ? `<p><span class="content"><span>${this.getCategoryName(params.seriesName)}</span><span>${
                    params.value
                  } ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`
                : '';
          }
          content += '</div></div>';
          return content;
        },
      },
      series: [...this.mapToSeries(this.data)],
      aria: {
        decal: {
          show: !!this.settings.decals,
          decals: this.settings.decals,
        },
      },
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
          top: '5%',
          width: '90%',
          left: '0%',
          right: '5%',
        },
        legend: {
          left: '0',
          bottom: '0',
          textStyle: {
            fontSize: 12,
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
              show: false,
              margin: 7,
              fontSize: 10,
              fontWeight: 600,
              padding: [0, 2, 0, 2],
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
    } else {
      options = {
        grid: {
          height: 256,
          left: '-20',
          width: '100%',
          top: '15%',
        },
        legend: {
          left: '0%',
          top: 0,
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
              show: false,
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
    }

    setTimeout(() => {
      this.echartsInstance?.setOption(options, { lazyUpdate: true, silent: true });
      this.echartsInstanceWithOptionReady$.next(null);
    }, 1);
  }

  getCategoryName(name: string): string {
    return this.translateService.instant(`${this.settings.categoryTranslationPrefix}${name}`);
  }

  getStackName(name: string): string {
    return this.translateService.instant(`${this.settings.stackTranslationPrefix}${name}`);
  }

  formatLabelValue(value: string, extraCSS): string {
    const capitalizeFirstLetter = (name: string) => name[0].toUpperCase() + name.slice(1);
    if (this.ui.mobileView) {
      value = this.getShorterStackName(value);
      if (value.length > 20 && this.heightClass !== 'very-high') {
        this.heightClass = 'high';
      }
      if (value.split(' ').length > 5) {
        this.heightClass = 'very-high';
      }
    }
    extraCSS = extraCSS.replace(/\./g, '');
    return extraCSS ? `{${extraCSS}|${capitalizeFirstLetter(value)}}` : capitalizeFirstLetter(value);
  }

  getStacksValues(): number[] {
    const stacksValues = [];
    this.data[0]?.values.forEach((_) => stacksValues.push(0));
    this.data?.forEach((stack) => stack.values.forEach((value, index) => (stacksValues[index] += value)));
    return stacksValues;
  }

  private setLabelWidth(): void {
    const chartWidth = this.echartsInstance.getWidth();
    const numberOfStacks = this.settings.stacks.length;
    const numberOfGaps = numberOfStacks - 1;
    const gapWidthInPercentage = 3;
    const gapsWidth = chartWidth * ((numberOfGaps * gapWidthInPercentage) / 100);
    const stacksWidth = chartWidth - gapsWidth;
    const stackWidth = stacksWidth / numberOfStacks - 2;
    this.labelWidth = stackWidth;

    const config = {
      xAxis: {
        axisLabel: {
          width: stackWidth,
        },
      },
    };
    setTimeout(() => {
      this.echartsInstance?.setOption(config, { lazyUpdate: true, silent: true });
    }, 0);
  }

  resizeLabels(): void {
    const settings = {
      xAxis: {
        axisLabel: {
          ...this.labelSettings,
        },
      },
    };
    this.echartsInstance?.setOption(settings, { lazyUpdate: true, silent: true });
  }

  ngOnDestroy(): void {
    this.resizeSubscription$?.unsubscribe();
    super.ngOnDestroy();
  }

  private setTitle(): void {
    const translatedTitle = this.translateService.instant(this.settings?.title);
    this.chartValuesSum$.subscribe((value: number) => {
      value = value || this.chartValuesSum$.getValue();
      this.title$.next(translatedTitle.replace('{{value}}', value ? value : ''));
    });
  }
}
