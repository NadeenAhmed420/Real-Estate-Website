import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container py-5">
          <div className="footer-content d-flex justify-content-between ">
            <div className="d-flex flex-column gap-3 justify-content-center ">
              <img src="../public/logo2.png" alt="" width={120} />
              <span className="secondaryText ">
                Our vision is to make all people the best place to live for
                them.
              </span>
            </div>
            <div className=" info">
              <h1 className="primaryText">Information</h1>
              <span className="secondaryText ">145 New York, FL 5467, USA</span>
              <div className="footer-menu d-flex gap-4 mt-4">
                <a href="">Property</a>
                <a href="">Services</a>
                <a href="">Product</a>
                <a href="">About Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
