import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

const Index = lazy(() => import("./views/index"));
const NotFound = lazy(() => import("./views/404"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>...</div>}>
        <Index />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
];
