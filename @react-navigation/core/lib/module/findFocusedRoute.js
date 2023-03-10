export default function findFocusedRoute(state) {
  var _current2, _current3;
  let current = state;
  while (((_current = current) === null || _current === void 0 ? void 0 : _current.routes[current.index ?? 0].state) != null) {
    var _current;
    current = current.routes[current.index ?? 0].state;
  }
  const route = (_current2 = current) === null || _current2 === void 0 ? void 0 : _current2.routes[((_current3 = current) === null || _current3 === void 0 ? void 0 : _current3.index) ?? 0];
  return route;
}
//# sourceMappingURL=findFocusedRoute.js.map