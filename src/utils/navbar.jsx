import React from "react";
import { css } from "styled-components";
const Home = React.lazy(() => import("../pages/Home"));
const Properties = React.lazy(() => import("../pages/Properties"));
const SignIn = React.lazy(() => import("../pages/SignIn"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const HouseItem = React.lazy(() => import("../pages/HouseItem"));
const MyProfile = React.lazy(() => import("../pages/My"));
const AddNewHouse = React.lazy(() => import("../pages/NewHouse"));
const Favorite = React.lazy(() => import("../pages/Favorite"));
import loading from "../assets/icons/loading.gif";

const spinStyle = {
  height: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const navbar = [
  {
    id: 0,
    path: "/",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <div style={spinStyle}>
              <img src={loading} alt={"anim"} />
            </div>
          </React.Fragment>
        }
      >
        <Home />
      </React.Suspense>
    ),
    title: "Home",
    private: false,
    hidden: false,
  },
  {
    id: 2,
    path: "/properties",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <div style={spinStyle}>
              <img src={loading} alt={"anim"} />
            </div>
          </React.Fragment>
        }
      >
        <Properties />
      </React.Suspense>
    ),
    title: "Properties",
    private: false,
    hidden: false,
  },
  {
    id: 3,
    path: "/properties/:id",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <div style={spinStyle}>
              <img src={loading} alt={"anim"} />
            </div>
          </React.Fragment>
        }
      >
        <HouseItem />
      </React.Suspense>
    ),
    private: false,
    hidden: true,
  },
  {
    id: 4,
    path: "/signin",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <div style={spinStyle}>
              <img src={loading} alt={"anim"} />
            </div>
          </React.Fragment>
        }
      >
        <SignIn />
      </React.Suspense>
    ),
    title: "Signin",
    private: false,
    hidden: true,
  },
  {
    id: 5,
    path: "/signup",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <div style={spinStyle}>
              <img src={loading} alt={"anim"} />
            </div>
          </React.Fragment>
        }
      >
        <SignUp />
      </React.Suspense>
    ),
    title: "Signup",
    private: false,
    hidden: true,
  },
  {
    id: 6,
    path: "/myprofile",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <div style={spinStyle}>
              <img src={loading} alt={"anim"} />
            </div>
          </React.Fragment>
        }
      >
        <MyProfile />
      </React.Suspense>
    ),
    title: "Signup",
    private: false,
    hidden: true,
  },
  {
    id: 7,
    path: "/myprofile/newhouse",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <div style={spinStyle}>
              <img src={loading} alt={"anim"} />
            </div>
          </React.Fragment>
        }
      >
        <AddNewHouse />
      </React.Suspense>
    ),
    title: "Signup",
    private: false,
    hidden: true,
  },
  {
    id: 8,
    path: "/favorite",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <div style={spinStyle}>
              <img src={loading} alt={"anim"} />
            </div>
          </React.Fragment>
        }
      >
        <Favorite />
      </React.Suspense>
    ),
    title: "Favorite",
    private: true,
    hidden: false,
  },
];
