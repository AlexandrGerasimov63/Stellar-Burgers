import { ReactNode } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { ILocation } from "../../utils/types";

interface IProtectedRoute {
  children: React.ReactNode;
  path?: string
}


export function ProtectedRoute({ children, ...rest }:IProtectedRoute) {
  const token = getCookie("accessToken");
  const location = useLocation<ILocation>()
  return (
    <Route
      {...rest}
      render={() => (token ? children : <Redirect to={{ pathname: "/login", state: {from: location}}} />)}
    />
  );
}
