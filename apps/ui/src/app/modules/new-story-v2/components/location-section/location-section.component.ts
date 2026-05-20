import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocationModalComponent } from '@app/modules/new-story-v2/modals/location-modal/location-modal.component';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { RegionData } from '@shared/components/location/location.component';

@Component({
  selector: 'loop-location-section',
  templateUrl: './location-section.component.html',
  styleUrls: ['./location-section.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationSectionComponent {
  @Input() regionIdFormControl: FormControl<number>;
  @Input() countryIdFormControl: FormControl<number>;
  @Input() isSensitive: boolean;
  @Output() place$ = new EventEmitter<string>();
  @Output() countryCode$ = new EventEmitter<string>();

  constructor(private modalService: ModalServiceV2) { }

  onModalOpen(): void {
    this.modalService.open(LocationModalComponent, {
      isSensitive: this.isSensitive,
    });
  }

  onRegionDataChange(regionData: RegionData) {
    this.countryCode$.emit(regionData.country);
    this.regionIdFormControl.setValue(regionData.regionId);
    this.countryIdFormControl.setValue(regionData.countryId);
    this.countryIdFormControl.updateValueAndValidity();
    this.regionIdFormControl.updateValueAndValidity();
  }
}
