import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, ViewChild } from '@angular/core';
import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'loop-new-story-radio',
  templateUrl: '../radio/radio.component.html',
  styleUrls: ['./new-story-radio.component.scss'],
  providers: [{ provide: RadioComponent, useExisting: forwardRef(() => NewStoryRadioComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewStoryRadioComponent extends RadioComponent {
  @ViewChild('radio') radio: ElementRef;
  @HostBinding('class.checked')
  get radioChecked(): boolean {
    return this.checked;
  }
}
