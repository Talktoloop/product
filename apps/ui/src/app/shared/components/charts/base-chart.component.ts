import { Component, HostListener, Inject, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { UIService } from '@app/core/services/ui/ui.service';
import { FiltersService } from '@core/services/filters/filters.service';
import { IGetStatisticsFiltersAPI } from '@core/services/statistics/model/statistics-filters.model';
import { SeriesNames } from '@shared/components/charts/model/seriesNames';
import { StoryCategoryMapping } from '@shared/types/story-category.type';
import { ECharts, EChartsOption, SeriesOption } from 'echarts';
import { cloneDeep } from 'lodash';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../base.component';

@Component({ template: '' })
export abstract class BaseChartComponent extends BaseComponent implements OnChanges, OnDestroy {
  chartValuesSum$ = new BehaviorSubject<number>(null);
  _data: any;
  echartsInstance: ECharts;
  chartDefaultOption: Partial<EChartsOption> = {};
  chartOption: EChartsOption = null;
  echartsInstanceWithOptionReady$ = new Subject();
  unit: any;
  get seriesNamesArr(): SeriesNames[] {
    return (this.echartsInstance?.getOption()?.series as SeriesNames[])?.map((s) => ({ ...s, selected: true }));
  }
  private _existingSeriesNames: SeriesNames[];

  lastClickedLegendOption: SeriesNames;
  protected constructor(
    public ui: UIService,
    @Inject('chartDefaultOption') chartDefaultOption: Partial<EChartsOption>,
    protected filtersService: FiltersService,
  ) {
    super();
    this.chartDefaultOption = cloneDeep(chartDefaultOption);
    this.echartsInstanceWithOptionReady$
      .pipe(take(1))
      .subscribe(() => this.selectLegendOptionsBasedOnFilters(this.filtersService.userFilters));
    this.ui.uiClicked$.subscribe(() => this.hideTooltip());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this._data) {
      this.setup();
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.hideTooltip();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.onResize();
  }

  /**
   * Function called on every window resize.
   * Override/Add code only when really needed to execute something on every resize,
   * otherwise use reproccessChartOptions()
   *
   */
  onResize(): void {
    if (!this.echartsInstance) {
      return;
    }

    this.echartsInstance.resize();
    // text overflow: break works only when width for title is set...
    // so need to calculate it dynamically
    const options = {
      title: {
        textStyle: {
          width: this.echartsInstance?.getWidth() * 0.9,
        },
      },
    };

    setTimeout(() => {
      this.echartsInstance?.setOption(options, { lazyUpdate: true, silent: true });
    }, 1);
  }

  selectLegendOptionsBasedOnFilters(filters: IGetStatisticsFiltersAPI): void {
    !this._existingSeriesNames && (this._existingSeriesNames = this.seriesNamesArr);
    if (this.echartsInstance) {
      const newStoryTypes = this._existingSeriesNames.reduce((prev, next) => ({ ...prev, [next.name]: next.selected }), {});
      if (filters?.type) {
        const selectedTypes = filters.type.map((t) => StoryCategoryMapping[t]);
        Object.keys(newStoryTypes).forEach(
          (key) => (newStoryTypes[key] = this.isStoryTypeOption(key) ? false : this.getSensitiveOrRepliesValue(key)),
        );
        selectedTypes.forEach((type) => (newStoryTypes[type] = true));
      } else {
        this._existingSeriesNames.forEach((seriesName) => (newStoryTypes[seriesName.name] = true));
      }
      this.echartsInstance?.setOption(
        {
          legend: { selected: newStoryTypes, animation: false },
        },
        { lazyUpdate: true, silent: true },
      );
      this.setNewExistingItems();
      this.getChartSum();
    }
  }

  setNewExistingItems(): void {
    const selectedStoryTypes = this.echartsInstance?.getOption()?.legend[0].selected;
    Object.keys(selectedStoryTypes).forEach((key) => {
      const foundExistingSeriesName = this._existingSeriesNames.find((sn) => sn.name === key);
      foundExistingSeriesName && (foundExistingSeriesName.selected = selectedStoryTypes[key]);
    });
  }

  private getSensitiveOrRepliesValue(key: string): boolean {
    const foundSeriesName = this._existingSeriesNames.find((sn) => sn.name === key);
    if (this._existingSeriesNames.every((sn) => sn.selected)) {
      return false;
    } else {
      if (this.lastClickedLegendOption?.name === key) {
        foundSeriesName.selected = this.lastClickedLegendOption.selected;
        return foundSeriesName.selected;
      }
    }
    return foundSeriesName.selected;
  }

  private isStoryTypeOption(type: string): boolean {
    return type !== 'sensitive' && type !== 'comments';
  }

  onChartInit(ecInstance: ECharts): void {
    this.getChartSum();
    this.echartsInstance = ecInstance;
    this.reprocessChartOptions();
    this.onResize();
    this.ui.mobileView$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.reprocessChartOptions());
    this.echartsInstance.on('legendselectchanged', (params: any) => {
      this.lastClickedLegendOption = { name: params.name, selected: params.selected[params.name] };
      const paramsCopy = { name: `${params.name}`, selected: Object.assign({}, { ...params.selected }) };
      let currentUnselecting = false;
      let itemsSelected = 0;
      let itemsUnselected = 0;
      Object.keys(paramsCopy.selected).forEach((key) => {
        if (!!paramsCopy.selected[key]) {
          itemsSelected++;
        } else {
          itemsUnselected++;
        }
        if (key === paramsCopy.name && !paramsCopy.selected[key]) {
          currentUnselecting = true;
        }
      });
      if (itemsSelected === 0) {
        // SELECT ALL
        Object.keys(paramsCopy.selected).forEach((key) => {
          paramsCopy.selected[key] = true;
        });
      } else if (itemsUnselected === 1 && currentUnselecting) {
        // SELECT SINGLE ONE
        Object.keys(paramsCopy.selected).forEach((key) => {
          paramsCopy.selected[key] = key === paramsCopy.name;
        });
      } else {
        // ADD CURRENT TO SELECTION
        Object.keys(paramsCopy.selected).forEach((key) => {
          if (key === paramsCopy.name) {
            paramsCopy.selected[key] = params.selected[key];
          }
        });
      }

      this.echartsInstance?.setOption(
        {
          legend: { selected: paramsCopy.selected, animation: false },
          tooltip: { zindex: 7000 },
        },
        { lazyUpdate: true, silent: true },
      );

      this.setChartSelectedCategoriesValuesSum(paramsCopy.selected);

      this.legendselectchanged(paramsCopy.selected);
    });
  }

  /**
   * Method called on echarts legendselectchanged after custom reverse selection logic
   *
   * @param selected new selected object
   */
  protected legendselectchanged(selected: { [key: string]: boolean }): void {
    // TODO
  }

  /**
   * Function is executed on breakpoints.
   * Overrides options for mobile/desktop.
   */
  reprocessChartOptions(): void {
    if (!this.chartOption) {
      return;
    }

    if (this.ui.mobileView) {
    } else {
    }
  }

  /**
   * Funciton called OnChanges
   * Re-setup general chart options
   */
  abstract setup(): void;

  /**
   * Function refresh series object in chart
   * @param data series object
   */
  protected refreshSeries(data: SeriesOption[]): void {
    setTimeout(
      () =>
        this.echartsInstance?.setOption(
          {
            series: [...data],
          },
          { lazyUpdate: true, silent: true },
        ),
      1,
    );
  }

  ngOnDestroy(): void {
    this.echartsInstance?.dispose();
    this.echartsInstance = null;
    super.ngOnDestroy();
  }

  hideTooltip(): void {
    this.echartsInstance?.dispatchAction({
      type: 'hideTip',
    });
  }

  private getChartSum() {
    let sum = 0;
    // If data is object with properties (f.e. it has 'gender' and 'age' keys with arrays under them)
    if (!Array.isArray(this._data) && typeof this._data === 'object') {
      Object.keys(this._data).forEach((key) => {
        this._data[key].forEach((category) =>
          category?.values?.forEach((value) => {
            if (!isNaN(value)) {
              sum += value;
            } else {
              return;
            }
          }),
        );
        this.chartValuesSum$.next(sum);
      });
    } else {
      if (this._data.length) {
        this._data.forEach((category) =>
          category?.values?.forEach((value) => {
            if (!isNaN(value)) {
              sum += value;
            } else {
              return;
            }
          }),
        );
        this.chartValuesSum$.next(sum);
      }
    }
  }

  private setChartSelectedCategoriesValuesSum(selected: any): void {
    let chartSelectedSum = 0;
    Object.entries(selected)?.forEach((selected: [string, boolean]) => {
      if (selected[1]) {
        let categorySum = 0;
        if (!Array.isArray(this._data) && typeof this._data === 'object') {
          Object.keys(this._data).some((key) => {
            const foundCategory = this._data[key].find((category) => category.code === selected[0]);
            if (foundCategory) {
              foundCategory.values.forEach((categoryValue) => (categorySum += categoryValue));
              chartSelectedSum += categorySum;
              return true;
            }
          });
        } else {
          const foundCategory = this._data.find((category) => category.code === selected[0]);
          if (foundCategory) {
            foundCategory.values.forEach((categoryValue) => (categorySum += categoryValue));
            chartSelectedSum += categorySum;
          }
        }
      }
    });
    this.chartValuesSum$.next(chartSelectedSum);
  }
}
