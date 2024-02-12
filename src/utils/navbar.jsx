import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Contacts = React.lazy(() => import("../pages/Contacts"));
const Properties = React.lazy(() => import("../pages/Properties"));
const SignIn = React.lazy(() => import("../pages/SignIn"));
const SignUp = React.lazy(() => import("../pages/SignUp"));

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
    path: "/contacts",
    element: (
      <React.Suspense fallback={<React.Fragment>...loading</React.Fragment>}>
        <Contacts />
      </React.Suspense>
    ),
    title: "Contacts",
    private: false,
    hidden: false,
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
