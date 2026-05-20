export interface TwilioCallStatsInterface {
  allActiveCalls: number;
  inbound: {
    all: number;
    inProgress: number;
    ringing: number;
    queued: number;
  };
  outbound: {
    all: number;
    inProgress: number;
    ringing: number;
    queued: number;
  };
}
