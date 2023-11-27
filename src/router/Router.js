import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// Layout
import RootLayout from "../layouts/root-layout/RootLayout";
// Pages
import Home from "../pages/Home/Home";
import ErrorPage from "../components/404page/ErrorPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* other routes */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);
