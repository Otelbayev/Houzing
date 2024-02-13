import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Properties = React.lazy(() => import("../pages/Properties"));
const SignIn = React.lazy(() => import("../pages/SignIn"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const HouseItem = React.lazy(() => import("../pages/HouseItem"));

export const navbar = [
  {
    id: 0,
    path: "/",
    element: (
      <React.Suspense fallback={<React.Fragment>...loading</React.Fragment>}>
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
      <React.Suspense fallback={<React.Fragment>...loading</React.Fragment>}>
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
      <React.Suspense fallback={<React.Fragment>...loading</React.Fragment>}>
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
      <React.Suspense fallback={<React.Fragment>...loading</React.Fragment>}>
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
      <React.Suspense fallback={<React.Fragment>...loading</React.Fragment>}>
        <SignUp />
      </React.Suspense>
    ),
    title: "Signup",
    private: false,
    hidden: true,
  },
];
