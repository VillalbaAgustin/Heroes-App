import { Routes, Route } from "react-router-dom";

import { LoginPages } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRute } from "./PrivateRute";
import { PublicRouter } from "./PublicRouter";


export const AppRouter = () => {
  return (
    <>
      <Routes>
      <Route path="login" element={
        <PublicRouter>
          <LoginPages/>
        </PublicRouter>
      }/>
        {/* <Route path="login" element={<LoginPages />} /> */}
        <Route path="/*" element={
          <PrivateRute> 
            <HeroesRoutes />
          </PrivateRute>
        }/>
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}

      </Routes>
    </>
  );
};
