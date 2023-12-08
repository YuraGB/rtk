import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const HomePage = React.lazy(() => import("../../pages/HomePage/HomePage.tsx"));
import Layout from "../../components/Layout/Layout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense fallback={null}>
            <HomePage />
          </Suspense>
        }
      />
    </Route>,
  ),
);

export const RoutesComponent = () => <RouterProvider router={router} />;
