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
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgControl, UntypedFormControl } from '@angular/forms';
import { InputComponent } from '@app/shared/components/input/input.component';
import { UIService } from '@core/services/ui/ui.service';
import { AutocompleteOption } from '@shared/components/autocomplete/autocomplete-option.model';
import { FormHelperService } from '@shared/services/form-helper.service';
import { ControlValueAccessorBase } from '@shared/utils/control-value-accessor-base';
import { ModalRoutingService } from '@shared/utils/modal-routing.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'loop-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent extends ControlValueAccessorBase<string> implements OnInit, OnDestroy {
  private userClickedBackButton$: Subscription;
  @Input() set options(value: AutocompleteOption[]) {
    this._options = value;
    this.isFirstClick && this.value && this.setTextBasedOnId();
  }

  get options(): AutocompleteOption[] {
    return this._options;
  }

  @ViewChild(InputComponent) inputComponent: InputComponent;
  @Input() hint?: string;
  @Input() extraActionButtonText?: string;
  @Input() customPrefix: TemplateRef<any>;
  @Input() customSuffix: TemplateRef<any>;
  @Input() addNewLabel: string;
  private _options: AutocompleteOption[] = [];
  @Input() showAddOption: boolean;
  @Input() showAllWhenEmpty: boolean;
  @Input() showClearBtn = true;
  @Input() openDropDownOnSuffixClick = false;
  @Input() maxLength: number;
  @Input() placeholder = '';
  @Input() showErrorIcon: boolean;
  @Input() mobileTitle: string;
  @Input() prefix: boolean;
  @Input() prefixTemplate: TemplateRef<any> | null;
  @Input() suffixTemplate: TemplateRef<any> | null;
  @Input() countryTemplate: TemplateRef<any> | null;
  @Input() suffix: boolean;
  @Input() shouldRouteForMobile = true;
  @Input() shouldSetTextBasedOnId = false;
  @Output() queryChanged = new BehaviorSubject<string>(null);
  @Output() addClicked = new EventEmitter<string>();
  @Output() focusedOut = new EventEmitter<any>();
  @Output() extraButtonClicked = new EventEmitter<Event>();

  disabled: boolean;

  inputControl = new UntypedFormControl(null);
  inputFocused = false;
  showDropdown = false;
  showDropdownModal = false;
  forceOpen = false;
  isMobile: boolean;
  isFirstClick = true;
  lastOption: AutocompleteOption;

  get isClearBtnVisible(): boolean {
    return this.isMobile && this.showClearBtn;
  }

  get errorMessage$(): Observable<string> {
    return this.formHelperService.getControlError(this.control);
  }

  get isInvalid(): boolean {
    return this.formHelperService.getIsInvalid(this.control);
  }

  get shouldShowDropdown(): boolean {
    if (this.forceOpen) {
      return this.forceOpen;
    }
    if (this.isMobile) {
      return this.showDropdownModal && (this.showAllWhenEmpty || this.inputControl.value?.length);
    }
    return (
      this.showDropdown &&
      this.inputFocused &&
      (this.showAllWhenEmpty || this.inputControl.value?.length) &&
      (!!this._options?.length || this.showAddOption)
    );
  }

  constructor(
    private ui: UIService,
    private cd: ChangeDetectorRef,
    private formHelperService: FormHelperService,
    private readonly modalRoutingService: ModalRoutingService,
    protected ngControl: NgControl,
    protected injector: Injector,
  ) {
    super(ngControl, injector);
  }

  onFocusOut(): void {
    this.focusedOut.emit();
  }

  writeValue(id: string): void {
    this.value = id;
    (this.isFirstClick || this.shouldSetTextBasedOnId) && this.value && this.options && this.setTextBasedOnId();
    !this.value && this.inputControl.setValue(null);
    this.cd.detectChanges();
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputControl.disable();
      this.disabled = true;
    } else {
      this.inputControl.enable();
      this.disabled = false;
    }
  }

  ngOnInit(): void {
    this.listenToMobileBreakpointChange();
    this.addChangeListener();
  }

  ngOnDestroy(): void {
    this.showDropdown = false;
    this.cd.detectChanges();
    super.ngOnDestroy();
  }

  private setTextBasedOnId(): void {
    const value = this._options.find((option) => option.id === this.value);
    this.inputControl.setValue(value?.name || '', { emitEvent: false });
  }

  private listenToMobileBreakpointChange(): void {
    this.ui.mobileView$.pipe(takeUntil(this.destroyed$)).subscribe((isMobile) => {
      this.isMobile = isMobile;
      this.cd.detectChanges();
    });
  }

  private addChangeListener(): void {
    this.inputControl.valueChanges
      .pipe(
        tap(() => (this.inputFocused = true)),
        debounceTime(100),
        takeUntil(this.destroyed$),
      )
      .subscribe((query) => {
        this.queryChanged.next(query);
        this.cd.detectChanges();
      });
  }

  onInputKeyPress(event: KeyboardEvent): void {
    this.showDropdown = true;
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  handleInputFocus(): void {
    this.inputFocused = true;
  }

  handleSelectClickOut(event?: MouseEvent): void {
    event?.preventDefault();
    event?.stopImmediatePropagation();
    this.closeDropDownModal(!!event);
    if (!this.inputControl.value) {
      this.writeValue(null);
    }
  }

  handleOptionClick(option: AutocompleteOption, event?: Event): void {
    event?.preventDefault();
    event?.stopImmediatePropagation();
    this.lastOption = option;
    this.onChange(option.id);
    this.inputControl.setValue(option.name, { emitEvent: false });
    this.closeDropDownModal(!!event);
  }

  handleAddOptionClick(event: Event): void {
    event?.stopImmediatePropagation();
    const value = this.inputControl.value;
    this.addClicked.emit(value);
    this.closeDropDownModal(!!event);
  }

  trackById(_: number, organization: AutocompleteOption): any {
    return organization.id;
  }

  closeDropDownModal(isFromCloseButton?: boolean): void {
    this.showDropdownModal = false;
    this.showDropdown = false;
    this.forceOpen = false;
    if (this.isMobile && this.shouldRouteForMobile) {
      this.modalRoutingService.routeFromModal(isFromCloseButton);
      this.userClickedBackButton$?.unsubscribe();
    }
    // patch for a problem when sometimes after closing the modal the change was not propagated properly to plain input
    this.inputControl.patchValue(this.inputControl.value, { emitEvent: false });
    this.cd.detectChanges();
  }

  handleInputClicked(event?: Event): void {
    event?.stopPropagation?.();
    event?.preventDefault?.();
    this.isFirstClick && (this.isFirstClick = false);
    this.inputFocused = true;
    if (this.isMobile) {
      if (!this.showDropdownModal) {
        this.modalRoutingService.routeToModal();
      }
      this.showDropdownModal = true;
      if (this.showDropdownModal) {
        setTimeout(() => this.focusInput());
      }
      this.userClickedBackButton$ = this.modalRoutingService.userClickedBackButton$.subscribe(() => {
        if (this.showDropdownModal) {
          this.closeDropDownModal(false);
        }
      });
    }
    this.cd.detectChanges();
  }

  handleInputClearClicked(event?: Event): void {
    event?.stopPropagation?.();
    event?.preventDefault?.();
    this.inputControl.setValue(null);
    this.onChange(null);
  }

  focusInput(): void {
    this.inputComponent.focusInput();
  }

  handleSuffixClick(): void {
    if (!this.openDropDownOnSuffixClick) {
      return;
    }
    this.forceOpen = !this.forceOpen;
    if (this.forceOpen) {
      this.queryChanged.next(this.inputControl.value);
    }
  }
}
