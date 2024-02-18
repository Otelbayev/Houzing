import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Universal from "../components/Universal";
import { navbar } from "../utils/navbar";
import RootContext from "../context";
import PrivateRoute from "../utils/PrivateRoute";
import { Button } from "../components/Generics";

export const Root = () => {
  const navigate = useNavigate();
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
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
                height: "100dvh",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  padding: "0 20px",
                  fontWeight: "700",
                }}
              >
                Page Not Found
              </div>
              <Button onClick={() => navigate("/")}>Home</Button>
            </div>
          }
        />
      </Routes>
    </RootContext>
  );
};

export default Root;
