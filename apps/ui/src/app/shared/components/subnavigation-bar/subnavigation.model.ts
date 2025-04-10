export interface SubNavigationRoute {
  name: string;
  path: string;
  exact: boolean;
  count?: number | null;
  blocked?: boolean;
  inbox?: boolean;
}

export interface SubNavigationRouteCountChange {
  path: string;
  count: number;
}
