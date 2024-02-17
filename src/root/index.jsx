import React from "react";
import { Route, Routes } from "react-router-dom";
import Universal from "../components/Universal";
import { navbar } from "../utils/navbar";
import RootContext from "../context";
import PrivateRoute from "../utils/PrivateRoute";

export const Root = () => {
  return (
    <RootContext>
      <Routes>
        <Route element={<Universal />}>
          {navbar.map(({ id, path, element, private: isPrivate }) =>
            isPrivate ? (
              <Route key={id} element={<PrivateRoute />}>
                <Route key={id} path={path} element={element} />
              </Route>
            ) : (
              <Route key={id} path={path} element={element} />
            )
          )}
        </Route>
      </Routes>
    </RootContext>
  );
};

export default Root;
