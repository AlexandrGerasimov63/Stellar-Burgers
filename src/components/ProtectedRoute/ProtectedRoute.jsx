import { Redirect, Route, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

export function ProtectedRoute({ children, ...rest }) {
  const token = getCookie("accessToken");
  const location = useLocation()
  return (
    <Route
      {...rest}
      render={() => (token ? children : <Redirect to={{ pathname: "/login", state: {from: location}}} />)}
    />
  );
}
