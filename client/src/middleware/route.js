import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");
export const Protected = ({ children }) => {
  if (!token) {
    return (
      <Navigate
        to={"/"}
        replace={true}
      ></Navigate>
    );
  }
  return children;
};

export const Public = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      replace={true}
    ></Navigate>
  );
};

export const Admin = ({ children }) => {
  const user = jwtDecode(localStorage.getItem("token"));

  if (user.isAdmin && token) {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      replace={true}
    ></Navigate>
  );
};
