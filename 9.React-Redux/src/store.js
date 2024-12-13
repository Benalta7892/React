import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counter from "./features/counter";
import fruits from "./features/fruits";
import fruitsCart from "./features/fruitsCart";

export const store = configureStore({
  reducer: {
    counter,
    fruits,
    fruitsCart,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
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
