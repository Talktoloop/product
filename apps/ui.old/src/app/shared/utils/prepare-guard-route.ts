import { Router } from '@angular/router';

export function prepareGuardRoute(route: string): string {
  if (!route?.length) {
    return '';
  }
  let path = route.split('?')[0];
  path = path.charAt(path.length - 1) !== '/' ? path + '/' : path;
  path = path.charAt(0) !== '/' ? '/' + path : path;
  return path;
}

export function forceNavigate(router: Router, url: string, middleRoute: string): void {
  router.navigateByUrl(middleRoute, { skipLocationChange: true }).then(() => {
    router.navigate([url]);
  });
}
