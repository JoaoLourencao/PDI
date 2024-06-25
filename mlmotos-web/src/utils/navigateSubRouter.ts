
export function navigateSubRouter(router, newRoute) {
  return router.push(`${router.asPath}/${newRoute.toLowerCase()}`);
}
