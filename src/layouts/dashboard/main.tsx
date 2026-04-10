import React from "react";
import { Outlet } from "react-router";

function Main() {
  return (
    <div>
      <h1>Main</h1>
      <Outlet />
    </div>
  );
}

export default Main;
