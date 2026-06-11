import { fakeAsync, tick } from '@angular/core/testing';
import { InboxChannelMetricsService } from '@app/modules/inbox/inbox-channel-metrics.service';
import { of, Subject } from 'rxjs';
import { StoriesService } from './stories.service';

describe('StoriesService', () => {
  const listResponse = {
    items: [],
    meta: { totalItems: 42 },
  } as any;

  let storyService: { getPostsModerator: jasmine.Spy };
  let filtersService: { filtersChanged$: Subject<void> };
  let paginationService: { currentPage: number; itemsPerPage: number; init: jasmine.Spy; restoreStateAfterError: jasmine.Spy };
  let router: { url: string };
  let uiService: { mobileView: boolean };
  let metricsService: InboxChannelMetricsService;

  const createService = (): StoriesService =>
    new StoriesService(
      router as any,
      storyService as any,
      {} as any,
      filtersService as any,
      paginationService as any,
      uiService as any,
      metricsService,
    );

  beforeEach(() => {
    storyService = {
      getPostsModerator: jasmine.createSpy('getPostsModerator'),
    };
    filtersService = {
      filtersChanged$: new Subject<void>(),
    };
    paginationService = {
      currentPage: 1,
      itemsPerPage: 50,
      init: jasmine.createSpy('init'),
      restoreStateAfterError: jasmine.createSpy('restoreStateAfterError'),
    };
    router = { url: '/inbox/stories' };
    uiService = { mobileView: false };
    metricsService = new InboxChannelMetricsService();
  });

  it('should fetch and publish channel metrics', () => {
    storyService.getPostsModerator.and.returnValue(of({ meta: { totalItems: 21 } } as any));

    createService();

    const metrics = metricsService.metrics$.getValue();
    expect(metrics.voice).toBe(21);
    expect(metrics.whatsapp).toBe(21);
  });

  it('should debounce filters change before refetching list and metrics', fakeAsync(() => {
    storyService.getPostsModerator.and.returnValue(of(listResponse));
    createService();
    storyService.getPostsModerator.calls.reset();

    filtersService.filtersChanged$.next();
    tick(299);
    expect(storyService.getPostsModerator).not.toHaveBeenCalled();

    tick(1);
    const metricRequestsPerFetch = metricsService.metricChannels.length + 1;
    expect(storyService.getPostsModerator.calls.count()).toBe(metricRequestsPerFetch);
  }));
});
