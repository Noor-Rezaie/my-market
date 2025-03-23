import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  function handleShow() {
    setShowModal(true);
  }
  function handleClose() {
    setShowModal(false);
  }
  return (
    <>
      <header className="py-4 text-white shadow-md bg-stone-800">
        <div className="container flex items-center justify-between px-4 mx-auto">
          <h1 className="text-2xl font-bold">My Market</h1>
          <ul className="flex space-x-4 cursor-pointer">
            <li className="flex items-center gap-2 p-2">
              <FaUser /> Sign In/Up
            </li>
            <li>
              <button
                onClick={handleShow}
                className="flex items-center gap-2 p-2 hover:bg-stone-400"
              >
                <FaShoppingCart /> Shop
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center hidden w-screen h-screen mx-auto rounded-lg shadow-xl p-14 bg-purple-50">
        Modal
      </div>
    </>
  );
}

export default Navbar;
