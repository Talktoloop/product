import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FiltersService } from '@core/services/filters/filters.service';
import { IPresetFilters, Preset, PresetData } from '@core/services/api/model/preset.model';
import { FormGroup } from '@angular/forms';
import LoopIcon from '@app/shared/loop-design-system/components/loop-icon';
import { FiltersPresetService } from "@core/services/api/filters-preset/filters-preset.service";

@Component({
  selector: 'loop-filters-preset',
  templateUrl: './filters-preset.component.html',
  styleUrls: ['./filters-preset.component.scss'],
})
export class FiltersPresetComponent implements OnInit {
  protected readonly LoopIcon = LoopIcon;

  @Input() form: FormGroup;
  @Input() title: string;
  @Output() presetApplied = new EventEmitter<IPresetFilters>();

  savedFilters: Preset[] = [];
  presetData: PresetData | IPresetFilters;
  showModalName = false;
  showModalButtons = false;
  presetName = '';
  modalType: 'share' | 'update' | 'delete' = null;
  currentPreset: Preset;
  highlightTimers: { [id: string]: any } = {};
  isSharing: { [presetId: string]: boolean } = {};
  isUpdating: { [presetId: string]: boolean } = {};

  constructor(
    private filtersService: FiltersService,
    private presetFiltersService: FiltersPresetService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.loadSavedFilters();
  }

  openModalButtons(type: 'share' | 'update' | 'delete', preset: Preset): void {
    this.modalType = type;
    this.currentPreset = preset;
    this.showModalButtons = true;
  }

  closeModalButtons(): void {
    this.showModalButtons = false;
    this.modalType = null;
  }

  openSavePresetModal(): void {
    this.showModalName = true;
  }

  closeModalSave(): void {
    this.showModalName = false;
    this.presetName = '';
  }

  onSaveClick(): void {
    this.createPreset(this.presetName);
    this.closeModalSave();
  }

  onModalOutsideClick(event: MouseEvent): void {
    this.showModalName = false;
    this.showModalButtons = false;
    event.stopPropagation();
  }

  private loadSavedFilters(): void {
    this.presetFiltersService.getPresetFilters().subscribe((presets) => {
      this.savedFilters = presets.map((preset) => ({
        id: preset.id,
        name: preset.name,
        filters: preset.filters,
      }));
      this.cdr.detectChanges();
    });
  }

  private createPreset(presetName: string): void {
    this.presetData = {
      presetName,
      filters: {...this.form.value},
    };

    this.presetFiltersService.createFiltersPreset(this.presetData).subscribe(() => {
      this.loadSavedFilters();
      this.presetData = null;
    });
  }

  private sharePreset(preset: Preset): Promise<void> {
    return new Promise((resolve, reject) => {
      this.presetFiltersService.shareUserFiltersPresetToOrganization(preset.id).subscribe({
        next: () => {
          this.cdr.detectChanges();
          resolve();
        },
        error: (err) => reject(err),
      });
    });
  }

  private updatePreset(preset: Preset): Promise<void> {
    return new Promise((resolve, reject) => {
      this.presetData = { ...this.form.value };
      this.presetFiltersService.updateUserFiltersPreset(preset.id, this.presetData).subscribe({
        next: () => {
          this.loadSavedFilters();
          resolve();
        },
        error: (err) => reject(err),
      });
    });
  }

  private deletePreset(preset: Preset): void {
    this.presetFiltersService.deleteUserFiltersPreset(preset.id).subscribe(() => {
      this.loadSavedFilters();
    });
  }

  confirmAction(): void {
    const presetId = this.currentPreset?.id;
    if (!presetId) return;

    if (this.modalType === 'share') {
      this.debounceAction(presetId, 'share', () =>
        this.sharePreset(this.currentPreset).then(() => {
          this.highlightPreset(presetId, 'purple');
        })
      );
    } else if (this.modalType === 'update') {
      this.debounceAction(presetId, 'update', () =>
        this.updatePreset(this.currentPreset).then(() => {
          this.highlightPreset(presetId, 'green');
        })
      );
    } else if (this.modalType === 'delete') {
      this.deletePreset(this.currentPreset);
    }
    this.closeModalButtons();
  }

  private debounceAction(presetId: string, type: 'share' | 'update', action: () => Promise<void>): void {
    const isBlocked = type === 'share' ? this.isSharing[presetId] : this.isUpdating[presetId];
    const setBlocked = (value: boolean) => {
      if (type === 'share') {
        this.isSharing[presetId] = value;
      } else {
        this.isUpdating[presetId] = value;
      }
    };

    if (isBlocked) return;

    setBlocked(true);
    action()
      .finally(() => {
        setTimeout(() => setBlocked(false), 900);
      });
  }

  private highlightPreset(presetId: string, color: string): void {
    const highlightClass = color === 'green' ? 'highlight-green' : 'highlight-purple';

    if (this.highlightTimers[presetId]) {
      clearTimeout(this.highlightTimers[presetId]);
    }

    this.highlightTimers[presetId] = setTimeout(() => {
      const presetElement = document.querySelector(`.preset-item[data-id="${ presetId }"]`);
      if (presetElement) {
        presetElement.classList.add(highlightClass);
        this.cdr.detectChanges();

        setTimeout(() => {
          presetElement.classList.remove(highlightClass);
          this.cdr.detectChanges();
        }, 250);
      }
    }, 500);

    this.highlightTimers[presetId] = setTimeout(() => {
      const presetElement = document.querySelector(`.preset-item[data-id="${ presetId }"]`);
      if (presetElement) {
        presetElement.classList.remove(highlightClass);
        this.cdr.detectChanges();
      }
    }, 1100);
  }


  applyPreset(filters: IPresetFilters): void {
    this.form.patchValue(filters, {emitEvent: true});

    this.filtersService.redrawFiltersComp$.subscribe(() => {
      this.cdr.detectChanges();
    });
    this.presetApplied.emit(filters);
  }
}
