export function prepareUrl(baseUrl: string, endpointSuffix: string): string {
  const base = baseUrl.endsWith('/') ? baseUrl.slice(0, baseUrl.length - 1) : baseUrl;
  const endpoint = endpointSuffix.startsWith('/') ? endpointSuffix : `/${endpointSuffix}`;
  return `${base}${endpoint}`;
}
