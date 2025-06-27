import { ChangeDetectorRef, Component, Injector, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { left, Placement } from '@popperjs/core';
import { InputComponent } from '@shared/components/input/input.component';
import { FormHelperService } from '@shared/services/form-helper.service';

type TextareaTheme = 'default' | 'purple';

@Component({
  selector: 'loop-textarea',
  templateUrl: './textarea-v2.component.html',
  styleUrls: ['./textarea-v2.component.scss'],
})
export class TextareaV2Component extends InputComponent {
  @Input() infoTooltip: string;
  @Input() theme: TextareaTheme = 'default';
  @Input() autosize: boolean;
  @Input() minRows: number;

  tooltipDelay = 100;
  tooltipOffset = [0, 15];
  tooltipPadding = '1.25rem 1.563rem';
  tooltipPlacement: Placement = left;
  tooltipWidth = '29rem';

  get valueLength(): number {
    return (this.value as string)?.length || 0;
  }

  get showHeader(): boolean {
    return this.maxLength != null;
  }

  constructor(cd: ChangeDetectorRef, formHelper: FormHelperService, protected ngControl: NgControl, protected injector: Injector) {
    super(cd, formHelper, ngControl, injector);
  }
}
