import { setIsLargeScreen } from "./action";

const { SET_IS_MOBILE_SCREEN, SET_IS_LARGE_SCREEN } = require("./constant");
/**file reducer: membuat fungsi yang nerima state awal dan perintah dari action
 * lalu memperbarui nilai state
 */
/**initialState ini untuk mendefinisikan nilai awal/default state global */
const initialState = {
  isMobileScreen: false,
  isLargeScreen: false,
};
// state: initialState: nentuin nilai default untuk state jika ga ada perubahan
// parameter action: mewakili action yang akan di proses oleh fungsi reducer
const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_MOBILE_SCREEN:
      return {
        ...state, // nyalain dan ngambil semua data state yang ada menggunakan spread operator
        isMobileScreen: action.payload,
      };

    case SET_IS_LARGE_SCREEN:
      return {
        ...state,
        isLargeScreen: action.payload,
      };

    default:
      return state;
  }
};

export default screenReducer;
