import { Flow } from '../enum/flow.enum';

export const isStoryFlow = (flow: string): boolean => flow === Flow.SHARE_STORY;
