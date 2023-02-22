import "./App.scss";
import Navbar from "./components/Navbar";

// ICONS
import {BsChevronRight} from "react-icons/bs";

function App() {
  return (
    <>
    <div className="netflix-container">
    <Navbar />
      <div className="bg-netflix">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/370eabfb-2db4-4a63-ba8c-9e1821d6de68/PH-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="..."
          className="img-fluid"
        />
        <div className="img-top-overlay"></div>
      </div>
      <div className="container first-container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-content">
              <h1 className="title">
                Unlimited movies, TV <br/> shows, and more.
              </h1>
              <h2 className="my-3">
                Watch anywhere. Cancel anytime.
              </h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <form action="" className="mt-3">
                <div className="form-floating">
                  <input type="email" id="floatingInput" className="form-control" placeholder="Email address" required/>
                  <button class="input-group-text" id="basic-addon2">Get Started               <BsChevronRight/></button>
                  <label htmlFor="floatingInput">Email address</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="first-row-content">
              <h1 className="title">Enjoy your TV.</h1>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-container">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="..." className="img-fluid" />
              <div className="video-container">
                <video autoPlay playsInline muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></video>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
