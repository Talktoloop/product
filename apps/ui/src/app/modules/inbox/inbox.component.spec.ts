import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from '@admin/services/admin-data.service';
import { InboxChannelMetricsService } from '@app/modules/inbox/inbox-channel-metrics.service';
import { InboxFiltersService } from '@app/modules/inbox/inbox-filters.service';
import { FiltersService } from '@core/services/filters/filters.service';
import { SupportedLanguagesService } from '@core/services/locales/supported-languages.service';
import { UIService } from '@core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { InboxComponent } from './inbox.component';

describe('InboxComponent', () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;
  const routerEvents$ = new Subject<any>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboxComponent],
      providers: [
        { provide: Router, useValue: { events: routerEvents$ } },
        { provide: TranslateService, useValue: { instant: (v: string) => v } },
        { provide: AdminDataService, useValue: { downloadPendingQuantity: () => null, quantityData$: new BehaviorSubject(null) } },
        { provide: InboxFiltersService, useValue: { setInboxRoutes: () => null } },
        { provide: SupportedLanguagesService, useValue: { getSupportedLanguages: () => of([]) } },
        { provide: UIService, useValue: { tabletView: false, desktopView: true } },
        { provide: FiltersService, useValue: { filtersChanged$: new Subject<void>() } },
        InboxChannelMetricsService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
