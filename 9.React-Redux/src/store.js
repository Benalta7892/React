import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counter from "./features/counter";
import fruits from "./features/fruits";
import fruitsCart from "./features/fruitsCart";
import logger from "redux-logger";
import users from "./features/users";

export const store = configureStore({
  reducer: {
    counter,
    fruits,
    fruitsCart,
    users,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Middleware personnalisé
// function customMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       // console.log(store);
//       // console.log(store.getState());
//       // console.log(next);
//       // console.log(action);
//       next({
//         type: "fruitsCart/addOne",
//         payload: {
//           name: "Mango",
//           url: "/images/mango.jpg",
//           price: 999,
//           id: 65237894,
//         },
//       });
//     };
//   };
// }
