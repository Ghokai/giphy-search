import React from "react";
import ContextProvider from "./ContextProvider";
import App from "./App";

export default function AppWrapper() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}
