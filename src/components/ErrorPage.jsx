import React from "react";
import "./CSS/ErrorPage.css";
const ErrorPage = () => {
  return (
    <div className=" d-flex justify-content-center  c-img">
      <img
        className="ErrorImage"
        src={require("../assets/error.jpg")}
        alt="Page Not Found"
      />
    </div>
  );
};
export default ErrorPage;
