"use client";

import { Provider } from "react-redux";
import store from "../store";

function ProviderComponent({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ProviderComponent;
