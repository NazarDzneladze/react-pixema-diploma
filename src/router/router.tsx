import { RequareAuth } from "components";
import {
  DetailsPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
} from "pages";
import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { AuthTemplate, MainTemplate } from "templates";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        </Route>
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
      </Route>
      <Route path={ROUTE.SIGN_UP} element={<AuthTemplate />}>
        {/* <Route index element={<SignInPage />} /> */}
        <Route index element={<SignUpPage />} />
      </Route>
    </>,
  ),
  { basename: "/react-pixema-diploma" },
);
