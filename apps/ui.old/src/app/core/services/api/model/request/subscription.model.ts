export enum AccessType {
  Paid = 'paid',
  Free = 'free',
}

export interface ISubscriptionRequest {
  access: AccessType;
}
