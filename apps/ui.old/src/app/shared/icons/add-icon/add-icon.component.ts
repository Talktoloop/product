import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-icon',
  templateUrl: './add-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddIconComponent {}
