import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import Landing from "./pages/Landing";

import Providers from "./providers";
import ComingSoon from "./components/ComingSoon";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Providers>
        <PageLayout>
          <Outlet />
        </PageLayout>
      </Providers>
    ),
    children: [
      {
        id: "Home",
        index: true,
        element: <Landing />,
      },
      {
        id: "Our Story",
        path: "our-story",
        element: <ComingSoon />,
      },
      {
        id: "Student Branch Map",
        path: "map",
        element: <ComingSoon />,
      },
      {
        id: "Events",
        path: "events",
        element: <ComingSoon />,
      },
      {
        id: "Gallery",
        path: "gallery",
        element: <ComingSoon />,
      },

      {
        id: "Awards",
        path: "awards",
        element: <ComingSoon />,
      },
      {
        path: "*",
        element: <ComingSoon />,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
