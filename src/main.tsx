import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const root = document.getElementById("root");

// Substitua o método render por createRoot
const renderMethod = root?.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

renderMethod(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  root
);
