import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RoutesComponent } from "./modules/router";
import { Provider } from "react-redux";
import { setupStore } from "./context";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <RoutesComponent />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
);
