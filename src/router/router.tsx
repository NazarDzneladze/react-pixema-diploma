import { FavoritesPage, HomePage, NotFoundPage, SettingsPage, TrendsPage } from "pages";
import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "templates";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
    </Route>,
  ),
  { basename: "/react-pixema-diploma" },
);
