import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CaseManagerService } from '@core/services/api/case-manager/case-manager.service';

@Component({
  selector: 'loop-case-manager-message',
  templateUrl: './case-manager-message.component.html',
  styleUrls: ['./case-manager-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseManagerMessageComponent {
  message$ = this.caseManagerService.getRandomMessage();

  constructor(private caseManagerService: CaseManagerService) {}
}
