import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account-circle-icon',
  templateUrl: './account-circle-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCircleIconComponent {}
