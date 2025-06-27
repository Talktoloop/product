import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgControl, UntypedFormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { IBaseEntityN } from '../../../../core/services/api/model/response/base-entity.model';
import { GeolocationService } from '../../../../core/services/geolocation/geolocation.service';
import { ControlValueAccessorBase } from '../../../utils/control-value-accessor-base';
import { AutocompleteComponent } from '../../autocomplete/autocomplete.component';

@Component({
  selector: 'loop-location-filter',
  templateUrl: './location-filter.component.html',
  styleUrls: ['./location-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationFilterComponent extends ControlValueAccessorBase<string> implements OnInit, OnDestroy {
  @ViewChild(AutocompleteComponent) autoComplete: AutocompleteComponent;
  @Input() formControlName: string;
  @Input() formControl: UntypedFormControl;
  @Input() userCountry: string;
  @Input() initValue: string;
  @Output() locationQueryChanged = new EventEmitter<string>();

  queryChanged$ = new Subject<string>();
  private readonly requestDebounceTime = 400;
  query: string;
  matchingPlaces: IBaseEntityN[];
  places: IBaseEntityN[] = [];
  selectedPlace: string;
  isInit = true;

  constructor(
    public geoService: GeolocationService,
    protected ngControl: NgControl,
    private cd: ChangeDetectorRef,
    protected injector: Injector,
  ) {
    super(ngControl, injector);
  }

  ngOnInit(): void {
    this.queryChanged$.pipe(debounceTime(this.requestDebounceTime), takeUntil(this.destroyed$)).subscribe((q) => {
      this.handleQueryChange(q);
    });

    this.control.value && this.handleQueryChange(this.control.value);
  }

  handleQueryChange(query: string): void {
    if (this.query && this.query === query) {
      this.query = query;
      return;
    }
    this.query = query;

    this.matchingPlaces = [];

    !!this.query?.length &&
      this.geoService
        .getPlaceSuggestions(query, this.isInit ? null : this.userCountry)
        .pipe()
        .subscribe((s) => {
          this.places = s.map(
            (p) =>
              ({
                id: p.description,
                content: p.description,
                name: p.description,
              } as IBaseEntityN),
          );
          this.matchingPlaces = !query.length
            ? this.places
            : this.places.filter((place) => place.content.toLowerCase().includes(query.toLowerCase()));
          this.cd.detectChanges();
          this.isInit = false;
        });
  }

  ngOnDestroy(): void {
    this.locationQueryChanged.emit(this.query);
    super.ngOnDestroy();
  }
}
