import { Component, Input } from '@angular/core';
import { IStoriesRepliesGroupped } from '@app/core/services/statistics/model/statistics-filters.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { BaseChartComponent } from '@app/shared/components/charts/base-chart.component';
import { IAbstractChart } from '@app/shared/components/charts/base-chart.interface';
import { FiltersService } from '@core/services/filters/filters.service';
import { TranslateService } from '@ngx-translate/core';
import { EChartsOption, SeriesOption } from 'echarts';
import { merge } from 'lodash';
import { chartConfig } from '../config/bar-groupped.config';
import { colors } from '../config/defaults.config';

@Component({
  selector: 'loop-chart-bar-groupped',
  templateUrl: './bar-groupped-chart.component.html',
  styleUrls: ['./bar-groupped-chart.component.scss'],
})
export class BarGrouppedChartComponent extends BaseChartComponent implements IAbstractChart {
  @Input() integrateFiltersWithLegend = false;
  @Input() unit: 'stories' | 'cases' = 'stories';
  // TODO: make similar settings as in BarStacked + extract global settings for later reuse
  // This component is used in 1 place only so far, so probably todo when will be needed to reuse
  @Input() titleTKey: string; // translation key for title

  @Input() set data(values: IStoriesRepliesGroupped[]) {
    this._data = values;
    this.data && this.refreshSeries(this.mapToSeries(this.data));
  }

  get data(): IStoriesRepliesGroupped[] {
    return this._data;
  }

  get chartSeries(): SeriesOption[] {
    return this.echartsInstance?.getOption()?.series as SeriesOption[];
  }

  _data: IStoriesRepliesGroupped[];
  series: IStoriesRepliesGroupped[];

  seriesNames = [
    this.translateService.instant('statistics.storiesAndReplies.storyType'),
    this.translateService.instant('statistics.storiesAndReplies.repliesCommunity'),
    this.translateService.instant('statistics.storiesAndReplies.repliesOrganization'),
  ];
  constructor(public ui: UIService, private translateService: TranslateService, protected filtersService: FiltersService) {
    super(ui, chartConfig, filtersService);
  }

  mapToSeries(data: IStoriesRepliesGroupped[]): SeriesOption[] {
    const series = [];
    const barDefaults: Partial<EChartsOption> = {
      type: 'bar',
      barMaxWidth: 45,
      barMinWidth: 10,
      barGap: '5%',
      barCategoryGap: '8',
    };

    const barStyle = {
      borderRadius: [4, 4, 0, 0],
      borderWidth: 1,
      borderColor: 'white',
    };

    const pData = [[], [], []];
    data.forEach((d, i) => {
      const itemStyle = {
        ...barStyle,
        color: colors[i],
      };
      pData[0].push({
        value: d.stories[0],
        itemStyle: {
          ...itemStyle,
          borderColor: !!d.stories[0] ? 'white' : 'transparent',
        },
        name: d.code,
      });
      pData[1].push({
        value: d.replies[0],
        itemStyle: {
          ...itemStyle,
          borderColor: !!d.replies[0] ? 'white' : 'transparent',
          borderRadius: !!d.replies[1] ? 0 : [4, 4, 0, 0],
        },
        name: d.code,
      });
      pData[2].push({
        value: d.replies[1],
        itemStyle: {
          ...itemStyle,
          borderColor: !!d.replies[1] ? 'white' : 'transparent',
        },
        name: d.code,
      });
    });

    let entity: Partial<EChartsOption> = {
      ...barDefaults,
      stack: 'one',
      name: this.seriesNames[0],
      data: pData[0],
      label: {
        show: true,
        position: 'top',
        formatter: (params) => {
          return params.value > 0 && !this.ui.mobileView ? params.value : '';
        },
        color: '#31135e',
        fontWeight: 600,
      },
      itemStyle: {
        color: 'gray',
      },
    };
    series.push(entity);
    entity = {
      ...barDefaults,
      stack: 'two',
      name: this.seriesNames[1],
      data: pData[1],
      label: {
        show: false,
      },
      itemStyle: {
        color: 'gray',
      },
    };
    series.push(entity);
    entity = {
      ...barDefaults,
      stack: 'two',
      name: this.seriesNames[2],
      data: pData[2],
      label: {
        show: true,
        position: 'top',
        formatter: (params) => {
          const value = params.value + (pData[1]?.[params.dataIndex]?.value || 0);
          return value > 0 && !this.ui.mobileView ? value : '';
        },
        color: '#31135e',
        fontWeight: 600,
      },
      itemStyle: {
        color: 'gray',
      },
    };
    series.push(entity);

    return series;
  }

