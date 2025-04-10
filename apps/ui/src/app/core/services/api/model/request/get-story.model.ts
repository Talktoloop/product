export class IGetStoriesFiltersAPI {
  place?: string = null;
  country?: string = null;
  organisation?: string = null;
  type?: number[] = null;
  gender?: number[] = null;
  difficulty?: number[] = null;
  age?: number[] = null;
  minority?: number[] = null;
  thematic?: number[] = null;
  regionId?: number = null;
  q?: string = null;
  from?: string = null;
  to?: string = null;
  repliedTo?: number[] = null;
  channelFilter?: string = null;
  storySearchText?: string = null;
}
