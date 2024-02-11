import React from "react";
import { Route, Routes } from "react-router-dom";
import Universal from "../components/Universal";
import { navbar } from "../utils/navbar";

export const Root = () => {
  return (
    <Routes>
      <Route element={<Universal />}>
        {navbar.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default Root;
