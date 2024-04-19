import { useState } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { OutsideClickHandler } from "react-outside-click-handler";

export default function Header() {
  //false ===> closed menu
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
      // check width and close the menu
    }
    return {};
  };
  return (
    <>
      <header>
        <div className="py-3 ">
          <div className="container d-flex align-items-center  justify-content-between  mt-3">
            <img src="/public/logo.png" alt="" className="logo" />

            {/* <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}> */}
            {/* make function on style when it opened */}
            <div
              className="menu d-flex gap-lg-5 gap-md-4 gap-4 align-items-center  "
              style={getMenuStyle(menuOpened)}
            >
              <a href="">Residencies</a>
              <a href="">Our values</a>
              <a href="">Contact Us</a>
              <a href="">Get started</a>
              <a className=" main-btn" href="">
                Conatct
              </a>
            </div>
            {/* </OutsideClickHandler> */}
            <div
              className="menu-icon"
              onClick={() => setMenuOpened((x) => !x)}
            >
              <BiMenuAltRight size={30} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
