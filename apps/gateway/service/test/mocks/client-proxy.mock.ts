import { of } from 'rxjs';

export const clientProxyMock = {
  send: jest.fn(() => of({})),
};
