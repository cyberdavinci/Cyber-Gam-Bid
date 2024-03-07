import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import Home from "./pages/Home";
import RoutesMountingComponent from "./components/generic/RoutesMountingComponent";
import MainLayout from "./pages/layout/MainLayout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<RoutesMountingComponent />}>
        <Routes>
          {publicRoutes.map((route, idx) => (
            <Route
              key={`public-route-${idx}`}
              path={route.path}
              element={
                <MainLayout title={route.title}>{route.element}</MainLayout>
              }
            />
          ))}
          <Route
            path="*"
            element={
              <MainLayout title="404 - Page Not Found">
                <NotFound />
              </MainLayout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
