import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "../components/404page/ErrorPage";
import Films from "../components/header/films/Films";
// Layout
import RootLayout from "../layouts/root-layout/RootLayout";
// Pages
import Home from "../pages/Home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/films" element={<Films />} />
        {/* other routes */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);
