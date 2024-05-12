import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Sophia",
});

export default userContext;
