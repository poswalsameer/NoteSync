// import { configureStore } from "@reduxjs/toolkit";
// import noteSlice from "../slices/noteSlice";

// // export const store = configureStore({
// //     reducer: noteSlice
// // });

// export const store = configureStore({
//     reducer: {
//       notes: noteSlice,
//       // Add other reducers if you have more slices
//     },
//   });

import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../slices/noteSlice";

const rootReducer = {
  notes: noteReducer,
  // Add other reducers if you have more slices
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;