const SEPARATOR = "/";
const PREFIX = ":";

export function routeMatcher(url, path) {
  const pathItems = path.split(SEPARATOR).filter((item) => item.length > 0);
  const urlItems = url.split(SEPARATOR).filter((item) => item.length > 0);
  const maxLength = Math.min(urlItems.length, pathItems.length);
  const params = {};
  if (maxLength === 0)
    return {
      exact: false,
      match: false,
      params: {},
    };

  for (let i = 0; i < maxLength; i++) {
    const urlItem = urlItems[i];
    const pathItem = pathItems[i];
    if (!pathItem || !pathItem.startsWith(PREFIX)) continue;
    const key = pathItem.replace(PREFIX, "");
    params[key] = urlItem;
  }
  let match = true;
  let exact = pathItems.length === urlItems.length;
  for (let i = 0; i < maxLength; i++) {
    const urlItem = urlItems[i];
    const pathItem = pathItems[i];
    if (pathItem.startsWith(PREFIX)) continue;
    match = match && urlItem === pathItem;
  }
  exact = exact && match;

  return {
    exact,
    match,
    params,
  };
}