  setup(): void {
    const options = {
      xAxis: {
        data: this._data.map((e) => e.code),
        axisLabel: {
          show: true,
          interval: 0,
          formatter: (value, index) => {
            return this.getCategoryName(value);
          },
          overflow: 'truncate',
          ellipsis: '.',
        },
        axisPointer: {
          show: true,
          triggerTooltip: true,
          type: 'none',
          animation: false,
          label: {
            show: true,
            formatter: (value, index) => {
              return `${this.getCategoryName(value.value)}`;
            },
            backgroundColor: 'white',
            borderColor: 'transparent',
          },
        },
      },
      legend: {
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
          padding: 2,
        },
        data: [
          {
            name: this.seriesNames[0],
            icon: 'image://assets/statistics/legend/solid.svg',
          },
          {
            name: this.seriesNames[1],
            icon: 'image://assets/statistics/legend/dashed-rotated.svg',
          },
          {
            name: this.seriesNames[2],
            icon: 'image://assets/statistics/legend/dashed-vertical.svg',
          },
        ],
      },
      aria: {
        decal: {
          show: true,
          decals: [
            {
              symbol: 'none',
            },
            {
              symbol: 'line',
              dashArrayX: [1, 1],
              dashArrayY: [7, 2],
              rotation: 45,
              color: 'white',
              symbolSize: 20,
            },
            {
              symbol: 'line',
              dashArrayX: [1, 1],
              dashArrayY: [7, 2],
              rotation: 1.56,
              color: 'white',
              symbolSize: 20,
            },
          ],
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
                y: 20,
              };
          const items = this._data.length;
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
          const index = Array.isArray(params) ? params[0]?.dataIndex : params.dataIndex;
          const items = this._data.length;
          const extraClass = index > items - 3 ? 'tooltip--right' : index < 2 ? 'tooltip--left' : '';
          let content = `<div class="stats-tooltip ${extraClass}">
            <div><span class="axis-label ${Array.isArray(params) ? 'hide-mobile' : ''}">${this.getCategoryName(
            params[0]?.name || params?.name,
          )}</span></div><div>`;

          const getSeriesName = (name) => {
            return name === this.translateService.instant('statistics.storiesAndReplies.storyType')
              ? this.translateService.instant('statistics.storiesAndReplies.totalStories')
              : name;
          };
          if (Array.isArray(params)) {
            params.forEach((p) => {
              content += `<p><span class="content"><span>${getSeriesName(p.seriesName)}</span><span>${
                p.value
              } ${this.translateService.instant(`global.unitsLong.${this.unit}`)}</span></span></p>`;
            });
          } else {
            content += `<p><span class="content">${params.data?.value} ${getSeriesName(params.seriesName).toLowerCase()}</span></p>`;
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
          top: '5%',
          width: '90%',
          left: '0%',
          right: '5%',
        },
        legend: {
          left: '0',
          bottom: '0',
          itemGap: 10,
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
            width: window.innerWidth < 450 ? 35 : 60,
          },
          axisPointer: {
            label: {
              color: '#1a1a1a',
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
    } else {
      options = {
        grid: {
          height: 256,
          left: '0',
          width: '100%',
          top: '15%',
        },
        title: {
          textStyle: {
            fontSize: 24,
          },
        },
        legend: {
          left: '0%',
          top: '0',
          itemGap: 20,
          textStyle: {
            fontSize: 16,
          },
        },
        xAxis: {
          axisLabel: {
            padding: 9,
            backgroundColor: 'transparent',
            fontSize: 14,
            width: 120,
          },
          axisPointer: {
            label: {
              color: '#1a1a1a',
              margin: 12,
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
    }, 1);
  }

  getCategoryName(name: string): string {
    return this.translateService.instant(`category.${name}`);
  }
}
