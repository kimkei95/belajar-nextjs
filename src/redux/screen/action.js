import { SET_IS_LARGE_SCREEN, SET_IS_MOBILE_SCREEN } from "./constant";
/**file action: objek yang mendeskripsikan perubahan yang ingin dilakukan pada state
 * atau action seperti sebuah perintah yang akan di kirimkan ke reducer
 */
//fungsi setIsMobileScreen disebut sbg action creator
export const setIsMobileScreen = (isMobile) => ({
  type: SET_IS_MOBILE_SCREEN, //type: menentukan jenis action yang diterima dari constant
  payload: isMobile, //payload: nilai yang diperbarui ketika action dijalankan
});
export const setIsLargeScreen = (isLarge) => ({
  type: SET_IS_LARGE_SCREEN, //type: menentukan jenis action yang diterima dari constant
  payload: isLarge, //payload: nilai yang diperbarui ketika action dijalankan
});
