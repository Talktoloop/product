import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-circle-icon',
  templateUrl: './add-circle-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCircleIconComponent {}
