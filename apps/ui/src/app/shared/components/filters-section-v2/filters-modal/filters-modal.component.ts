import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnDestroy, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FilterDisplay } from '@app/shared/components/filters-section-v2/filter-dropdown/filter-dropdown.component';
import { FilterType, IFilterV2 } from '@app/shared/components/filters-section-v2/filter.model';
import { DefaultFiltersModalComponent } from '@app/shared/components/filters/default-filters-modal.component';
import { UIService } from '@core/services/ui/ui.service';
import { MultiRegionData } from '@shared/components/location/location.component';
import { ModalRoutingService } from '@shared/utils/modal-routing.service';
import { Subject, Subscription } from 'rxjs';
import { IPresetFilters } from "@core/services/api/model/preset.model";
import { AuthService } from "@core/services/auth/auth.service";

@Component({
  selector: 'loop-filters-modal',
  templateUrl: './filters-modal.component.html',
  styleUrls: ['./filters-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersModalComponent extends DefaultFiltersModalComponent implements OnDestroy {
  @Input() filterData: any;
  @Input() form: UntypedFormGroup;
  @Input() regionId: number;
  @Input() config: IFilterV2<any>[];
  @Output() regionIdChanged = new EventEmitter<number>();

  isAllFilters: boolean;
  isCases: boolean;
  invisibleControls: string[]; // Filters internalNames array
  nestedMode: string;
  FilterType = FilterType;

  applyVisible: boolean;
  lastScrollTop: number;
  FilterDisplay = FilterDisplay;
  isAuthenticated: boolean;
  private userClickedBackButton$: Subscription;

  constructor(
    @Inject('close$') close$: Subject<boolean>,
    @Inject('isAllFilters') isAllFilters: boolean,
    public ui: UIService,
    private cd: ChangeDetectorRef,
    private modalRoutingService: ModalRoutingService,
    private authService: AuthService
  ) {
    super(close$);
    this.isAllFilters = isAllFilters;
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  private isNestedMode(config: IFilterV2<any>): boolean {
    return this.nestedMode ? this.nestedMode === config.internalName : true;
  }

  onNestedModeClick(config: IFilterV2<any>): void {
    this.nestedMode = config.internalName;
    const modalRef = document.getElementsByClassName('modal')[0];
    modalRef?.scrollTo({ top: 0 });
    this.lastScrollTop = modalRef?.scrollTop | 0;
    this.modalRoutingService.routeToModal();
    this.userClickedBackButton$ = this.modalRoutingService.userClickedBackButton$.subscribe(() => this.onNestedModeClose());
    this.cd.detectChanges();
  }

  shouldRender(config: IFilterV2<any>): boolean {
    const shouldRenderInvisibleControl = () =>
      (this.isAllFilters ? this.isNestedMode(config) : this.invisibleControls.includes(config.internalName)) && this.isNestedMode(config);
    if (config.type === FilterType.PRESET && !this.isAuthenticated) {
      return false;
    }
    return shouldRenderInvisibleControl();
  }

  onNestedModeClose(event?: Event): void {
    this.userClickedBackButton$.unsubscribe();
    event?.stopPropagation();
    event?.preventDefault();
    this.nestedMode = null;
    const modalRef = document.getElementsByClassName('modal')[0];
    modalRef?.scrollTo({ top: this.lastScrollTop });
    this.lastScrollTop = null;
    this.cd.detectChanges();
    this.modalRoutingService.routeFromModal(!!event);
  }

  onDataChange(regionData: MultiRegionData) {
    this.form.get('region').setValue(regionData);
    this.confirm.emit();
  }
  onPresetApplied(filters: IPresetFilters): void {
    this.form.patchValue(filters, { emitEvent: false });
    this.confirm.emit();
    this.cd.markForCheck();
    this.onModalClose();
  }
}
