import { createContext } from "react";

const Context = createContext({
  name: "esto-es-sin-provider",
  isProgrammer: true,
});

export default Context;
