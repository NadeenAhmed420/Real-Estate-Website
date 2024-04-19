import "./getStarted.css";

export default function GetStarted() {
  return (
    <>
      <section className="get-started container">
        <div className=" py-5 d-flex flex-column justify-content-center  align-items-center">
          <h1 className="text-white">Get started with NADEEN</h1>
          <p className="my-4 text-white-50">
            Subscribe and find super attractive price quotes from us. Find your
            residence soon
          </p>
          <button className="btn text-white py-2 px-4 ">
            <a href="mailto:nadeenahmed420@gmail.com"> Get Started</a>
          </button>
        </div>
      </section>
    </>
  );
}
