import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container py-5">
          <div className="row">
            <div className=" col-sm-12 col-md-12 col-xl-6 mt-4">
              <h3 className="orangeText">Our Contact Us</h3>
              <h1 className="primaryText my-3">Easy to contact us</h1>
              <p className="secondaryText">
                We always ready to help by providijng the best services for you.
                We beleive a good blace to live can make your life bette
              </p>

              <div className="row gap-4 ms-lg-1 mt-4">
                <div className="mode col-md-6 col-lg-6 ">
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon rounded-2">
                      <MdCall size={25} />
                    </div>
                    <div className="d d-flex flex-column gap-1 ">
                      <span className="primaryText fs-6">Call</span>
                      <span className="secondaryText">021 123 145 14</span>
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <button className=" rounded-2">call now</button>
                  </div>
                </div>
                <div className="mode col-md-6 col-lg-6 ">
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon rounded-2">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="d d-flex flex-column gap-1 ">
                      <span className="primaryText fs-6">Chat</span>
                      <span className="secondaryText">021 123 145 14</span>
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <button className=" rounded-2">Chat now</button>
                  </div>
                </div>
                <div className="mode col-md-6 col-lg-6 ">
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon rounded-2">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="d d-flex flex-column gap-1 ">
                      <span className="primaryText fs-6">Video Call</span>
                      <span className="secondaryText">021 123 145 14</span>
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <button className=" rounded-2">Video Call now</button>
                  </div>
                </div>
                <div className="mode col-md-6 col-lg-6 ">
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon rounded-2">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="d d-flex flex-column gap-1 ">
                      <span className="primaryText fs-6">Message</span>
                      <span className="secondaryText">021 123 145 14</span>
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <button className=" rounded-2">Message now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right col-md-12 col-xl-6">
              <div className="image">
                <img src="../../public/contact.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
