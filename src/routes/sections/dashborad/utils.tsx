import { lazy } from "react";

const Pages = import.meta.glob("/src/pages/**/*.tsx");
console.log(Pages);
const lazyComponentCache = new Map<string, React.LazyExoticComponent<any>>();

// export const loadComponentFromPath = ()

export const Component = (path: string = "", props?: any): React.ReactNode => {
  if (!path) return null;

  let importFn = Pages[`/src${path}.tsx`];
  if (!importFn) {
    importFn = Pages[`/src${path}/index.tsx`];
  }
  if (!importFn) {
    console.warn("Component not found for path:", path);
    return null;
  }

  let Element = lazyComponentCache.get(path);
  if (!Element) {
    Element = lazy(importFn as any);
  }

  return <Element {...props} />;
};
