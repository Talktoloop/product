import { Injectable } from '@angular/core';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { inboxFiltersConfig } from '@app/modules/inbox/inbox-filters.config';
import { IGetPendingStoriesFiltersAPI } from '@app/modules/inbox/inbox-filters.service';
import { ChannelFilters } from '@app/modules/outbox/outbox-filter/outbox-filter.model';
import { StoryService } from '@core/services/api/story/story.service';
import { prepareFilterDataFromSessionStorage } from '@shared/utils/filters.utils';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { IInboxChannelMetricConfig, IInboxChannelMetrics, InboxMetricChannel } from './models/inbox-channel-metrics.model';

const mapMetricKey = (channel: InboxMetricChannel): keyof IInboxChannelMetrics =>
  channel === CHANNEL_CONSTANTS.IVRR ? 'voice' : (channel as keyof IInboxChannelMetrics);

@Injectable()
export class InboxChannelMetricsService {
  readonly metricChannels: IInboxChannelMetricConfig[] = ChannelFilters.map(({ name }) => {
    const channel = name as InboxMetricChannel;
    return {
      key: mapMetricKey(channel),
      channel,
      labelKey: `filtersV2.channel.${name}`,
    };
  });

  metrics$ = new BehaviorSubject<IInboxChannelMetrics>(
    this.metricChannels.reduce((metrics, { key }) => ({ ...metrics, [key]: 0 }), { voice: 0, whatsapp: 0 } as IInboxChannelMetrics),
  );
  metricsLoading$ = new BehaviorSubject<boolean>(false);

  private requestId = 0;

  refresh(storyService: StoryService): void {
    const filters = { ...prepareFilterDataFromSessionStorage(inboxFiltersConfig) } as IGetPendingStoriesFiltersAPI;
    delete filters.channel;
    const id = ++this.requestId;

    this.metricsLoading$.next(true);
    forkJoin(
      this.metricChannels.map(({ channel, key }) =>
        storyService.getPostsModerator({ ...filters, channel: [channel] }, 1, 1, 'desc').pipe(
          map((response) => ({ key, count: response.meta.totalItems || 0 })),
          catchError(() => of({ key, count: 0 })),
        ),
      ),
    )
      .pipe(finalize(() => id === this.requestId && this.metricsLoading$.next(false)))
      .subscribe((rows) => {
        if (id !== this.requestId) {
          return;
        }
        this.metrics$.next(rows.reduce((metrics, { key, count }) => ({ ...metrics, [key]: count }), { ...this.metrics$.getValue() }));
      });
  }
}
