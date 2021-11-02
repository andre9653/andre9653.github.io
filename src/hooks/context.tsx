import React, { createContext, useState, useEffect } from "react";

interface ContextState {
  name?: string;
  lastName?: string;
}

const Context = createContext<ContextState | null>({});

// // function AppContext({ children }) {
// //   const [user, setUser] = useState();
// //   useEffect(() => {
// //     function requestApi() {
// //       const url = "http://localhost:3000/users";
// //       fetch(url)
// //         .then((response) => response.json)
// //         .then((userResponse) => {
// //           console.log(userResponse);
// //         });
// //     }
// //   }, []);

// //   return <Context.Provider value={user}>{children}</Context.Provider>;
// }
