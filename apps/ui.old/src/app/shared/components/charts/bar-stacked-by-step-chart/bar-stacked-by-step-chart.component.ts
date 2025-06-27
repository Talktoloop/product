import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FiltersService } from '@app/core/services/filters/filters.service';
import { IStackedChartSettings, IStackedTimeline } from '@app/core/services/statistics/model/statistics-filters.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { BarStackedChartComponent } from '@app/shared/components/charts/bar-stacked-chart/bar-stacked-chart.component';
import { TranslateService } from '@ngx-translate/core';
import { bottom, Placement } from '@popperjs/core';
import { ECharts, EChartsOption } from 'echarts';
import { cloneDeep } from 'lodash';

export interface IExtraSummary {
  code: string;
  value: number;
  index: number;
}
@Component({
  selector: 'loop-chart-bar-stacked-by-step',
  templateUrl: './bar-stacked-by-step-chart.component.html',
  styleUrls: ['./bar-stacked-by-step-chart.component.scss'],
})
export class BarStackedByStepChartComponent extends BarStackedChartComponent {
  public readonly CUSTOM_DRAW_INIT_DELAY = 1000;
  seriesHovered = false;
  summaryVisible = true;
  redrawTimeout;
  @Input() settings: IStackedChartSettings;

  @Input() unit: 'stories' | 'cases' = 'cases';
  @Input() set data(value: IStackedTimeline[]) {
    this._data = value;
    this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters);
    this.data && this.refreshSeries(this.mapToSeries(this.data));
  }

  get data(): IStackedTimeline[] {
    return this._data;
  }

  @Input() extraSummary: IExtraSummary;
  constructor(
    public ui: UIService,
    protected translateService: TranslateService,
    protected filtersService: FiltersService,
    private cd: ChangeDetectorRef,
  ) {
    super(ui, translateService, filtersService);
  }

  tooltipPlacement: Placement = bottom;
  tooltipPadding = '1.25rem 1.563rem';
  tooltipWidth = '29rem';
  tooltipDelay = 50;
  lockTooltipMobile = false;
  tooltipOffset = [0, 15];

  barDefaults: Partial<EChartsOption> = {
    type: 'bar',
    barMinWidth: 10,
    barCategoryGap: '20%',
  };

  setup(): void {
    super.setup();
    if (this.settings?.colorPalette) {
      this.chartOption.color = this.settings?.colorPalette;
    }
    this.chartOption.legend = {
      selectedMode: 'multiple',
      itemWidth: 14,
      itemHeight: 14,
      formatter: (name) => {
        return this.getCategoryName(name);
      },
      data: [
        ...this.data.map((d) => ({
          name: d.code,
          icon: d.code === this.extraSummary.code ? 'image://assets/statistics/legend/primary-dashed.svg' : 'circle',
        })),
      ],
    };
  }

  onChartInit(echarts: ECharts): void {
    super.onChartInit(echarts);
    echarts?.on('mouseover', (e) => {
      this.seriesHovered = true;
      this.echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: e.seriesIndex,
        dataIndex: e.dataIndex,
      });
      this.drawCustomElements();
    });
    echarts?.on('mouseout', (e) => {
      this.seriesHovered = false;
      this.drawCustomElements();
    });

    // Draw custom elements after chart is rendered and animated (needed for correct height calculation)
    // Additional redraws later in case of slow device or chart animation
    for (let i = 1; i < 4; i++) {
      setTimeout(() => this.drawCustomElements(), this.CUSTOM_DRAW_INIT_DELAY * i);
    }
  }

  legendselectchanged(selected: { [key: string]: boolean }): void {
    this.summaryVisible = selected.closedCases;
    this.drawCustomElements(400, true);
    this.cd.detectChanges();
  }

  reprocessChartOptions(): void {
    super.reprocessChartOptions();
    this.drawCustomElements(this.CUSTOM_DRAW_INIT_DELAY);
    let options;
    if (this.ui.mobileView) {
      options = {
        grid: {
          height: 300,
          top: 20,
          width: '100%',
          left: '0%',
          right: '0%',
        },
        legend: {
          show: false,
        },
        yAxis: {
          show: false,
          min: 0,
        },
      };
    } else {
      options = {
        grid: {
          height: 310,
          left: '0',
          width: '100%',
          top: 40,
        },
        legend: {
          show: true,
        },
        yAxis: {
          show: false,
          min: 0,
        },
      };
    }

    setTimeout(() => {
      this.echartsInstance?.setOption(options, { lazyUpdate: true, silent: true });
      this.echartsInstanceWithOptionReady$.next(null);
    }, 1);
  }

  /**
   * Function draws custom elements on charts -
   * arrows between bars, lines
   *
   * @param delay delay of draw
   * @param secondRedraw set to true to perform additional redraw 1.5*CUSTOM_DRAW_INIT_DELAY (case for chart animation)
   */
  protected drawCustomElements(delay = 10, secondRedraw = false): void {
    if (!this.echartsInstance) {
      return;
    }
    const getGraphicsOptions = () => {
      const chartWidth = this.echartsInstance.getZr().getWidth();
      const items = {};
      const elements = [];
      this.echartsInstance
        .getZr()
        .handler.storage.getDisplayList()
        .filter((element) => {
          return element.name === 'item';
        })
        .map((el) => {
          if (!Array.isArray(items[el.parent.id])) {
            items[el.parent.id] = [];
          }
          items[el.parent.id].push(el);
        });
      const lineWidth = 10;

      const lineDetailed = Object.keys(items)[0];

      items[lineDetailed]?.sort((a, b) => a.id - b.id);
      items[lineDetailed]?.forEach((element, index) => {
        const { x, y, width, height } = element.shape;
        let gapSize = (chartWidth - lineDetailed.length * width) / lineDetailed.length / 4 - lineWidth;
        gapSize -= 2;
        if (this.ui.mobileView) {
          gapSize = gapSize / 2 - 1;
        }
        if (index < items[lineDetailed]?.length - 1 && this.getStacksValues()[index + 1] > 0) {
          elements.push(
            {
              type: 'polyline',
              x: 0,
              y: 0,
              z: 1,
              $action: 'replace',
              shape: {
                points: [
                  [x + width + gapSize, y - 2],
                  [x + width + gapSize + lineWidth, y - 2],
                  [x + width + gapSize + lineWidth, y + height + 2],
                  [x + width + gapSize, y + height + 2],
                ],
              },
              style: {
                lineWidth: 1,
                stroke: '#DFDBDB',
              },
            },
            {
              type: 'image',
              $action: 'replace',
              x: x + width + gapSize + lineWidth - 12,
              y: y + height / 2 - 20,
              z: 9,
              style: {
                image: `assets/statistics/icons/arrow-right-white_bg.png`,
              },
            },
            {
              type: 'image',
              $action: 'replace',
              x: x + width + gapSize + lineWidth - 10,
              y: y + height / 2 - 10,
              z: 10,
              style: {
                image: `assets/statistics/icons/arrow-right${this.seriesHovered ? '-hover' : ''}.svg`,
              },
            },
          );
        }
      });

      return {
        graphic: {
          elements: [...cloneDeep(elements)],
        },
      } as Partial<EChartsOption>;
    };
    if (this.redrawTimeout) {
      clearTimeout(this.redrawTimeout);
    }

    this.redrawTimeout = setTimeout(() => {
      try {
        this.echartsInstance?.setOption(getGraphicsOptions(), { replaceMerge: 'graphic', lazyUpdate: true });
        secondRedraw && this.drawCustomElements(this.CUSTOM_DRAW_INIT_DELAY * 1.5);
      } catch (e) {}
    }, delay);
  }

  stackClicked(stack: number): void {
    const chartWidth = this.echartsInstance?.getZr()?.getWidth();
    const itemsCount = this.data?.[0]?.values?.length;
    try {
      // This throws when all legend bars are disabled
      // It means that extraSummary only is selected
      const el = this.echartsInstance
        .getZr()
        .handler.storage.getDisplayList()
        .filter((element) => {
          return element.name === 'item';
        })[0] as any;
      const elWidth = el.shape.width;

      setTimeout(
        () =>
          this.echartsInstance.dispatchAction({
            type: 'showTip',
            x: (chartWidth / itemsCount) * (stack + 1) - elWidth / 2 - 15,
            y: 65,
          }),
        1,
      );
    } catch (_e) {
      // Do nothing, we can't display tooltip
    }
  }

  stackMouseLeave(_index: number): void {
    setTimeout(
      () =>
        this.echartsInstance.dispatchAction({
          type: 'hideTip',
        }),
      1,
    );
  }

  onResize(): void {
    super.onResize();
    this.drawCustomElements();
  }

  getBackgroundGradient(): string {
    return `repeating-linear-gradient(
      45deg,
      ${this.settings.colorPalette[0]},
      ${this.settings.colorPalette[0]} 2px,
      ${this.settings.colorPalette[this.extraSummary?.index]} 3px,
      ${this.settings.colorPalette[this.extraSummary?.index]} 6px
    )`;
  }
}
