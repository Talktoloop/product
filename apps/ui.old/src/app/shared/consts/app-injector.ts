import { Injector } from '@angular/core';

export const setAppInjector = (injector: Injector) => (AppInjector = injector);

export let AppInjector: Injector;
