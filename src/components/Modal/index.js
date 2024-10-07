import react from "react";
import Button from "../atoms/Buttons";
const Modal = ({ handleClose, handleLogout }) => {
  return (
    <>
      <div className="fixed z-10 inset-0">
        <div className=" min-h-screen">
          <div className="flex justify-center items-center fixed inset-0 bg-gray-500 bg-opacity-75 h-screen">
            <div className="inline-block bg-white rounded-xl p-5 max-w-lg align-middle w-full shadow-xl overflow-hidden transform">
              <div className="flex flex-col">
                <span className="font-bold text-lg mb-2">
                  konfirmasi logout
                </span>

                <p>apakah anda yakn ingin log out</p>
                <div className="flex justify-end mt-5 gap-3">
                  <Button
                    color="bg-gray-500"
                    textButton="Cancel"
                    onClick={handleClose}
                  />
                  <Button
                    color="bg-red-500"
                    textButton="yes"
                    onClick={handleLogout}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
