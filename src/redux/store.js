import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./screen/reducer";
/** store: objek yang nyimppan seluruh state global dan menyediakan method dispatch action untuk
 * mengakses dan mentrigger perubahan state
 */
export const store = configureStore({
  //panggil reducer yang mau dipake
  reducer: {
    screen: screenReducer,
  },
});
export default store;
