import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// Layout
// Pages
import Home from "../pages/Home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
    </>
  )
);
