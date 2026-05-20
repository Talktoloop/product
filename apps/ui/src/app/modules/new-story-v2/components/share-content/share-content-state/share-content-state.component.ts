import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-content-state',
  templateUrl: './share-content-state.component.html',
  styleUrls: ['./share-content-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareContentStateComponent {
  public readonly STATE_MAX_LENGTH = 80;
  @Input() state: number;
  @Input() stateClasses: string;

  get stateInfoText(): string {
    switch (this.state) {
      case 0:
        return 'newStoryV2.form.content.stateInfoDefault';
      case 1:
        return 'newStoryV2.form.content.stateInfoGood';
      case 2:
        return 'newStoryV2.form.content.stateInfoGreat';
      case 3:
        return 'newStoryV2.form.content.stateInfoSuperb';
    }
  }
}
