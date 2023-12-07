import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import Layout from "../../components/Layout/Layout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>,
  ),
);

export const RoutesComponent = () => <RouterProvider router={router} />;
