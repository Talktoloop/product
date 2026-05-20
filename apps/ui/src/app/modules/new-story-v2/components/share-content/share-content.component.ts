import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { UIService } from '@app/core/services/ui/ui.service';
import { BaseComponent } from '@shared/components/base.component';
import { removeMultipleWhitespaces } from '@shared/utils/forms.utils';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-share-content',
  templateUrl: './share-content.component.html',
  styleUrls: ['./share-content.component.scss'],
})
export class ShareContentComponent extends BaseComponent implements OnInit {
  @ViewChild('textareaComponent') textareaComponent: ElementRef;
  @Input() control: UntypedFormControl;
  stateClasses: string;
  state = 0;

  constructor(private ui: UIService) {
    super();
  }

  ngOnInit(): void {
    this.setShareContentStateClasses('');
    this.control.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => this.setShareContentStateClasses(value));
  }

  setShareContentStateClasses(value: string): void {
    const valueLength = value?.trim().length;
    if (!valueLength || valueLength <= 5) {
      this.state = 0;
      this.stateClasses = this.ui.mobileView ? 'state state-zero' : '';
    } else if (valueLength <= 160) {
      this.state = 1;
      this.stateClasses = 'state state-one';
    } else if (valueLength <= 320) {
      this.state = 2;
      this.stateClasses = 'state state-two';
    } else {
      this.state = 3;
      this.stateClasses = 'state state-three';
    }
  }

  focusInput(): void {
    this.textareaComponent?.nativeElement?.focus();
  }

  onStoryTextChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    target.value = removeMultipleWhitespaces(target.value);
  }
}
