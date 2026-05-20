import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AutocompleteOption } from '@app/shared/components/autocomplete/autocomplete-option.model';
import { ControlValueAccessorBase } from '@app/shared/utils/control-value-accessor-base';

@Component({
  selector: 'loop-language-autocomplete',
  templateUrl: './language-autocomplete.component.html',
  styleUrls: ['./language-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageAutocompleteComponent extends ControlValueAccessorBase<AutocompleteOption> {
  @Input() placeholder: string;
  @Input() disabled: boolean;

  @Input() set existingOptions(options: AutocompleteOption[]) {
    this._existingOptions = options;
    this.matchingLanguages = options;
    this.cd.detectChanges();
  }

  _existingOptions: AutocompleteOption[];
  matchingLanguages: AutocompleteOption[] = [];

  constructor(protected ngControl: NgControl, private cd: ChangeDetectorRef, protected injector: Injector) {
    super(ngControl, injector);
  }

  handleQueryChange(query: string): void {
    this.matchingLanguages = !query?.length
      ? this._existingOptions
      : this.matchingLanguages?.filter((languageOptions) => languageOptions.name?.toLowerCase().includes(query.toLowerCase()));
    this.cd.markForCheck();
  }

  onValueChange(event): void {
    this.onChange(event);
  }
}
