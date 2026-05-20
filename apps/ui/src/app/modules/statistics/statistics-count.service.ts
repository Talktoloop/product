import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StatisticsCountService {
  public count = new BehaviorSubject<{ stories: number; cases: number }>({ stories: 0, cases: 0 });
}
