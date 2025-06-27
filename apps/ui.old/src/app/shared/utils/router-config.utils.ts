import { Route, Router } from '@angular/router';

export const findActiveTopLevelRouteConfig = (router: Router, baseParentRouteUrl: string): Route => {
  let foundConfig: Route;
  router.config.some((config) => {
    if (config.children) {
      config.children.some((childConfig) => {
        if (childConfig.path === baseParentRouteUrl) {
          foundConfig = childConfig;
          return true;
        }
        return false;
      });
    }
  });
  return foundConfig;
};
