import React from "react";
import { RouterProvider } from "react-router-dom";
import customRoute from "../customRoute";

export default function App() {
  return (
    <>
      <RouterProvider customRoute={customRoute} />;
    </>
  );
}
