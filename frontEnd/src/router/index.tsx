import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
const Login = lazy(() => import("../views/login"))
const Project = lazy(() => import("../views/project"))
const CreateProject = lazy(() => import("../views/project/CreateProject"))
const ProjectList = lazy(() => import("../views/project/ProjectList"))
const Authority = lazy(() => import("../views/authority"))
const AuthorityList = lazy(() => import("../views/authority/AuthorityList"))
const UserList = lazy(() => import("../views/authority/UserList"))
const NoFound = lazy(() => import("../views/noFound"))
const WorkSpace = lazy(() => import("../views/workspace"))
const ProjectInfo = lazy(() => import("../views/project/Information-child"))

type Props = {
  children: JSX.Element
}

// 路由鉴权组件
export const AuthorityRoute: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

interface Router {
  name?: string;
  path: string;
  children?: Array<Router>;
  element: JSX.Element
}

export const normalRoutes: Array<Router> = [
  {
    path: "*",
    element: <Login />,
  },
]

export const dynamicRoutes: Array<Router> = [
  {
    path: "/",
    element: <AuthorityRoute><WorkSpace /></AuthorityRoute>,
  },
  {
    path: "/home",
    element: <AuthorityRoute><WorkSpace /></AuthorityRoute>,
  },
  {
    path: "/project",
    element: <AuthorityRoute><Project /></AuthorityRoute>,
    children: [{
      path: "list",
      element: <AuthorityRoute><ProjectList /></AuthorityRoute>
    }, {
      path: "create",
      element: <AuthorityRoute><CreateProject /></AuthorityRoute>
    }, {
      path: ":id",
      element: <AuthorityRoute><ProjectInfo /></AuthorityRoute>
    }]
  },
  {
    path: "/authority",
    element: <AuthorityRoute><Authority /></AuthorityRoute>,
    children: [{
      path: "authorityList",
      element: <AuthorityRoute><AuthorityList /></AuthorityRoute>
    }, {
      path: "userList",
      element: <AuthorityRoute><UserList /></AuthorityRoute>
    }]
  },
  {
    path: "*",
    element: <NoFound />,
  },
];