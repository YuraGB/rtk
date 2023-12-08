import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RoutesComponent } from "./modules/router";
import { Provider } from "react-redux";
import { setupStore } from "./context";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const store = setupStore();
const persist = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <RoutesComponent />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
);
